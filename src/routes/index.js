const app = require('express').Router();
const botsdata = require("../database/models/botlist/bots.js")

console.log("[GhostyLists]: Index router loaded.")

app.get("/", async (req, res) => {
    res.render("index.ejs", {
        bot: global.Client,
        path: req.path,
        config: global.config,
        user: rq.isAuthenticated() ? req.user : null,
        req: req,
        botdata: await botsdata.find(),
        roles: global.config.server.roles,
        channels: global.config.server.chanels
    })
})

module.exports = app;
