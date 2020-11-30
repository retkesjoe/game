<template>
  <h1 class="game-board">Lights Out Puzzle</h1>
  <row v-for="(row, index) in gameBoard" :key="index" :row="row" :rowindex="index"></row>
</template>

<style lang="scss">
.game-board {
  color: gold;
}
</style>

<script lang="ts">
import Row from "./row";

export default {
  name: "GameBoard",
  computed: {
    gameBoard(): Record<string, unknown> {
      return this.$store.state.gameBoard;
    },
  },
  components: {
    Row,
  },
};
</script>
