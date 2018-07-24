import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    offers: [
      {
        id: '1',
        imgSrc: 'https://picsum.photos/300/300/?image=41',
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '2',
        imgSrc: 'https://picsum.photos/300/300/?image=52',
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Indumentaria',
      },
      {
        id: '3',
        imgSrc: 'https://picsum.photos/300/300/?image=54',
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Deportes',
      },
      {
        id: '4',
        imgSrc: 'https://picsum.photos/300/300/?image=58',
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
    ],
  },
});

export default store;
