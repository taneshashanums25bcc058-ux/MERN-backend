const express = require("express");
const router = express.Router();
const { Signup } = require("../Controller/UserControllers");

router.post("/signup", Signup);