<template>
  <li>
    <h3>{{ name }}</h3>
    <div>{{ role }}</div>
  </li>
</template>

<script>
export default {
  props: ['name', 'role'],
};
</script>

<style></style>
