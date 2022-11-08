<template>
  <button @click="confirmInput">Skusobne tlacidlo</button>
  <button @click="saveChanges">Potvrdzovacie tlacidlo</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: { UserItem },
  inject: ['users'],
  data() {
    return { changesSaved: false };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    },
  }, // Nav Guard
  beforeRouteEnter(to, from, next) {
    console.log('Userlist beforeRouterEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('Userlis beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const conf = confirm('Are you sure? you want to leave ?');
      next(conf);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
