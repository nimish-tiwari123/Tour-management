const router = require("express").Router();
const ensureAuthenticated = require("../middleware/authConfirm");
router.get("/", ensureAuthenticated, (req, res) => {
  console.log("------logged in user details ------", req.user);
  res.status(200).json([
    { name: "Mobile", price: 10000 },
    { name: "TV", price: 20000 },
  ]);
});

module.exports = router;
