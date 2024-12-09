const router = require("express").Router();
const { signup, login } = require("../controllers/auth");
const { signupValidation, loginValidation } = require("../middleware/auth");

router.post("/login", loginValidation, login);

router.post("/signup", signupValidation, signup);

module.exports = router;
