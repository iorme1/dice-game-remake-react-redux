import {
  ROLL_DICE,
  TAKE_FROM_ROLL,
  RESET_ROLL,
  ROUND_STATUS_CHANGE,
  ROLL_STATUS_CHANGE,
  UPDATE_POT,
  ACTIVE_PLAYER,
  STAKES 
} from './types';

export const setStakes = (stakes) => (dispatch) => {
  dispatch({
    type: STAKES,
    payload: stakes
  });
};

export const rollDice = (roll) => (dispatch) => {
  dispatch({
    type: ROLL_DICE,
    payload: roll
  });
};

export const takeFromRoll = (dice) => (dispatch) => {
  dispatch({
    type: TAKE_FROM_ROLL,
    payload: dice
  });
}

export const resetRoll = (roll) => (dispatch) => {
  dispatch({
    type: RESET_ROLL,
    payload: roll
  });
};

export const roundStart = (roundStatus) => (dispatch) => {
  dispatch({
    type: ROUND_STATUS_CHANGE,
    payload: roundStatus
  });
}

export const rollAvailable = (rollStatus) => (dispatch) => {
  dispatch({
    type: ROLL_STATUS_CHANGE,
    payload: rollStatus
  });
}

export const updatePot = (pot) => (dispatch) => {
  dispatch({
    type: UPDATE_POT,
    payload: pot
  });
}

export const activePlayerChange = (playerID) => (dispatch) => {
  dispatch({
    type: ACTIVE_PLAYER,
    payload: playerID
  });
}
