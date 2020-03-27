var crypto = require('crypto');

exports.hashPwd = function hashPwd(pwd) {
        return crypto.createHmac('sha256', "secret!") //more information: https://nodejs.org/api/crypto.html
            .update(pwd)
            .digest('hex');
    }
