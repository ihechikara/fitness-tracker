const User = require("../models/user")

// login controller
const loginUser = async (req, res) => {
    res.json({msg: "User logged in"})
}


// signup controller
const signupUser = async (req, res) => {
    res.json({msg: "User signed in"})
}

module.exports = { loginUser, signupUser }