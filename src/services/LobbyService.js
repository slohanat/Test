/* eslint-disable no-unused-vars */
const Service = require('./Service');
const db = require('../db');

class LobbyService {

  /**
   * Create lobby
   * Create a new lobby
   *
   * inlineObject InlineObject
   * no response value expected for this operation
   **/
  static createLobby(req) {
    return new Promise(
      async (resolve) => {
        try {
          db.query('INSERT INTO meiern.lobby (name, owner, maxplayers, numlives) VALUES ($1, 1, $2, $3)', [req.body.name, req.body.maxplayers, req.body.numlives])
            .then(results => resolve(Service.successResponse('')))
            .catch(e => resolve(Service.rejectResponse(e.message || 'Database error', e.status || 500)));
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
   * Get list of lobbies
   * Get list of all open lobbies
   *
   * returns List
   **/
  static getLobbies() {
    return new Promise(
      async (resolve) => {
        try {
          db.query('SELECT id, name, 0 AS players, maxplayers FROM meiern.lobby ORDER BY name ASC')
            .then(results => resolve(Service.successResponse(results.rows)))
            .catch(e => resolve(Service.rejectResponse(e.message || 'Database error', e.status || 500)));
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
   * Get lobby status
   * Get all information on the current lobby. This should be polled until a non-200 status code is received, at which point `/user/status` should be queried to determine whether a game was started or the lobby was destroyed.
   *
   * returns inline_response_200_3
   **/
  static getLobbyStatus() {
    return new Promise(
      async (resolve) => {
        try {
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
   * Join lobby
   * Join a lobby
   *
   * inlineObject1 InlineObject1
   * no response value expected for this operation
   **/
  static joinLobby({ inlineObject1 }) {
    return new Promise(
      async (resolve) => {
        try {
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
   * Leave lobby
   * Leave the current lobby. If the current user is the owner, this destroys the lobby.
   *
   * no response value expected for this operation
   **/
  static leaveLobby() {
    return new Promise(
      async (resolve) => {
        try {
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
   * Start game from lobby
   * Start a game from the current lobby. Only the owner of the lobby may do this.
   *
   * no response value expected for this operation
   **/
  static startLobby() {
    return new Promise(
      async (resolve) => {
        try {
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

}

module.exports = LobbyService;
