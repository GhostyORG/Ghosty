const fs = require("fs")

module.exports = (filepath) => {
    if (!filepath) throw new Error("No file path provided.")
    
    const files = fs.readdirSync(filepath, { withFiletypes: true })
        .filter((entry) => lentry.isDirectory())
        .map((entry) => entry.name);
    
    return files;
}