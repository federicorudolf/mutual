import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Convenios from '@/pages/Convenios';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/convenios',
      name: 'Convenios',
      component: Convenios,
    },
  ],
});
