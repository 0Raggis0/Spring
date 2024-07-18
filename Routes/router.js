
const { Router } = require("express");
const router = Router();

const {GetUserByUser,createUser} = require("../Controllers/user.controller.js");

router.post("/users/login" , GetUserByUser);
router.post("/users/register", createUser);

module.exports= router;