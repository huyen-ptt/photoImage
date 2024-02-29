<template>
  <h1>{{ title }}</h1>
  <p>This page has {{ views }}</p>
</template>

<script>
export default {
  setup() {
    const title = "Blog 1"
    let views = 0

    return { title, views }
  }
};
</script>