const express = require("express")

const { signupUser, loginUser } = require("../controllers/user")

const router = express.Router()

// login route
router.post("/login", loginUser)

// signup
router.post("/signup", signupUser)

module.exports = router