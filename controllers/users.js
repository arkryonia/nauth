module.exports = {
    signUp: async (req, res, next) => {
        // Email & Password. use req.value.body to get body value
        return res.status(200).json(req.value.body)
        // console.log('UserController.SignUp is called')
    },
    signIn: async (req, res, next) => {
        // Generate token
        console.log('UserController.SignIn is called')
    },
    secret: async (req, res, next) => {
        console.log('UserController.secret is called')
    },
}