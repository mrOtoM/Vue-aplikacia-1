import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from '../components/teams/TeamsList.vue';
import UsersList from '../components/users/UsersList.vue';

const routes = [
  {
    path: '/teams',
    name: 'TeamsList',
    component: TeamsList,
  },
  {
    path: '/users',
    name: 'UsersList',
    component: UsersList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
