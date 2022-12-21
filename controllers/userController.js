require("dotenv").config()
const user = require("../schema/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

module.exports = {
     signIn : async (req, res) => {
        const { email, password } = req.body;
        const userdata = await user.findOne({ email: email });
        if (!userdata) {
         res.status (400).json(
              "This user does not exist. Please try again or sign up for a new account."
           );
        } else {
           const correctPw = await bcrypt.compare(password, userdata.password);
           if (!correctPw) {
            res.status (400).json("Incorrect password. Please try again.");
           } else {
              jwt.sign( {userId: userdata._id} , process.env.token, (err, token) => {
                userdata.token = token
                userdata.save() 
                res.json({
                    token: token,
                    user: { _id: userdata._id },
                 });
              });
           }
        }
     },
     
     signUp : async (req, res) => {
        const { email, password } = req.body;
        console.log(password)
        const userExist = await user.findOne({ email: email });
        if (userExist !== null) {
           res.status (400).json({
            messsage : "A user with this email already exists. Please try again."
           });
        } else {
           const salt = await bcrypt.genSalt(10);
           const hashPw = await bcrypt.hash(password, salt);
     
           const userdata = new user({
              email: email,
              password: hashPw,
           });
           const newUser = await userdata.save();
           res.json({
              user: { _id: newUser._id, email: newUser.email },
           });
        }
     }
}