<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <a href="#">View Members</a>
  </li>
</template>

<script>
export default {
  props: ['name', 'memberCount'],
};
</script>
