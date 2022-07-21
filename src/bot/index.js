const { Client, Schema } = require('klasa')
const {server: [role_ids: {bot_verifier}], discord_client: {prefix}} = require("@root/config.json")

Client.defualtPermissionLevels
    .add(8, ({guild, member }) => member.roles.cache.had(bot_verifier);

 cont client = new Client({
         commandEditing: true,
         prefix: prefix,
         production: true,
         consoleEvents: {
         log: true,
         error: false,
         warn: false
         },
         disablecorePieces: ["commands"]
});

// Bot Status

client.once('ready', () => {
    client.user.setActivity('Ghosty Lists', { type: "WATCHING" })
})

module.exports.init = async(token) => {
    client.userBaseDirectory = __dirname;
    await client.login(token)
    return client
}