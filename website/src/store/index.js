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
      /*{
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
      },*/
      {
        id: '3',
        imgSrc: 'http://www.previsorabeneficios.com.ar/wp-content/uploads/2016/12/No-End-600x600.jpg',
        title: 'No end',
        description: 'En No-End te esperamos con toda la indumentaria formal e informal. Destaca en el dia a dia, donde encontraras todo lo que necesitas para tus eventos y fiestas.',
        location: 'GÜEMES 15, Bahía Blanca',
        phone: '0291 474-0310',
        beneficios: [
          {
            number: '20% de descuento',
            text: 'con la compra contado efectivo.',
          },
        ],
        field: 'Indumentaria',
      },
      /*{
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
      },*/
      {
        id: '6',
        imgSrc: require('../assets/tello.jpg'),
        title: 'Farmacia Tello',
        description: 'Farmacia - Perfumeria - Medicamentos encontralos en Farmacia Tello',
        location: 'Brown 599 - Bahía Blanca',
        phone: '0291 4550283',
        beneficios: [
          {
            number: 'Se adhiere 10%',
            text: 'Perfumeria',
          },
          {
            number: '5% mas 15% (Mutual)',
            text: 'Farmacia.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '8',
        imgSrc: require('../assets/productores-del-sur.jpeg'),
        title: 'Productores del Sur',
        description: 'Te ofrecemos las mejores frutas y verduras frescas de estacion. Contamos con produccion en hortalizas propias de nuestra zona que caracterizan el armado de nuestras gondolas. Proveemos a reconocidos negocios gastronomicos de nuestra ciudad, siempre con la mejor calidad y tiempo de distribucion. Envio a domicilio sin cargo a particulares, anexos e instituciones. Visitanos en nuestros locales y anexos con la mejor atencion calificada en el rubro.',
        location: 'Vieytes 2201 Esquina Enrique Julio - Bahía Blanca',
        phone: '0291 5360672',
        beneficios: [
          {
            number: '20% de descuento',
            text: 'contado efectivo.',
          }
        ],
        field: 'Gastronomia',
      },
      {
        id: '7',
        imgSrc: require('../assets/cuschie.jpg'),
        title: 'Farmacia Cuschie',
        description: 'Farmacia - Perfumeria - Medicamentos encontralos en Farmacia Cuschie',
        location: 'Don Bosco 1629 - Bahía Blanca',
        phone: '0291 4557844',
        beneficios: [
          {
            number: 'Se adhiere 10%',
            text: 'Perfumeria',
          },
          {
            number: '5% mas 15% (Mutual)',
            text: 'Farmacia.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '9',
        imgSrc: require('../assets/rayuelas.jpg'),
        title: 'Casita de fiestas rayuelas',
        description: 'Contamos con una excelente animacion a cargo de profesores. Tenemos cama elastica, inflables, plaza blanda, pelotero, metegol, tejo de aire, mini disco, disfraces, patio con canchita, casita de madera. Capacidad para 30 grandes y 40 chicos. Wifi, aire acondicionado, servicios de cocina. Opcional menu de niños y adultos, barra de jugos y licuados, cumples tematicos (spa party, cocineritos, arte party). Reserva con anticipacion para congelar el precio actual.',
        location: 'Almafuerte 568 - Bahía Blanca',
        phone: '0291 5357216 / 0291 4366843',
        beneficios: [
          {
            number: '15% de descuento',
            text: 'en contado y efectivo.',
          },
          {
            number: '3 cuotas sin interes',
            text: 'por medio de la mutual.',
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
      {
        id: '10',
        imgSrc: require('../assets/otero.jpg'),
        title: 'Otero hombres',
        description: 'En Otero hombres encontras todo lo que buscas para tu fiesta formal e informal, como camisas sport y de vestir, pantalones, jeans, sacos en todas sus lineas clasicas y entallada, ropa interior, zapatos y mucho mas. Veni a visitarnos. Tu consulta no nos molesta.',
        location: 'Brown 201 - Bahía Blanca',
        phone: '0291 4540275',
        beneficios: [
          {
            number: '20% de descuento',
            text: 'de contado efectivo.',
          },
          {
            number: '5% de descuento',
            text: 'en equipos y tecnologia. Con una orden de compra hasta 3 cuotas sin interes. Los descuentos no son acumulables con otras promociones.',
          },
        ],
        field: 'Indumentaria',
      },
    ],
  },
});

export default store;
