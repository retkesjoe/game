<template>
  <div class="game">
    <Endscreen />
  </div>
</template>

<script lang="ts">
import Endscreen from "./components/endscreen.vue";

export default {
  components: {
    Endscreen,
  },
  setup(): void {
    console.log(process.env.NODE_ENV);
  },
};
</script>
