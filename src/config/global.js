export default {
  global: {
    componenteFormativo:
      'Servicio y atención al cliente                                   ',
    descripcionCurso:
      'Este componente busca realizar un recorrido por los fundamentos básicos del servicio y atención al cliente, enfocados en el sector moda, con el objetivo de desarrollar en los aprendices las competencias necesarias para estructurar los sistemas de medición continua de la experiencia del cliente, y así liderar decisiones, acciones y estrategias que maximicen la atención y satisfacción del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos del servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de cliente',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de cliente',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos y técnicas de servicio al cliente',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Calidad y cultura de servicio',
        desarrolloContenidos: true,
        subMenu: [{}],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Tipos de canales para el servicio al cliente en redes sociales',
        desarrolloContenidos: true,
        subMenu: [{}],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Nuevas tendencias en servicio al cliente en redes sociales',
        desarrolloContenidos: true,
        subMenu: [{}],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Proceso de servicio al cliente en redes sociales',
        desarrolloContenidos: true,
        subMenu: [{}],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Etiqueta empresarial',
        desarrolloContenidos: true,
        subMenu: [{}],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo:
          'Normativa legal vigente y ética en el manejo de datos (protección de datos)',
        desarrolloContenidos: true,
        subMenu: [{}],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Albán, J. (2002). Etiqueta y protocolo. 1ª edición.',
    },
    {
      referencia:
        'Constitución Política de Colombia [Const.]. Art. 15. 1991 (Colombia). ',
    },
    {
      referencia:
        'Decreto 1377 de 2013. [Presidencia de la República de Colombia]. Por el cual se reglamenta parcialmente la Ley 1581 de 2012. Junio 27 de 2013.',
    },
    {
      referencia:
        'Deming, W. E. (2009). Calidad, productividad y competitividad: la salida de la crisis. Ediciones Diaz de Santos. ',
    },
    {
      referencia:
        'Ley 1266 de 2008. Por la cual se dictan las disposiciones generales del hábeas data y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones. Diciembre 31 de 2008.',
    },
    {
      referencia:
        'Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012.',
    },
    {
      referencia:
        'Maciá,	F.,	y	Gosende,	J.	(2011).	Marketing	con	redes	sociales.	Anaya	Multimedia.',
    },
    {
      referencia:
        'Macone, C. F. (2017). Programa para el mejoramiento de la calidad de atención al usuario en el Laboratorio de la Clínica DR. A. L. Briceño Rossi. [Trabajo especial de grado, Universidad Católica Andrés Bello]. Repositorio Institucional UCAB. ',
      link:
        'http://biblioteca2.ucab.edu.ve/anexos/biblioteca/marc/texto/AAU7630.pdf',
    },
    {
      referencia:
        'Montoya, C. y Boyero, M. (2013). El CRM como herramienta para el servicio al cliente en la organización. Revista Científica Visión de futuro, 17(1), p. 130-151. ',
      link:
        'https://revistacientifica.fce.unam.edu.ar/index.php?option=com_content&view=article&id=323:el-crm-como-herramienta-para-el-servicio-al-cliente-en-la-organizacion&catid=131:articulos-en-espanol',
    },
    {
      referencia:
        'Mora, C., C. E. (2011). La calidad del servicio y la satisfacción del consumidor. Revista Brasileira de Marketing, 10(2), p. 146-162. ',
    },
    {
      referencia:
        'Pérez, V. (2016). Calidad total en la atención al cliente. Pautas para garantizar la excelencia en el servicio. Editorial Ideas propias. ',
      link:
        'https://www.academia.edu/8910048/CALIDAD_TOTAL_EN_LA_ATENCI%C3%93N_AL_CLIENTE_Pautas_para_Garantizar_la_Excelencia_en_el_Servicio',
    },
    {
      referencia:
        'Pincay, Y., Parra, F., C. (2020). Gestión de la calidad en el servicio al cliente de las PYMES comercializadoras. Una mirada en Ecuador. Revista Científica Dominio de las Ciencias, 6 (3), p. 1118-1142. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7539747',
    },
    {
      referencia: 'Thompson, I. (2009). Definición de cliente. ',
      link: 'https://www.promonegocios.net/clientes/cliente-definicion.html',
    },
    {
      referencia:
        'Vera, J. y Trujillo, A. (2013). Factores relevantes de calidad en el servicio en el sector de concreto en el mercado de clientes pequeños y de hogar. Panorama Socioeconómico, 31(46), p. 14-28. ',
      link: 'https://www.redalyc.org/articulo.oa?id=39929212003',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de satisfacción',
      significado:
        'Medio que permite medir las capacidades de sus colaboradores y el sentido de pertenencia con la organización, para así poder brindar a los clientes lealtad a la marca.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona que adquiere un producto o servicio con la finalidad de suplir una necesidad.',
    },
    {
      termino: 'Competitividad',
      significado:
        'Capacidad de un negocio o empresa para crear estrategias que lo ayuden a adquirir una posición vanguardista en el mercado.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'Conjunto de normas que se tienen en una organización en todas sus áreas, basadas en el respeto, los valores, la ética, la integridad, las actitudes y los hábitos, todo esto genera una persona íntegra y un buen ambiente laboral.',
    },
    {
      termino: 'Corporativo',
      significado: 'Perteneciente o relativo a una corporación.',
    },
    {
      termino: 'Estándares',
      significado:
        'Permiten controlar las operaciones o procesos que se realizan en la organización, teniendo el conocimiento de cada una de las personas que trabajan en ella y de sus actividades.',
    },
    {
      termino: 'Garantía de la calidad',
      significado:
        'Comprende todas aquellas actividades de una empresa u organismo para conseguir y demostrar la calidad de esta.',
    },
    {
      termino: 'Quejas',
      significado:
        'Es la forma que tiene el cliente de mostrar su inconformidad con un servicio o producto que esté adquiriendo.',
    },
  ],
  complementario: [
    {
      texto:
        'Calidad y cultura del servicio - Mora, C., C. E. (2011). La calidad del servicio y la satisfacción del consumidor. Revista Brasileira de Marketing, 10(2), p. 146-162.',
      tipo: 'Artículo',
      link: 'downloads/471747525008.pdf',
    },
    {
      texto:
        'Calidad y cultura del servicio - Pincay, Y., Parra, F., C. (2020). Gestión de la calidad en el servicio al cliente de las PYMES comercializadoras. Una mirada en Ecuador. Revista Científica Dominio de las Ciencias, 6 (3), p. 1118-1142.',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7539747',
    },
    {
      texto:
        'Normativa legal vigente y ética en el manejo de datos (protección de datos) - Superintendencia de Industria y Comercio. (s.f.). Régimen general protección de datos personales.',
      tipo: 'Documento',
      link: 'downloads/Compendio%202%20FINAL%20V%2012%20Dic20.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Camila Álvarez Trujillo',
        cargo: 'Contratista diseño curricular',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Liliana Ceballos',
        cargo: 'Contratista diseño curricular',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortes García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
