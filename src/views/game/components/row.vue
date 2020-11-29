<template>
  <div class="row">
    <tile v-for="(tile, index) in row" :key="index"></tile>
  </div>
</template>

<script lang="ts">
import Tile from "./tile";

export default {
  props: ["row"],
  data(): Record<string, unknown> {
    console.log(this.row);
    return this.row;
  },
  components: {
    Tile,
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  width: calc(5 * 64px + 4 * 4px);
  flex-wrap: wrap;
}
</style>
