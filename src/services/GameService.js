/* eslint-disable no-unused-vars */
const Service = require('./Service');

class GameService {

  /**
   * Call bluff
   * Try to call the previous player's bluff
   *
   * returns inline_response_200_5
   **/
  static gameCallBluff() {
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
   * End your turn
   * End your turn by passing on the dice and claiming a score.
   *
   * inlineObject2 InlineObject2 
   * no response value expected for this operation
   **/
  static gamePassOn({ inlineObject2 }) {
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
   * Roll the dice
   * Roll the dice and believe the previous player's claimed score. Multiple request to this endpoint are allowed, but will return the same dice result as the first request of the turn.
   *
   * returns inline_response_200_6
   **/
  static gameRoll() {
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
   * Get game status
   * Get all information on the current game. This should be polled until one player has won the game. Once the game is over, it still has to be left explicitly by posting to `/game/leave`.
   *
   * returns List
   **/
  static getGameStatus() {
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
   * Leave the game
   * Leave the current game. This may be performed either mid-game (setting the player state to `dead`), or after a game has ended. If possible, this will move the user back to the lobby the game was started from. If the lobby is either full or has been destroyed though, they will be set back to `loggedin`. `/user/status` should be queried to determine which of these has happened.
   *
   * no response value expected for this operation
   **/
  static leaveGame() {
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

module.exports = GameService;
