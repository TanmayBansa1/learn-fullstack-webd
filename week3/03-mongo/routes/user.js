const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");


// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.headers.username;
  const password = req.headers.password;

  const userexists = await User.findOne({
    username: username,
    password: password,
  }).exec();

  if (userexists) {
    res.send({
      msg: "User already exists",
    });
    return;
  } else {
    User.create({
      username: username,
      password: password,
    });

    res.send({
      message: "User created successfully",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});

  res.send.json({
    response
  })
  
  
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne({
    username: username
  },{
    "${push}": {
      purchasedCourses: courseId
    }
  })

  res.json({
    message: "Purchase complete!"
})
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;

  const user = await User.findOne({
    username: username
  })

  const response = await Course.find({
    _id: {
      "$in": user.purchasedCourses
    }
  });

  res.json({
    response
  })

});

module.exports = router;
