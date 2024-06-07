import { createSlice } from "@reduxjs/toolkit";
import { pickOtions, option } from "../assets/options";

type gameState = {
  userScore: number;
  houseScore: number;
  userPick: option | null;
  housePick: option | null;
  gameResult: string;
};

const initialState: gameState = {
  userScore: 0,
  houseScore: 0,
  userPick: null,
  housePick: null,
  gameResult: "",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    userPick(state, action) {
      state.userPick = action.payload;
    },
    resetState(state) {
      state.housePick = null;
      state.gameResult = "";
    },

    startGame(state) {
      state.housePick =
        pickOtions[Math.floor(Math.random() * pickOtions.length)];

      if (state.userPick?.name === state.housePick?.name) {
        state.gameResult = "DRAW";
        return;
      }
      if (state.userPick?.beats.includes(state.housePick?.name)) {
        state.userScore += 1;
        state.gameResult = "YOU WIN";
        return;
      } else {
        state.houseScore += 1;
        state.gameResult = "YOU LOOSE";
      }
    },
  },
});

export const { userPick, startGame, resetState } = gameSlice.actions;

export default gameSlice.reducer;
