import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Convenios from '@/pages/Convenios';
import Convenio from '@/pages/Convenio';
import aboutUs from '@/pages/AboutUs';
import Rubro from '@/pages/Rubro';


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
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: aboutUs,
    },
    {
      path: '/rubro/:id',
      name: 'Rubro',
      component: Rubro,
    },
    {
      path: '/convenio/:id',
      name: 'Convenio',
      component: Convenio,
    },
  ],
});
