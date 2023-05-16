const User = require('../models/userModel');
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    registerUser: async (req, res) => {
        try {
            const potentialUser = await User.findOne({email:req.body.email})
            if(potentialUser) {
                res.status(400).json({message: 'The email already exists'})
            } else {
                const newUser = await User.create(req.body);

                const userToken = jwt.sign({_id: newUser._id, email:newUser}, secret, {expiresIn:'2h'})

                res.status(201).cookie('userToken', userToken, {httpOnly:true, maxAge: 2 * 60 * 60 * 1000}).json(newUser);
            }
        }
        catch(err) {
            res.status(400).json({error: err})
        }
    },

    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({email:req.body.email})
            if(user) {
                const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
                if(passwordsMatch) {
                    const userToken = jwt.sign({_id: user._id, email: user.email}, secret)
                    res.status(201).cookie('userToken', userToken, {httpOnly:true, maxAge: 2 * 60 * 60 * 1000}).json(user);
                } else {
                    res.status(400).json({message: 'Invalid email or password'})
                }
            } else {
                res.status(400).json({message: 'Invalid email or password'})
            }

        }
        catch(err) {
            res.status(400).json({error: 'back end catch loginUser',err})
        }
    },

    logout: (req, res) => {
        res.clearCookie('userToken').json({message:'You logged out'})
    }
}