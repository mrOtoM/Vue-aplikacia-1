import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from '../components/teams/TeamsList.vue';
import UsersList from '../components/users/UsersList.vue';
import TeamMembers from '../components/teams/TeamMembers.vue';

const routes = [
  {
    path: '/teams',
    name: 'TeamsList',
    component: TeamsList,
    alias: '/',
  },
  {
    path: '/users',
    name: 'UsersList',
    component: UsersList,
  },
  {
    path: '/teams/:teamId',
    name: 'TeamMembers',
    component: TeamMembers,
    props: true,
  },
  {
    path: '/:notFound(.*)',
    redirect: '/teams',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
