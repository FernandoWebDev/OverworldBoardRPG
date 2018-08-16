function dice() {
}

dice.prototype.D6 = function() {
    return Math.floor((Math.random() * 6) + 1);
}

dice.prototype.D3 = function() {
    return Math.floor((Math.random() * 3) + 1);
}

module.exports = function() {
    return dice;
}