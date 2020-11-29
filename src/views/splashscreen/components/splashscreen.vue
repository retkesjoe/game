<template>
  <h1 class="start-game" v-on:click="startGame">Start game</h1>
</template>

<style lang="scss">
.start-game {
  color: gold;
}
</style>

<script lang="ts">
import router from "../../../router";

export default {
  name: "Splashscreen",
  methods: {
    startGame: (): void => {
      router.push("game");
    },
  },
};
</script>
