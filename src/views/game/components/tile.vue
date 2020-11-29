<template>
  <div class="tile" @click="$event.target.classList.toggle('active')"></div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.tile {
  background-color: #fff083;
  width: 64px;
  height: 64px;
  border: 1px solid #ffc880;
  border-radius: 5px;

  &.active {
    background-color: #ff991f;
  }
}
</style>
