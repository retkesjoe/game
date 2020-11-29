<template>
  <h1 class="game-board">Hello world</h1>
  <row v-for="(row, index) in gameBoard" :key="index" :row="row"></row>
</template>

<style lang="scss">
.start-game {
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
