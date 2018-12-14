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
        description: 'En No-End te esperamos con toda la Indumentaria formal e informal. Destaca en el día a día, eventos y fiestas.',
        location: 'GÜEMES 15, Bahía Blanca',
        phone: '0291 474-0310',
        facebook: '@noendbahiablanca',
        page: 'www.no-end.com.ar',
        beneficios: [
          {
            number: '20% de descuento',
            text: 'con la compra contado efectivo.',
          },
          {
            number: '3 Cuotas sin interes',
            text: 'por medio de la mutual.',
          },
        ],
        field: 'Indumentaria',
      },
      {
        id: '2',
        imgSrc: require('../assets/tello.jpg'),
        title: 'Farmacia Tello',
        description: 'Farmacia Tello te ofrecen Servicios de Envíos y aplicación de inyectables; toma de Presión Arteria, Perfumería, Herboristería y Regalaría. En nuestra farmacia los servicios de Inyectables y presión arterial a los afiliadosde la Mutual será sin cargo... siendo la aplicación de inyectables de $100 y la toma de presión $40 en nuestro local y por medicación provista en nuestras oficinas farmacéuticas.',
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
            text: 'Farmacia. (Recetas autorizadas por obra social y mutual.)',
          },
        ],
        field: 'Belleza',
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
        description: 'Farmacia Cuschie te ofrecen Servicios de Envíos y aplicación de inyectables; toma de Presión Arteria, Perfumería, Herboristería y Regalaría. En nuestra farmacia los servicios de Inyectables y presión arterial a los afiliadosde la Mutual será sin cargo... siendo la aplicación de inyectables de $100 y la toma de presión $40 en nuestro local y por medicación provista en nuestras oficinas farmacéuticas.',
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
            text: 'Farmacia. (Recetas autorizadas por obra social y mutual.)',
          },
        ],
        field: 'Belleza',
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
        title: 'SOS Reciclado Express',
        description: 'Somo una empresa dedicada al reciclado de cartuchos de tinta y tóner, venta de insumos de computación e impresoras de volumen alto. Venta de resmas, mouse, teclados, pendrives, parlantes etc.',
        location: 'Berutti 81 - Bahía Blanca',
        phone: '0291 454-8030',
        facebook: '@sosrecicladoexpress',
        page: 'www.sosrecicladoexpress.com',
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
        facebook: '-',
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
        description: 'Entrena divertido, diversas actividades, aeróbicas, de tonificación, clases grupales, sala de musculación y Nutrición. Ellos están #Comprometidos con tus ganas de empezar. Te acompañan con un entrenamiento especialmente planificado para cumplir tus objetivos. Súmate y Empeza hoy. Te esperamos todos los días y todo el día de 7 a 22:30hs',
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
        field: 'Gastronomia',
      },
      {
        id: '13',
        imgSrc: require('../assets/quincho-supeh.jpg'),
        title: 'Quincho Supeh',
        description: 'Ofrecemos salón para 40 personas. Con vajilla, heladera, freezer. El quincho cuenta con ventiladores y calefacción; muy buena iluminación. Cuenta con baños individuales para damas y caballeros, con el servicio de agua caliente. Dispone de una Parrilla de 1.60mts y una cocina con horno a disposición. Turnos disponibles, medio día y tarde - noche. Te esperamos... tu consulta no molesta.',
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
        description: 'Dedicado desde hace más de 14 años al cuidado de la salud de tu familia. Te ofrecemos una atención personalizada y de alto nivel ya que en nuestros consultorios contamos con tecnología de última generación para atenderlas necesidades de nuestros pacientes, cumpliendo con estándaresde calidad internacional. Te esperamos....',
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
        field: 'Belleza',
      },
      {
        id: '15',
        imgSrc: require('../assets/repuestos-alem.jpg'),
        title: 'REPUESTOS ALEM',
        description: 'Ventas de repuestos, tren delantero, motor, rodamientos,filtros, lubricantes, correas, distribución, baterías, bombas de agua, electricidad, bujías, encendido amortiguadores, aditivos, frenos y accesorios del automotor. Trabajamos todas las marcas.',
        location: 'Av Alem 2307 - Bahia Blanca',
        phone: '0291 - 4889898',
        facebook: '@repuestosalemsh',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '10% de descuento',
            text: 'contado efectivo.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '16',
        imgSrc: require('../assets/verduleria-nito.jpg'),
        title: 'VERDULERIA Y FRUTERIA "NITO"',
        description: 'En nuestro local vas a encontrar todas las variedades de frutas y verduras más frescas del mercado. Nuestros productos fueron especialmente seleccionados para su mejor calidad. Te esperamos en nuestro local, donde contaras con la mejor atención personalizada.',
        location: 'Casanova 784 - Bahia Blanca',
        phone: '0291 - 5706520',
        facebook: '-',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '15% de descuento',
            text: 'contado efectivo.',
          },
        ],
        field: 'Gastronomia',
      },
      {
        id: '17',
        imgSrc: require('../assets/motozone.png'),
        title: 'Motozone',
        description: 'En nuestro local vas a encontrar las mejores marcas del mercado, como la línea de Zanella: Zb 110, Rx 150, Ceccato 150, ZR 150; en la línea Motomel: Blitz 110, S2 150, Skua 150, 200, 250; en la línea Benelli: Tnt 15, 25, 300, 302, y también en la línea Suzuki Ax 100, En 125 y Gixxer 150. Te esperamos.',
        location: 'Corrientes 401 y Villarino 555 - Bahia Blanca',
        phone: '0291 - 5120302',
        facebook: '@motozonebahia',
        page: 'www.motozone.com.ar',
        beneficios: [
          {
            number: '8% de descuento',
            text: 'contado efectivo.',
          },
          {
            number: 'Te financiamos tu moto',
            text: 'en 12 cuotas por medio de la mutual.',
          },
          {
            number: '15% de descuento',
            text: 'en el service de tu moto, contado efectivo. (Presentando Carnet de la Mutual y Tarjeta Verde a Tu Nombre)',
          },
          {
            number: '10% en repuestos',
            text: 'y accesorios, contado efectivo',
          }
        ],
        field: 'Otros',
      },
      {
        id: '18',
        imgSrc: require('../assets/dunatos-panaderia.jpg'),
        title: 'PANADERIA Y CONFITERIA "DUNATOS"',
        description: 'En nuestro local vas a encontras las mejores facturas de manteca, polvorones, masas secas y finas, Grisines, panes especiales y ayuyas, pan saborizado, elaboramos tortas de cumpleaños y casamientos, somos fabricantes de sándwich de migas y pizza lista, te esperamos.',
        location: 'Diagonal Spurr 2861 - Bahia Blanca',
        phone: '0291 - 405458',
        facebook: '-',
        page: '-',
        beneficios: [
          {
            number: '10% de descuento',
            text: 'contado efectivo.',
          },
        ],
        field: 'Gastronomia',
      },
      {
        id: '19',
        imgSrc: require('../assets/el-cabeza.jpg'),
        title: 'CONTENEDORES "EL CABEZA"',
        description: 'Servicio de contenedores y volquetes, para la construcción y el particular; el mejor servicio al menor precio. También te ofrecemos el servicio de Áridos, arenafina y mediana, escombro, canto rodado, tierra negra o para relleno y mucho más... comunícate. Atendemos las 24 horas.',
        location: 'Bahia Blanca',
        phone: '0291 - 4378671',
        facebook: '@contenedoreselcabeza',
        page: '-',
        beneficios: [
          {
            number: '10% de descuento',
            text: 'contado efectivo.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '20',
        imgSrc: require('../assets/turismo-regionales.jpg'),
        title: 'TURISMO REGIONALES',
        description: 'Trabajamos en el área de turismo regionales; salidas programadas de 1 o 2 días cerca de Bahía blanca. Descubriendo y recorriendo lugares distintos como Río Colorado, Termas de Médanos, Colonia Menonitas (Guatrache), Sierra de la Ventana, Las Grutas, etc. Incluimos en los costos el transporte. Cabaña u hotel con desayuno. Almuerzo o cenas show. Y realizando excursiones recorriendo los distintos lugares de la zona.!!!!',
        location: 'Bahia Blanca',
        phone: '291 - 4438833',
        facebook: '@Juan Pablo Chirino',
        page: '-',
        beneficios: [
          {
            number: '10% de descuento',
            text: 'contado efectivo.',
          },
        ],
        field: 'Turismo',
      },
      {
        id: '21',
        imgSrc: require('../assets/rotiseria-marisa.jpg'),
        title: 'ROTISERIA LA MARISA',
        description: 'En nuestro local te ofrecemos las mejores Comidas caseras y elaboradas. Elaboramos Viandas diarias. Todos los días tenemos deferentes Promociones y hacemos envíos a domicilio.',
        location: 'Brazil 688 - Bahia Blanca',
        phone: '0291 - 4540442',
        facebook: '@rotiseriamarisa.b.blanca',
        page: '-',
        beneficios: [
          {
            number: '10% de descuento',
            text: 'contado efectivo.',
          },
        ],
        field: 'Gastronomia',
      },
      {
        id: '22',
        imgSrc: require('../assets/yanushewski-aberturas.jpg'),
        title: 'ABERTURAS DE ALUMINIO YANISHEWSKI',
        description: 'Somos fabricantes de aberturas de aluminio. Hacemos todo tipo de aberturas. Puerta, portones, postigos, paños fijos, ventanas corredizas, patagónicas, de abrir, mamparas de baño, mosquiteros etc. Realizamos servicios. (cambios de cortinas PVC, ruedas, vidrios, Bisagras. Etc.) Contamos con cajones compactos exteriores, vidrios simples, laminados y DVH. Colocamos y Asesoramos.',
        location: 'Pilcaniyen 3100 - Bahia Blanca',
        phone: '0291 - 55160057',
        facebook: '@aberturasyanishewki',
        page: '-',
        beneficios: [
          {
            number: '10% de descuento',
            text: 'contado efectivo.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '23',
        imgSrc: require('../assets/gran-maestro.jpg'),
        title: 'PANADERIA Y CONFITERIA "GRAN MAESTRO"',
        description: 'Brindamos a nuestros clientes productos artesanales con materia prima de primera calidad, cuidando cada proceso de su elaboración para que llegue a manos del cliente de forma correcta y ordenada brindando así una excelente calidad en todo el producto que elaboramos. Elaborar el pan más rico, te ofrecemos las mejores facturas de manteca, postres, alfajores artesanales, variedad de hojaldre, sándwiches triples de miga, pizzas listas y mucho más...Preparamos y presupuestamos el catering para cumples y todo tipo de fiesta. Tu consulta no nos molesta.',
        location: 'Pampa Central esquina Holdich - Bahia Blanca',
        phone: '291 - 5007203',
        facebook: '@gran maestro panaderia y confiteria',
        page: '-',
        beneficios: [
          {
            number: '15% de descuento',
            text: 'contado efectivo.',
          },
          {
            number: 'Armamos tu menu',
            text: 'para fiestas y cumpleaños.',
          },
          {
            number: '3 cuotas sin interes',
            text: 'por medio de la mutual.',
          },
        ],
        field: 'Gastronomia',
      },
      {
        id: '24',
        imgSrc: require('../assets/epa.png'),
        title: 'COMIDAS RAPIDAS "EPA" FAST FOOD & DRINKS',
        description: 'En nuestro local encontraras un servicio de comidas rápidas de calidad, en un ambiente ameno y relajado, brindando una experiencia única para nuestros comensales. Nuestros productos recorren diferentes opciones tradicionalmente conocidas como "comida rápida". Nos diferencia un producto de calidad, la utilización ingredientes seleccionados y el diseño de un menú propio. Nuestro menú se compone del tipo de platos conocidos como "comida rápida". Incluye: sándwich de lomo, sándwich de bondiola, sándwich de milanesa de pollo, sándwich de milanesa de carne vacuna, hamburguesas, panchos y ensaladas. Contamos con un servicio de cafetería y en cuanto a bebidas, se incluye la venta de bebidas sin alcohol (jugos, gaseosas y agua), con la incorporación de la cerveza tirada de la mano de Barbarroja, así como también de sus botellas con diferentes sabores.',
        location: 'Av Alem esquina San Juan - Bahia Blanca',
        phone: '291 - 4418457',
        facebook: '@epabahia',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: 'Retirando y con tu tarjeta',
            text: '"Yo soy amigo de EPA"',
          },
          {
            number: '10% de descuento',
            text: 'contado efectivo.',
          },
          {
            number: 'El dia de tu cumple te invitamos',
            text: 'tu cena y el brindis para vos y un amigo.',
          },
          {
            number: 'Descuentos exclusivos',
            text: 'en la app de Epa.',
          },
        ],
        field: 'Gastronomia',
      },
      {
        id: '25',
        imgSrc: require('../assets/peluqueria-personal.jpg'),
        title: 'PELUQUERIA "PERSONAL"',
        description: '',
        location: 'Cervantes 433 - Bahia Blanca',
        phone: '0291 - 4524179',
        facebook: '-',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '30% de descuento',
            text: 'contado efectivo. (Caballeros - Damas - Niños)',
          },
          {
            number: '30% de descuento',
            text: 'en barberia.',
          },
          {
            number: '50% de descuento',
            text: 'en cursos de barberia y perfeccionamiento.',
          },
        ],
        field: 'Belleza',
      },
      {
        id: '26',
        imgSrc: require('../assets/uno-bahia-club.png'),
        title: 'UNO BAHIA CLUB',
        description: 'En nuestro local tenemos el ejercicio indicado para cada persona, podes entrenar y divertite junto a nuestro profes, te ofrecemos diversas actividades, aeróbicas, de tonificación, clases de natacion, sala de musculación y un servicio de guarderia. Estmos Comprometidos a acompañarte con un entrenamiento con el objetivo de cumplir tus metas propuestas. Te esperamos todos los días de 7 a 22:30hs.',
        location: 'Lavalle 605 - Bahia Blanca',
        phone: '0291 - 4501012',
        facebook: '@unobahiaclub',
        page: 'www.unobahiaclub.com.ar',
        beneficios: [
          {
            number: 'Plan Platino: Actividades a eleccion',
            text: 'Musculacion de 7 a 22:30; natacion 2 veces por semana con profesor o pileta libre; Fitness Grupal; Gimnasia Acuática; Entrenamiento funcional; Karate; Cycle; Pilates; Cardio Mas; Fit Box y Guarderia. COSTO: $1.732',
          },
          {
            number: 'Plan oro: Actividades a eleccion',
            text: 'Musculación todos los días; Fitness Grupal; Entrenamiento funcional ; Karate; Cycle; Pilates; Cardio Mas Y Fit Box. COSTO: $1.270',
          },
          {
            number: 'Cambio estilo de vida',
            text: 'Este plan contempla un tratamiento multidisciplinario para revertir los factores de riesgo cardiovasculares, principalmente sobre peso, hipertensión, colesterol, diabetes, y el sedentarismo. Contempla chequeos médicos, planificación y seguimiento del entrenamiento. COSTO: $1.935',
          },
          {
            number: 'Plan familiar',
            text: 'Hijos menores: En todas las actividades tendrán un 20% descuento, sobre el precio vigente de mostrador.',
          },
          {
            number: 'Plan familiar',
            text: 'Hijos mayores, esposo/a: Se beneficiarán con el mismo valor del plan para empleados.',
          },
          {
            number: 'Natacion',
            text: '2 Veces por semana con profesor o pileta libre. COSTO: $1.540',
          },
          {
            number: 'Convenio de 6 meses',
            text: 'por medio de la mutual.',
          },
        ],
        field: 'Deportes',
      },
      {
        id: '27',
        imgSrc: require('../assets/la-mulata-tintoreria.jpg'),
        title: 'TINTORERIA Y LAVANDERIA LA MULATA',
        description: 'En nuestros locales, podes confiarnos tus Plumones, Acolchados, Camperas, Alfombras, Sacos... Limpiamos todo!!! Con la máxima responsabilidad y confianza que se merece. Retiros y Envíos sin cargo.',
        location: 'Corrientes 499 esquina Gral Paz / 12 de Octubre 108 esquina Sarmiento - Bahia Blanca',
        phone: '0291 - 4522418 / 0291 - 4511569',
        facebook: '@LaMulataTintoreria',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '15% de descuento',
            text: 'contado efectivo.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '28',
        imgSrc: require('../assets/leo.jpg'),
        title: 'LV SERVICE DE REFRIGERACION',
        description: 'Instalación y reparación de aire acondicionados, heladeras familiares y comerciales. Service de lavarropas.',
        location: 'Salvador Mazza 1946 - Bahia Blanca',
        phone: '0291 - 4261734',
        facebook: '-',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '20% de descuento',
            text: 'contado efectivo.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '29',
        imgSrc: require('../assets/lubeck.jpg'),
        title: 'CENTRO DE BATERIAS Y SERVICIOS LUBECK',
        description: 'En Nuestro local tenemos como misión brindar a nuestros clientes productos y servicios de alta calidad. Brindamos asesoramiento y confiabilidad, para lograr satisfacer a nuestros clientes y ser reconocidos como proveedores de soluciones en el almacenamiento de energía eléctrica.',
        location: 'Brown 803 - Bahia Blanca',
        phone: '0291 - 4562943 / 0291 - 4560676',
        facebook: '-',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '10% de descuento contado efectivo',
            text: 'En las marcas Lubeck - Moura - Press y Yuasa.',
          },
          {
            number: 'Con una orden de compra por medio de la mutual',
            text: 'hasta 3 cuotas sin interes.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '30',
        imgSrc: require('../assets/bhi-viajes.png'),
        title: 'BHI VIAJES Y TURISMO',
        description: '',
        location: 'Caronti 127 - Bahia Blanca',
        phone: '0291 - 4566670',
        facebook: '@bhiviajesbahia',
        page: 'www.bviajes.tur.ar',
        beneficios: [
          {
            number: '10% de descuento',
            text: 'contado efectivo',
          },
        ],
        field: 'Turismo',
      },
      {
        id: '31',
        imgSrc: require('../assets/abasto-tecnologia.jpg'),
        title: 'ABASTO TECNOLOGIA',
        description: 'En abasto tecnología encontraras lo más nuevo en tecnología, te ofrecemos Smart tv, Equipos de Música, Parlantes Portátiles, Computadoras de Escritorio, Notebook, Netbook, Tablet y toda la gama de accesorio. Contamos con una amplia variedad de Celulares, Fundas y Accesorios. También te ofrecemos Servicio Técnico en Computadora, Celulares y Tablet.',
        location: 'Zelarrayan 2589 - Bahia Blanca',
        phone: '0291 - 5043137',
        facebook: '@abasto.tecno',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '5% de descuento',
            text: 'en efectivo en equipos y tecnologia.',
          },
          {
            number: '10% de descuento',
            text: 'en todas las gamas de accesorios.',
          },
          {
            number: '20% de descuento',
            text: 'en contado efectivo en servicio tecnico.',
          },
        ],
        field: 'Otros',
      },
      {
        id: '32',
        imgSrc: require('../assets/natatorio-club-argentino.jpg'),
        title: 'NATATORIO CLIMATIZADO "CLUB ARGENTINO"',
        description: 'Te ofrecemos clases de natación, pileta libre y gimnasia acuática. Podes disfrutar en familia, porque también ofrecemos natación para chicos y bebes.',
        location: 'Av. Colon 67 - Bahia Blanca',
        phone: '0291 - 4977069',
        facebook: '-',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '15% de descuento',
            text: 'contado efectivo',
          },
          {
            number: '20% de descuento,',
            text: 'convenio de 6 meses por medio de la mutual.',
          },
        ],
        field: 'Deportes',
      },
      {
        id: '33',
        imgSrc: require('../assets/optica-ver-mas.jpg'),
        title: 'OPTICA VER+',
        description: 'En Óptica ver más vas a encontrar la mejor calidad al mejor de precio en lentes recetados y de sol, multifocales lentes de contacto y productos para su conservación.. arreglos y más. Con 10 años de trayectoria en nuestro local vas a obtener la mejor atención personalizada y orientación para obtener siempre lo mejor del mercado, lo que está de moda y tendencias del momento. Te esperamos en nuestro local de Villa Mitre.',
        location: 'Caseros 1555 - Bahia Blanca',
        phone: '0291 - 4822909',
        facebook: '@Óptica ver más villa mitre',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '30% de descuento contado efectivo',
            text: '(Lentes bajo recetas de Graduacion de Stop.)',
          },
          {
            number: '20% de descuento contado efectivo',
            text: '(Anteojos de Sol.)',
          },
          {
            number: '3 cuotas sin interes',
            text: 'por medio de la mutual.',
          },
        ],
        field: 'Belleza',
      },
      {
        id: '34',
        imgSrc: require('../assets/bienestar-sport.png'),
        title: 'BIENESTAR SPORT',
        description: 'En nuestro local vas a encontrar todo lo relacionado en artículos deportivos. Tenemos Accesorios y máquinas para deportes como: fútbol, básquet, vóley, tenis, pádel, suplementos, rugby, hockey, artes marciales, boxeo, karate, taekwondo ITF y WTF, handball, patín artístico, longboard, rollers, skates, psicomotricidad, atletismo, fitness, protecciones cintas de caminar, bicicletas fijas, caminadores elípticos, multigimnasios, natación. Gran variedad de mallas anticloro. Completísimo surtido en artículos de entrenamiento funcional. Musculación. Cintas de caminar.... contamos con todo lo que necesitas para ejercitarte.',
        location: 'O`higgins 291 - Bahia Blanca',
        phone: '0291 - 4548621',
        facebook: '@bbienestar.sport',
        page: 'www.bienestarsport.com.ar',
        beneficios: [
          {
            number: '15% de descuento',
            text: 'contado efectivo.',
          },
          {
            number: '3 cuotas sin interes',
            text: 'por medio de la mutual.',
          },
        ],
        field: 'Deportes',
      },
      {
        id: '35',
        imgSrc: require('../assets/ko-sport.jpg'),
        title: 'KO SPORT',
        description: 'KO sport, abarca todos tipos de deportes y actividades fitness, en las que se destaca indumentaria y accesorios para entrenamiento, running, boxeo y deportes de contacto, equipamiento para gimnasios y hogar, natación, futbol, hockey, entre otras actividades.',
        location: 'Saavedra 111 - Bahia Blanca',
        phone: '0291 - 4527019',
        facebook: '@kosportbahia',
        page: 'www.kosport.com.ar',
        beneficios: [
          {
            number: '10% de descuento',
            text: 'contado efectivo.',
          },
          {
            number: '2 o 3 cuotas sin interes',
            text: 'por medio de la mutual.',
          },
        ],
        field: 'Deportes',
      },
      {
        id: '36',
        imgSrc: require('../assets/lavadero-argentino.jpg'),
        title: 'LAVADERO ARGENTINO',
        description: 'Lavadero Argentino ofrece el servicio convencional de lavado de carrocería Interior y exterior, abrimos de lunes a sábado. Usamos productos de primer nivel para que su auto quede de la mejor manera. También te ofrecemos los servicios de, Lavado de motor, Lavado de chasis, Limpieza profunda de tapizados, Encerado, Lustrado + Pulido.',
        location: 'Brandsen 610 - Bahia Blanca',
        phone: '0291 - 4524249 / 291 - 5783307',
        facebook: '-',
        page: 'Sin sitio web',
        beneficios: [
          {
            number: '20% de descuento',
            text: 'contado efectivo',
          },
        ],
        field: 'Otros',
      },
      {
        id: '37',
        imgSrc: require('../assets/frigorifico-la-mascota.jpg'),
        title: 'FRIGORIFICO LA MASCOTA',
        description: 'En nuestro local encontraras los mejores cortes de carne vacuna, corderos, cerdo, achuras y chacinados artesanales de elaboración propia. Productos totalmente garantizados en calidad y sanidad. Te esperamos con la mejor atención y cordialidad.',
        location: 'Av. Colon 2502 - Bahia Blanca',
        phone: '0291 - 6432222',
        facebook: '-',
        page: '@frigorifico la mascota',
        beneficios: [
          {
            number: '10% de descuento',
            text: 'contado efectivo',
          },
          {
            number: '15% de descuento contado efectivo',
            text: 'todos los domingos en pulpas.',
          },
          {
            number: '2 o 3 cuotas sin interes',
            text: 'por medio de la mutual.',
          },
        ],
        field: 'Gastronomia',
      },
      {
        id: '38',
        imgSrc: require('../assets/pau-eventos.png'),
        title: 'PAU EVENTOS SERVICIOS INTEGRALES',
        description: 'En Pau Eventos, te ofrecemos un servició integral para todo tipo de evento, Casamientos, 15 Años, Coofee Break, Reuniones Empresariales. Para brindarte el mejor evento, contamos con el servicio del salón ARIANO, DJ, sonido e Iluminación, Barra de Tragos móviles, fotografía y filmación (Jorge Ordoñez), peinados y make up (Merlina´s). Comunícate tenemos la propuesta acorde a tu necesidad.',
        location: 'Bravard 160 - Bahia Blanca',
        phone: '0291 - 5012217',
        facebook: '-',
        page: '@pau eventos',
        beneficios: [
          {
            number: '10% de descuento',
            text: 'contado efectivo',
          },
          {
            number: '30% de descuento',
            text: 'en servicio de barra.',
          },
          {
            number: 'Contratando el servicio integral',
            text: 'la torta del evento (2 pisos) sin cargo!!.',
          },
          {
            number: 'Hasta 6 cuotas sin interes',
            text: 'por medio de la mutual.',
          },
          {
            number: '10%',
            text: 'Tortas infantiles, Casamientos y 15 años contado efectivo.',
          },
          {
            number: '20%',
            text: 'Si a la torta le sumas la mesa dulce',
          },
          {
            number: '10%',
            text: 'Candy Bar',
          }
        ],
        field: 'Salones',
      },
      {
        id: '39',
        imgSrc: require('../assets/pintureria-fernandez.jpg'),
        title: 'FERNANDEZ PINTURERIA',
        description: 'Te ofrecemos soluciones al momento de pintar su obra, asesoramiento técnico personalizado, simulador de color con foto real, contamos con toda la línea de productos Tersuave. Disponemos de excelente atención en nuestras 3 sucursales.',
        location: 'Sarmiento 1330 / Av. Alem 1936 / Soler 493 Esq. Lavalle - Bahia Blanca',
        phone: '0291 453-5203 / 0291 488-0022 / 0291 451-5397',
        facebook: '-',
        page: '-',
        beneficios: [
          {
            number: '3 de cuotas sin interes',
            text: 'por medio de la mutual.',
          },
          {
            number: '30% de descuento',
            text: 'efectivo',
          },
        ],
        field: 'Otros',
      },
      {
        id: '40',
        imgSrc: require('../assets/figueroa_nancy.png'),
        title: 'FIGUEROA NANCY (MASAJES – REFLEXOLOGÍA)',
        description: 'En Nuestra sala te brindamos, Terapias para el Bienestar, Masajes, Reflexología podal reflexología facial y craneal, Armonización con péndulo, Reiki, Sesiones y Cursos.',
        location: 'La Valle 84 - Piso 5 / Dpto "B" - Bahia Blanca',
        phone: '0291 4238943',
        facebook: '@SAT NAM-Nancy Figueroa',
        page: '-',
        beneficios: [
          {
            number: '20% de descuento',
            text: 'contado efectivo',
          },
        ],
        field: 'Belleza',
      },
      {
        id: '41',
        imgSrc: require('../assets/matias-emilio-fernandez.png'),
        title: 'DR. MATIAS EMILIO FERNANDEZ - ASESORAMIENTO JURIDICO',
        description: 'En nuestro estudio brindamos asistencia y asesoramiento jurídico integral poniendo todos nuestros recursos y conocimiento al servicio del cliente, procurando dar una respuesta eficaz frente a sus inquietudes, obrando con la mayor responsabilidad y compromiso. Atendemos cuestiones de índole laboral, accidentes de trabajos, daños y perjuicios, civiles y comerciales, familia y sucesiones. No dude en consultarnos.',
        location: 'Ing. Luiggi 87 - Bahia Blanca',
        phone: '0291 – 154711455',
        facebook: '-',
        page: '-',
        beneficios: [
          {
            number: '-',
            text: '',
          },
        ],
        field: 'Otros',
      }
    ],
  },
});

export default store;
