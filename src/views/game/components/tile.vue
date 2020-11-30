<template>
  <div class="tile" @click="setAdjacentTiles"></div>
</template>

<script lang="ts">
import router from "@/router";

export default {
  methods: {
    setAdjacentTiles(item: Element): void {
      this.$store.commit("adjTiles", item.target.dataset.id);

      if (this.$store.state.lightsOn === 0) {
        router.push("endgame");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  background-color: #fff083;
  width: 48px;
  height: 48px;
  border: 1px solid #ffc880;
  border-radius: 5px;

  &.active {
    background-color: #ff991f;
  }
}
</style>
