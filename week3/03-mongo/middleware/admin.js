// Middleware for handling auth
const { Admin } = require("../db")
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const adminexists = await Admin.findOne({username: username,
        password: password
    }).exec();

    if(!adminexists){
        res.status(403).send({
            msg: "Admin doesn't exist"
        })
        return;
    }
    else{
        next();
    }
}

module.exports = adminMiddleware;