<template>
  <div class="splashscreen">
    <Splashscreen posts />
  </div>
</template>

<script lang="ts">
import Splashscreen from "./components/splashscreen.vue";

export default {
  name: "Home",
  components: {
    Splashscreen,
  },
  setup(): void {
    console.log(process.env.NODE_ENV);
  },
};
</script>
