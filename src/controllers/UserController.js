const Controller = require('./Controller');

class UserController {
  constructor(Service) {
    this.service = Service;
  }

  async getUserStatus(request, response) {
    await Controller.handleRequest(request, response, this.service.getUserStatus);
  }

  async logUserIn(request, response) {
    await Controller.handleRequest(request, response, this.service.logUserIn);
  }

  async logUserOut(request, response) {
    await Controller.handleRequest(request, response, this.service.logUserOut);
  }

  async registerUser(request, response) {
    await Controller.handleRequest(request, response, this.service.registerUser);
  }

}

module.exports = UserController;
