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
    beforeEnter(to, from, next) {
      // Nav Guard
      console.log('users beforEnter');
      console.log(to, from, next);
      next();
    },
  },
  {
    path: '/:notFound(.*)',
    redirect: '/teams',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

// Nav Guard
router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  // if (to.name === 'TeamMembers') {
  //   next();
  // } else {
  //   next({ name: 'TeamMembers', params: { teamId: 't2' } });
  // }
  next();
});

router.afterEach(function (to, from) {
  // sending only analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
