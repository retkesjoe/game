import { createStore } from "vuex";
import GameBoard from "./game/game-board";

const store = createStore({
  state: {
    gameBoard: GameBoard.state,
  },
  mutations: GameBoard.mutations,
  actions: {},
  modules: {},
});

export default store;
