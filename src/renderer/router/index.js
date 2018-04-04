import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import index from '../view/index/index.vue';
import blog from '../view/blog/blog.vue';
import game from '../view/game/game.vue';
import personal from '../view/personal/personal.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: index,
        },
        {
          path: '/blog',
          component: blog,
        },
        {
          path: '/game',
          component: game,
        },
        {
          path: '/personal',
          component: personal,
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
