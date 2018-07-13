import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    offers: [
      {
        id: '',
        image: '',
        title: '',
        description: '',
        location: '',
        rubro: '',
      }],
  },
});

export default store;
