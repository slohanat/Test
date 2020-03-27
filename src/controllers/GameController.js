const Controller = require('./Controller');

class GameController {
  constructor(Service) {
    this.service = Service;
  }

  async gameCallBluff(request, response) {
    await Controller.handleRequest(request, response, this.service.gameCallBluff);
  }

  async gamePassOn(request, response) {
    await Controller.handleRequest(request, response, this.service.gamePassOn);
  }

  async gameRoll(request, response) {
    await Controller.handleRequest(request, response, this.service.gameRoll);
  }

  async getGameStatus(request, response) {
    await Controller.handleRequest(request, response, this.service.getGameStatus);
  }

  async leaveGame(request, response) {
    await Controller.handleRequest(request, response, this.service.leaveGame);
  }

}

module.exports = GameController;
