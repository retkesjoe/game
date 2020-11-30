<template>
  <div class="row">
    <tile v-for="(tile, index) in row" :key="index" :class="{ active: tile == 1 }" :data-id="rowindex * 5 + index"></tile>
  </div>
</template>

<script lang="ts">
import Tile from "./tile";

export default {
  props: ["row", "rowindex"],
  data(): Record<string, unknown> {
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
  width: calc(5 * 50px + 4 * 4px);
  flex-wrap: wrap;
  margin: 4px;
}
</style>
