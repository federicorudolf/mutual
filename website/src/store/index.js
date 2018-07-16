import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    offers: [
      {
        id: '',
        imgSrc: 'https://picsum.photos/300/300/?image=41',
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Food',
      },
      {
        id: '',
        imgSrc: 'https://picsum.photos/300/300/?image=41',
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Food',
      },
      {
        id: '',
        imgSrc: 'https://picsum.photos/300/300/?image=41',
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Food',
      },
      {
        id: '',
        imgSrc: 'https://picsum.photos/300/300/?image=41',
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Food',
      },
    ],
  },
});

export default store;
