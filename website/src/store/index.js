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
        description: 'Aqui iria la descripcion del convenio.',
        location: 'Berutti 81 - Bahía Blanca',
        beneficio: '15% de descuento en la segunda compra.',
        field: 'Deportes',
      },
      {
        id: '2',
        imgSrc: 'http://www.bahiablanca.satv.org.ar/inicio/images/ko%20sport%20TERMINADA.png',
        title: 'KO Sport',
        description: 'Aqui iria la descripcion del convenio.',
        location: 'Guemes 15 - Bahía Blanca',
        beneficio: '15% de descuento en la segunda compra.',
        field: 'Indumentaria',
      },
      {
        id: '3',
        imgSrc: 'http://www.previsorabeneficios.com.ar/wp-content/uploads/2016/12/No-End-600x600.jpg',
        title: 'No end',
        description: 'Indumentaria masculina.',
        location: 'GÜEMES 15, Bahía Blanca',
        beneficio: '15% de descuento en la segunda compra.',
        field: 'Indumentaria',
      },
      {
        id: '4',
        imgSrc: 'http://www.motozone.com.ar/wp-content/uploads/2015/11/cropped-motz-favicon.png',
        title: 'Moto Zone',
        description: 'Aqui iria la descripcion del convenio.',
        location: 'Caronti 127 - Bahía Blanca',
        beneficio: '15% de descuento en la segunda compra.',
        field: 'Otros',
      },
      {
        id: '5',
        imgSrc: require('../assets/sos4.jpg'),
        title: 'SOS',
        description: 'Somos una empresa dedicada al reciclado de cartuchos de tinta y toner, venta de insumos de computacion e impresoras de volumen alto. Venta de resmas, mouse, teclados, pendrives, parlantes etc.',
        location: 'Berutti 81 - Bahía Blanca',
        beneficio: '15% de descuento de contado efectivo en recarga y service de impresoras. 5% de descuento en equipos y tecnologia. Con una orden de compra hasta 3 cuotas sin interes. Los descuentos no son acumulables con otras promociones.',
        field: 'Otros',
      },

    ],
  },
});

export default store;
