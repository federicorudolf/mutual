/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    offers: [
      {
        id: '1',
        imgSrc: 'https://i.ytimg.com/vi/8QpV9HV2xqA/maxresdefault.jpg',
        title: 'No end',
        description: 'En No-End te esperamos con toda la Indumentaria formal te informal. Destaca en el día a día, eventos y fiestas.',
        location: 'GÜEMES 15, Bahía Blanca',
        phone: '0291 474-0310',
        facebook: '@noendbahiablanca',
        page: 'www.no-end.com.ar',
        beneficios: [
          {
            number: '20% de descuento',
            text: 'con la compra contado efectivo.',
          },
        ],
        field: 'Indumentaria',
      },
      {
        id: '2',
        imgSrc: require('../assets/tello.jpg'),
        title: 'Farmacia Tello',
        description: 'Farmacia - Perfumeria - Medicamentos encontralos en Farmacia Tello',
        location: 'Brown 599 - Bahía Blanca',
        phone: '0291 4550283',
        facebook: '',
        page: 'Sin sitio web.',
        beneficios: [
          {
            number: 'Se adhiere 10%',
            text: 'Perfumeria',
          },
          {
            number: '20% en',
            text: 'Farmacia.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '3',
        imgSrc: require('../assets/productores-del-sur.jpeg'),
        title: 'Productores del Sur',
        description: 'Te ofrecemos las mejores frutas y verduras frescas de estación. Contamos con producción en hortalizas propias de nuestra zona que caracterizan el armado de nuestras góndolas. Proveemos a reconocidas negocios gastronómicos de nuestra ciudad, siempre con la mejor calidad y tiempo de distribución. Envío a domicilio sin cargo a particulares, anexos e instituciones. Visítanos en nuestros locales y anexos con la mejor atención calificada en el rubro.',
        location: 'Vieytes 2201 Esquina Enrique Julio - Bahía Blanca',
        phone: '0291 5360672',
        facebook: '@productoresdelsur',
        page: 'Sin sitio web.',
        beneficios: [
          {
            number: '20% de descuento',
            text: 'contado efectivo.',
          }
        ],
        field: 'Gastronomia',
      },
      {
        id: '4',
        imgSrc: require('../assets/cuschie.jpg'),
        title: 'Farmacia Cuschie',
        description: 'Farmacia - Perfumeria - Medicamentos encontralos en Farmacia Cuschie',
        location: 'Don Bosco 1629 - Bahía Blanca',
        phone: '0291 4557844',
        facebook: '',
        page: 'Sin sitio web.',
        beneficios: [
          {
            number: 'Se adhiere 10%',
            text: 'Perfumeria',
          },
          {
            number: '20% en',
            text: 'Farmacia.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '5',
        imgSrc: require('../assets/rayuelas.jpg'),
        title: 'Casita de fiestas rayuelas',
        description: 'Contamos con una excelente animacion a cargo de profesores. Tenemos cama elastica, inflables, plaza blanda, pelotero, metegol, tejo de aire, mini disco, disfraces, patio con canchita, casita de madera. Capacidad para 30 grandes y 40 chicos. Wifi, aire acondicionado, servicios de cocina. Opcional menu de niños y adultos, barra de jugos y licuados, cumples tematicos (spa party, cocineritos, arte party). Reserva con anticipacion para congelar el precio actual.',
        location: 'Almafuerte 568 - Bahía Blanca',
        phone: '0291 5357216 / 0291 4366843',
        facebook: '',
        page: 'Sin sitio web.',
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
        field: 'Salones',
      },
      {
        id: '6',
        imgSrc: require('../assets/sos4.jpg'),
        title: 'SOS',
        description: 'Somo una empresa dedicada al reciclado de cartuchos de tinta y tóner, venta de insumos de computación e impresoras de volumen alto. Venta de resmas, mouse, teclados, pendrives, parlantes etc.',
        location: 'Berutti 81 - Bahía Blanca',
        phone: '0291 454-8030',
        facebook: '@sosricicladoexpress',
        page: 'www.sosricicladoexpress.com',
        beneficios: [
          {
            number: '15% de descuento',
            text: 'de contado efectivo en recarga y service de impresoras.',
          },
          {
            number: '5% de descuento',
            text: 'en equipos y tecnologia.',
          },
          {
            number: 'Con una orden de compra',
            text: 'hasta 3 cuotas sin interes',
          },
          {
            number: 'Los descuentos no son acumulables',
            text: 'con otras promociones',
          },
        ],
        field: 'Otros',
      },
      {
        id: '7',
        imgSrc: require('../assets/otero.jpg'),
        title: 'Otero hombres',
        description: 'En Otero hombres vas a encontrar todo lo q buscas para tu fiesta formal o informal, cómo, camisas Sport y de vestir, pantalones, jeans, sacos en todas sus línea clásica y entallada, ropa interior, zapatos y mucho más. Veni a visitarnos Tu consulta no nos molesta.',
        location: 'Brown 201 - Bahía Blanca',
        phone: '0291 4540275',
        facebook: '@Otero.H',
        page: 'Sin sitio web.',
        beneficios: [
          {
            number: '20% de descuento',
            text: 'de contado efectivo.',
          },
        ],
        field: 'Indumentaria',
      },
      {
        id: '8',
        imgSrc: require('../assets/elohim.jpg'),
        title: 'Indumentaria Elohim',
        description: 'Indumentaria para toda la familia. Tenemos disponibles talles grandes y traemos por encargue. Acompañamos el local con accesorios para el hogar y más.',
        location: 'Chacabuco 3241 - Bahía Blanca',
        phone: '0291 - 4464721',
        facebook: '@ElohimIndumentaria',
        page: 'Sin sitio web.',
        beneficios: [
          {
            number: '10% de descuento',
            text: 'de contado efectivo.',
          },
        ],
        field: 'Indumentaria',
      },
      {
        id: '9',
        imgSrc: require('../assets/fullgarage.jpg'),
        title: 'Full Garage',
        description: 'Service completo, rotación alineación y balanceo con tecnología 3d, mecánica general. Vendemos cubiertas Dunlop, Firestone, Bridgestone y Michelin entre otras marcas, Venta de baterías Bosch, magneti marelli y nacionales. Toda la línea de aceites. Toda la línea de productos liqui moly (aditivos para aceites y combustibles) y toda la línea de Revigal (cosmética del automotor). Filtros Bosch, Mann y fram como primeras marcas entre otros. También disponemos de una amplia variedad de repuestos y kit de distribución.',
        location: 'O`higgins 266 - Bahía Blanca',
        phone: '0291 - 4522550 / 0291 - 4127248 /0291 - 5016092',
        facebook: '@fullgarage ',
        page: 'Sin sitio web.',
        beneficios: [
          {
            number: '15% de descuento',
            text: 'de contado efectivo.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '10',
        imgSrc: require('../assets/training-center-bahia.jpg'),
        title: 'Training Center Bahia',
        description: 'Entrena divertido, diversas actividades, aeróbicas, de tonificación, clases grupales, sala de musculación y Nutrición. Ellos están #Comprometidos con tus ganas de empezar- Te acompañan con un entrenamiento especialmente planificado para cumplir tus objetivos. Súmate y Empeza hoy. Te esperamos todos los días y todo el día de 7 a 22:30hs',
        location: 'San Martin 358 - Bahía Blanca',
        phone: '0291 - 155260843',
        facebook: '@trainingcenterbahia',
        page: 'www.trainingcenterbahia.com.ar',
        beneficios: [
          {
            number: 'NO PAGAS MATRICULA',
            text: '',
          },
          {
            number: '50% OF EN LA CUOTA',
            text: '(CONVENIO DE 6 MESES POR MEDIO DE LA MUTUAL)',
          },
        ],
        field: 'Deportes',
      },
      {
        id: '11',
        imgSrc: require('../assets/pinotea-fiestas.jpg'),
        title: 'Casita de fiestas Pinotea',
        description: 'Cuenta con una excelente animación para niños de 2 animadores hasta 30 chicos, la capacidad total es de 35 adultos y 35 niños. Servicio de cocina y en las mesas para que puedan disfrutar del evento. Piñata, sorpresa, animaciones y en cuanto a entretenimiento te ofrecemos pelotero, inflable, plaza blanda, metegol, música y luces, disfraces, títeres, pintura, cancha de futbol con césped sintético, cama elástica y juegos de plaza. Te esperamos...',
        location: 'Holdich 758 - Bahía Blanca',
        phone: '0291 - 4517619 / 0291 - 15614766 / 0291 - 15464785',
        facebook: '@Pinoteacasitadefiestas',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '10% DE DESCUENTO',
            text: 'en contado efectivo',
          },
          {
            number: '3 CUOTAS SIN INTERES',
            text: 'POR MEDIO DE LA MUTUAL',
          },
          {
            number: 'CADA 5 FIESTITAS CONTRATADA POR LOS AFILIADOS DE LA',
            text: 'MUTUAL HABRA 1 FIESTITA DE REGALO PARA SORTEAR.',
          },
        ],
        field: 'Salones',
      },
      {
        id: '12',
        imgSrc: require('../assets/jotaese.jpg'),
        title: 'Jotaese Tienda de bebidas',
        description: 'Tienda de bebidas, los mejores regalos!, cervezas artesanales. Venta por mayor y menor. Tomamos a consignación para todo tipo de evento. Veni que te vamos a brindar una solución.',
        location: 'Gurruchaga 299 - Esquina San Martin - Gral. Daniel Cerri',
        phone: '0291 - 6433919',
        facebook: '@JotaeSe',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '5% DE DESCUENTO',
            text: 'en contado efectivo en cervezas.',
          },
          {
            number: '10% DE DESCUENTO',
            text: 'en todo el resto.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '13',
        imgSrc: require('../assets/quincho-supeh.jpg'),
        title: 'Quincho Supeh',
        description: 'Ofrecemos salón para 40 personas. Con vajilla, heladera, freezer, El quincho cuenta con ventiladores y calefacción; muy buena iluminación. Cuenta con baños individuales para damas y caballeros, con el servicio de agua caliente. Dispone de una Parrilla de 1.60mts y una cocina con horno a disposición. Turnos disponibles, medio día y tarde - noche. Te esperamos... tu consulta no molesta.',
        location: 'Las heras 353 - Bahia Blanca',
        phone: '0291 - 4438833',
        facebook: '@Juan Pablo Chirino',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '$1.400 DIAS SEMANA',
            text: 'CONTADO EFECTIVO',
          },
          {
            number: '$1.800 FIN DE SEMANA',
            text: 'CONTADO EFECTIVO',
          },
        ],
        field: 'Salones',
      },
      {
        id: '14',
        imgSrc: require('../assets/tartaglia.jpg'),
        title: 'Tartaglia Christian Ignacio Odontólogo',
        description: 'Te ofrece la atencion personalizada y de alto nivel que mereces, por medio de este y muchos otros servicios. Tu salud esta en las mejores manos gracias a la experiencia de nuestro equipo y los tratamientos de punta que ofrecemos.',
        location: 'Saavedra 299 esquina Fitz Roy- Bahia Blanca',
        phone: '0291 4533331 / 0291 5091602',
        facebook: '-',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: 'Financiacion',
            text: 'hasta 12 cuotas.',
          },
        ],
        field: 'Otros',
      },
    ],
  },
});

export default store;
