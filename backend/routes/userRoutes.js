const router = require("express").Router();
const userController = require('../controllers/userController')

router.post("/login", userController.userLogin);

router.post("/register", userController.userRegister);

router.get("/user", userController.userCreated);

module.exports = router;