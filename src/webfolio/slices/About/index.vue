<script setup>
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
</script>

<template>
  <h1>ABOUT</h1>
</template>
