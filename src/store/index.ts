import { createStore } from "vuex";
import Example from "./game/game-board";

const store = createStore({
  state: {
    gameBoard: Example.state,
  },
  mutations: {},
  actions: {},
  modules: {},
});

export default store;
