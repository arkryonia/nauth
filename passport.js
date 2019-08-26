const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('./models/user')


// JSON TOKEN WEB STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET
}, async (payload, done) => {
    try {
        // Find the user specified in token
        const user = await User.findById(payload.sub)
        
        // If user does not exist, handle it
        if(!user) return done(null, false)

        // Overwise return the user
        return done(null, user)
    } catch (error) {
        done(error, false)
    }
}))

// LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        // Find the user given the email
        const user = await User.findOne({ email })

        // If user does not exit, handle it
        if(!user) return done(null, false)

        // Check if password is correct
        
        // Overwise return the user
        
    } catch (error) {
        done(error, false)
    }
}))
