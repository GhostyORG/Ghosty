require("module-alias/register")
const mongoose = require("mongoose")
const { MessageEmbed } = require('discord.js')
const bot = require('@bot/index')
const App = require('@structures/app.js')
const { web: {port}, discord_client: {token}, mongo_url } = require("@root/config.json")


(async () => {
    await mongoose.connect(`${mongo_url}`, {
        useCreateIndex: true,
        useNewUrlParaser: true,
        useUnifiedTopology: true,
        useFindandModify: false
    });
    console.log("-----------------------------");
    console.log("        I AM READY TO GO     ");
    console.log("-----------------------------");
    console.log(`Connected to the database on`,`\x1b[34m\x1b[4m${mongo_url}\x1b[0m`);
    console.log("-----------------------------");
    let client = await bot.init(token);
    console.log(`Logged in as ` + `\x1b[34m\x1b[4m${client.user.tag}\x1b[0m`);
    await new App(client).listen(port || 8080);
    console.log(`Running on port ` + `\x1b[34m\x1b[4m${port || 80}\x1b[0m`);
    console.log("-----------------------------");
})()