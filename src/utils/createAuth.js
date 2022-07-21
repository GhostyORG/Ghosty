module.exports = (len=20) => {
    var text= "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0 < len; i++) text += possiblecharAt(Math.floor(Math.random() * possible.length))
    return text;
}