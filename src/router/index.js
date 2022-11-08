import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from '../components/teams/TeamsList.vue';
import UsersList from '../components/users/UsersList.vue';
import TeamMembers from '../components/teams/TeamMembers.vue';
import TeamsFooter from '../components/teams/TeamsFooter';
import UsersFooter from '../components/users/UsersFooter';

const routes = [
  {
    path: '/teams',
    name: 'TeamsList',
    children: [
      {
        path: '/teams/:teamId',
        name: 'TeamMembers',
        component: TeamMembers,
        props: true,
      },
    ],
    components: { default: TeamsList, footer: TeamsFooter },
    alias: '/',
  },
  {
    path: '/users',
    name: 'UsersList',
    components: { default: UsersList, footer: UsersFooter },
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
