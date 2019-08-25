module.exports = {
    mongo: {
        connect: async (mongoose) => {
            try {
                await mongoose.connect(process.env.DB_URI, {'useNewUrlParser': true})
                console.log(`Database connected successfully ${process.env.DB_URI}`)
            } catch (err) {
                console.log(err)
            }
        }
    }
}