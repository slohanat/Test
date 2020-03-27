const Controller = require('./Controller');

class LobbyController {
  constructor(Service) {
    this.service = Service;
  }

  async createLobby(request, response) {
    await Controller.handleRequest(request, response, this.service.createLobby);
  }

  async getLobbies(request, response) {
    await Controller.handleRequest(request, response, this.service.getLobbies);
  }

  async getLobbyStatus(request, response) {
    await Controller.handleRequest(request, response, this.service.getLobbyStatus);
  }

  async joinLobby(request, response) {
    await Controller.handleRequest(request, response, this.service.joinLobby);
  }

  async leaveLobby(request, response) {
    await Controller.handleRequest(request, response, this.service.leaveLobby);
  }

  async startLobby(request, response) {
    await Controller.handleRequest(request, response, this.service.startLobby);
  }

}

module.exports = LobbyController;
