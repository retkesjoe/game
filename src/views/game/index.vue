<template>
  <div class="game">
    <GameBoard />
  </div>
</template>

<script lang="ts">
import GameBoard from "./components/game.vue";

export default {
  name: "Game",
  components: {
    GameBoard,
  },
  setup(): void {
    console.log(process.env.NODE_ENV);
  },
};
</script>
