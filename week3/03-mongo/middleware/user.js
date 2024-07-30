const { User } = require("../db")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const userexists = await User.findOne({username: username,
        password: password
    }).exec();

    if(!userexists){
        res.status(403).send({
            msg: "User doesn't exist"
        })
        return;
    }
    else{
        next();
    }

}

module.exports = userMiddleware;