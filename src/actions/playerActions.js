import {
  PLAYERS,
  ADD_TO_SELECTION,
  UPDATE_PLAYER_STATS
} from './types';


export const setPlayers = (players) => (dispatch) => {
  dispatch({
    type: PLAYERS,
    payload: players
  });
};

export const addToSelection = (players) => (dispatch) => {
  dispatch({
    type: ADD_TO_SELECTION,
    payload: players
  });
};

export const updatePlayerStats = (players) => (dispatch) => {
  dispatch({
    type: UPDATE_PLAYER_STATS,
    payload: players
  });
};
