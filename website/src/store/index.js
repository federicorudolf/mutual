/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    offers: [
      {
        id: '1',
        imgSrc: 'http://adasba.org.ar/wp-content/uploads/2012/07/UNO.png',
        title: 'Uno Bahia Club',
        description: 'Recarga de tinta y toner, service de impresoras',
        location: 'Berutti 81 - Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '2',
        imgSrc: 'http://www.bahiablanca.satv.org.ar/inicio/images/ko%20sport%20TERMINADA.png',
        title: 'KO Sport',
        description: 'Indumentaria masculina',
        location: 'Guemes 15 - Bahía Blanca',
        field: 'Indumentaria',
      },
      {
        id: '3',
        imgSrc: 'http://www.previsorabeneficios.com.ar/wp-content/uploads/2016/12/No-End-600x600.jpg',
        title: 'No end',
        description: 'Apoyo escolar. Primaria y secundaria',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '4',
        imgSrc: 'http://www.motozone.com.ar/wp-content/uploads/2015/11/cropped-motz-favicon.png',
        title: 'Moto Zone',
        description: 'Aqui iria la descripcion del convenio.',
        location: 'Caronti 127 - Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '5',
        imgSrc: require('../assets/05.jpg'),
        title: 'Productores del sur',
        description: 'Frutas y verduras. Venta por mayor y menor. Envios sin cargo.',
        location: 'Vieytes 2201, esquina Enrique Julio - Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '6',
        imgSrc: require('../assets/06.jpg'),
        title: 'La Mulaca',
        description: 'Tintoreria y Lavanderia',
        location: 'Corrientes 499, equina Gral.Paz - Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '7',
        imgSrc: require('../assets/07.jpg'),
        title: 'Lubeck',
        description: 'Centro de baterias y servicios Lubeck',
        location: 'Brown 803 - Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '8',
        imgSrc: require('../assets/08.jpg'),
        title: 'San Maestro',
        description: 'Panaderia y confiteria 100% artesanal',
        location: 'Pampa Central, esquina Holdich - Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '9',
        imgSrc: require('../assets/09.jpg'),
        title: 'Farmacias Tello y Cuschie',
        description: 'Aqui iria la descripcion del convenio.',
        location: 'Tello: Brown 599 / Cuschie: Don Bosco 1629 - Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '10',
        imgSrc: require('../assets/10.jpg'),
        title: 'Dr. Tartaglia Christian Ignacio',
        description: 'Odontologo - Cirguia',
        location: 'Saavedra 299. esquina Fitz Roy - Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '11',
        imgSrc: require('../assets/11.jpg'),
        title: 'Peluqueria Victor Adrian',
        description: 'Corte a caballeros, damas y niños.',
        location: 'Enrique Julio 1258 - Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '12',
        imgSrc: require('../assets/12.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '13',
        imgSrc: require('../assets/13.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '14',
        imgSrc: require('../assets/14.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '15',
        imgSrc: require('../assets/15.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '16',
        imgSrc: require('../assets/16.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '17',
        imgSrc: require('../assets/17.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '18',
        imgSrc: require('../assets/18.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '19',
        imgSrc: require('../assets/19.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '20',
        imgSrc: require('../assets/20.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '21',
        imgSrc: require('../assets/21.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '22',
        imgSrc: require('../assets/22.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '23',
        imgSrc: require('../assets/23.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '24',
        imgSrc: require('../assets/24.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '25',
        imgSrc: require('../assets/25.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '26',
        imgSrc: require('../assets/26.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '27',
        imgSrc: require('../assets/27.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '28',
        imgSrc: require('../assets/28.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '29',
        imgSrc: require('../assets/29.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '30',
        imgSrc: require('../assets/30.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '31',
        imgSrc: require('../assets/31.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '32',
        imgSrc: require('../assets/32.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '33',
        imgSrc: require('../assets/33.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
      {
        id: '34',
        imgSrc: require('../assets/34.jpg'),
        title: 'Card title',
        description: 'This is a card description',
        location: 'Bahía Blanca',
        field: 'Gastronomia',
      },
    ],
  },
});

export default store;
