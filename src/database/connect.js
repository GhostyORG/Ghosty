const config = require("../../config.js")
const mongoose = require("mongoose")

module.exports = async () => {
    mongoose.connect(config.bot.mongourl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false
    }).then(() => {
        console.log("[GhostyLists]: Mongoose successfully connected.")
    }).catch(err => console.log("[GhostyLists]: an error occured while connecting to the database."))
}
