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
        description: 'Natacion - Enseñanza, Gimnasia - Aparatos, Artes Marciales, Canchas de Futbol, Gimnasios, Clubes, Spa - Laval.',
        location: 'Lavalle 605 - Bahía Blanca',
        phone: '0291 450-1012',
        beneficios: [
          {
            number: '',
            text: 'Planes Personales',
          },
          {
            number: '',
            text: 'platino - oro - natacion',
          },
        ],
        field: 'Deportes',
      },
      {
        id: '2',
        imgSrc: 'http://www.bahiablanca.satv.org.ar/inicio/images/ko%20sport%20TERMINADA.png',
        title: 'KO Sport',
        description: 'Lo mejor en materiales de Boxeo, Artes marciales, equipos de entrenamiento, nutricion y estado fisico. ',
        location: 'Saavedra 111 - Bahía Blanca',
        phone: '0291 452-7019',
        beneficios: [
          {
            number: '10%',
            text: 'de descuento',
          },
          {
            number: '',
            text: 'Con la compra de mas de $5000 hasta 3 cuotas sin interes',
          },
        ],
        field: 'Indumentaria',
      },
      {
        id: '3',
        imgSrc: 'http://www.previsorabeneficios.com.ar/wp-content/uploads/2016/12/No-End-600x600.jpg',
        title: 'No end',
        description: 'Indumentaria masculina.',
        location: 'GÜEMES 15, Bahía Blanca',
        phone: '0291 474-0310',
        beneficios: [
          {
            number: '10%',
            text: 'de descuento',
          },
        ],
        field: 'Indumentaria',
      },
      {
        id: '4',
        imgSrc: 'http://www.motozone.com.ar/wp-content/uploads/2015/11/cropped-motz-favicon.png',
        title: 'Moto Zone',
        description: 'Concesionario Oficial: Mondial, Suzuki y Kawasaki.',
        location: 'Villarino 555 - Bahía Blanca',
        phone: '0291 451-6792',
        beneficios: [
          {
            number: '12 cuotas',
            text: 'sin interes',
          },
        ],
        field: 'Otros',
      },
      {
        id: '5',
        imgSrc: require('../assets/sos4.jpg'),
        title: 'SOS',
        description: 'Somos una empresa dedicada al reciclado de cartuchos de tinta y toner, venta de insumos de computacion e impresoras de volumen alto. Venta de resmas, mouse, teclados, pendrives, parlantes etc.',
        location: 'Berutti 81 - Bahía Blanca',
        phone: '0291 454-8030',
        beneficios: [
          {
            number: '15% de descuento',
            text: 'de contado efectivo en recarga y service de impresoras.',
          },
          {
            number: '5% de descuento',
            text: 'en equipos y tecnologia. Con una orden de compra hasta 3 cuotas sin interes. Los descuentos no son acumulables con otras promociones.',
          },
        ],
        field: 'Otros',
      },

    ],
  },
});

export default store;
