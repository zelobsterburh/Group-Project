const express = require("express");
const bcryptjs = require("bcryptjs");
const userRouter = express.Router();
const jwt = require("Jsonwebtoken");
const auth = require('../../middleware/auth');
const User = require("../../models/User");
//Sign up
userRouter.post("/signup", async(req,res) => {
    try {
        const {email, password, confirmPassword, username} = req.body;
        if(!email || !password || !username || !confirmPassword) {
            return res.status(400).json({ msg: "Please enter all the fields"});
        }
        if(password.length < 6) {
            return res
            .status(400)
            .json({ msg: "Password should be at least 6 characters"});
        }
        if(confirmPassword != password) {
            return res.status(400).json({ msg: "Both the passwords don't match"});
        }     
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({email, password: hashedPassword, username});
        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);

    } catch(err) {
        res.status(500).json({error: err.message});
    }
});