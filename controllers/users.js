const JWT  = require('jsonwebtoken')
const User = require('../models/user')

signToken = (user) => {
    return JWT.sign({
        iss: 'NemimCode',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, process.env.JWT_SECRET)
}

module.exports = {
    signUp: async (req, res, next) => {
        const { email, password } = req.value.body
               
        // Check if there is a user with a same email
        const foundUser = await User.findOne({ email })
        if (foundUser) return res.status(403).json({error: 'Email is already in use'})

        // Create a new user
        const newUser = new User({ email: email, password: password })
        await newUser.save()
        const token = signToken(newUser) 

        // Response with token
        res.status(200).json({token})

    },
    signIn: async (req, res, next) => {
        // Generate token
    },
    secret: async (req, res, next) => {

    },
}