const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const adminexists = await Admin.findOne({username: username,
        password: password
    }).exec();

    if(adminexists){
        res.send({
            msg: "Admin already exists"
        })
        return;
    }else{
        const newAdmin = new Admin({
            username: username,
            password: password
        })
        newAdmin.save();
        res.json({
            msg: "Admin created successfully"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    //Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })
    newCourse.save();

    res.json({
        message: 'Course created successfully', 
        courseId: newCourse._id
    
    })


});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;