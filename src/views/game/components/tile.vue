<template>
  <div class="tile" @click="setAdjacentTiles"></div>
</template>

<script lang="ts">
export default {
  methods: {
    setAdjacentTiles(item: Element): void {
      console.log(item);
      console.log("store commit: ", this.$store.commit("adjTiles", item.target.dataset.id));
      /* console.log(this.store);
      this.$store.commit("adjTiles", 1); */
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
