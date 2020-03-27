/* eslint-disable no-unused-vars */
const Service = require('./Service');

var Datastore = require('nedb');
var CryptoUtil = require('../utils/cryptoUtil');


class User {
    constructor(email, passwort) {
        this.email = email;
        this.passwortHash = CryptoUtil.hashPwd(passwort);
    }
}

const db = new Datastore({filename: './data/user.db', autoload: true});

class UserService {

  /**
   * Get user status
   * Get the status (i.e. location) of the currently logged in user
   *
   * returns inline_response_200_1
   **/
  static getUserStatus(req) {
    return new Promise(
      async (resolve) => {
        try {
            if(!req.session.user){
                return resolve(Service.successResponse({Error: "Not logged in"}, 401));
            }

          resolve(Service.successResponse({status: 'loggedin'}));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Log user in
   * Log in with usernamd & password
   *
   * credentials Credentials
   * returns inline_response_200
   **/
  static logUserIn( req, credentials ) {
    return new Promise(
      async (resolve) => {
        try {

            let email = credentials.body.username;
            let passwort = credentials.body.password;

            if (!(email && passwort)) {
                return resolve(Service.successResponse({Error: "Please fill in pending fields"}, 401));
            }
            db.findOne({email: email}, function (err, user) {
                    if (user == null) {
                        return resolve(Service.successResponse({Error: "Username or Password not correct."}, 401));
                    }
                    else if(user.passwortHash !== CryptoUtil.hashPwd(passwort)){
                        return resolve(Service.successResponse({Error: "Username or Password not correct."}, 401));
                    } else {
                        req.session.user = credentials.body.username;
                        //test
                        req.cookies.value ='lol';
                        console.log(req.headers);

                        var examples = {};
                        examples['application/json'] = {
                            "id" : user._id
                        };
                        if (Object.keys(examples).length > 0) {
                            resolve(Service.successResponse(examples[Object.keys(examples)[0]]));
                        } else {
                            resolve();
                        }
                    }
                });
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Log user out
   * Log the current user out
   *
   * no response value expected for this operation
   **/
  static logUserOut(req) {
    return new Promise(
      async (resolve) => {
        try {
            req.session.user = {};
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Register new user
   * Register a new user with username & password
   *
   * credentials Credentials
   * returns inline_response_200
   **/
  static registerUser( req, credentials ) {

    return new Promise(
      async (resolve) => {
        try {

            let email = credentials.body.username;
            let passwort = credentials.body.password;

            if (!(email && passwort)) {

                return resolve(Service.successResponse({Error: "Please fill in pending fields"}, 401));
            }
            let user = new User(email, passwort);

            db.findOne({email: email}, function (err, user) {
                if(user != null){
                    return resolve(Service.successResponse({Error: "User exists already"}, 401));
                }
            });

            db.insert(user, function (err, newDoc) {

                    var examples = {};
                    examples['application/json'] = {
                        "id" : newDoc._id
                    };
                    if (Object.keys(examples).length > 0) {
                        resolve(Service.successResponse(examples[Object.keys(examples)[0]]));
                    } else {
                        resolve();
                    }
                });



        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

}

module.exports = UserService;
