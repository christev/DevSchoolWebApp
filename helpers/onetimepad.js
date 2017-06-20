var onetimepad = {};
var alphabet = require("./letters.js");

onetimepad.generateKey = function(length) {
    var key = "";
    for (var i = 0; i < length; i++) {
        key += Math.floor(Math.random() * 10);
    }
    return key;
};

onetimepad.oneTimePad = function (message, key) {
    var encryptedMessage = "";

    for (var i = 0; i < message.length; i ++) {
        var kk = alphabet.shiftForwards(message.charAt(i), key.charAt(i));
        encryptedMessage += alphabet.getCharacterByKey(kk);
    }

    return encryptedMessage;
};

onetimepad.oneTimePadDecrypt = function(message, key) {
    var decryptedMessage = "";

    for (var i = 0; i < message.length; i ++) {
        var kk = alphabet.shiftBackwards(message.charAt(i), key.charAt(i));
        decryptedMessage += alphabet.getCharacterByKey(kk);
    }
    return decryptedMessage;
}

module.exports = onetimepad;