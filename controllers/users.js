const User = require('../models/user')


module.exports = {
    signUp: async (req, res, next) => {
        const { email, password } = req.value.body
               
        // Check if there is a user with a same email
        const foundUser = await User.findOne({ email })
        if (foundUser) return res.status(403).json({error: 'Email is already in use'})

        // Create a new user
        const newUser = new User({ email: email, password: password })
        const user = await newUser.save()
        return res.status(200).json(user)
        // Response with token

    },
    signIn: async (req, res, next) => {
        // Generate token
        console.log('UserController.SignIn is called')
    },
    secret: async (req, res, next) => {
        console.log('UserController.secret is called')
    },
}