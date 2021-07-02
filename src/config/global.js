export default {
  global: {
    componenteFormativo: 'Interacción con clientes para el proceso de venta',
    descripcionCurso:
      'El entorno digital ha propuesto nuevas maneras de desarrollar los procesos cotidianos y las ventas no son la excepción.  Entender las dinámicas de interacción de los clientes para llevar a cabo el plan de acción más adecuado, desde la redacción de un texto de interés hasta la generación de una base de datos después de un proceso de fidelización, es todo un esquema que debe apreciarse para llevar a cabo una venta.',
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
        titulo: 'Qué es una venta y tipos de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Proceso de venta ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Canales de venta ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Social selling ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Comunicación asertiva con clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Redacción para medios de comunicación digitales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Bases para un plan de medios digitales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Introducción al CRM',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Fidelización y mantenimiento de servicio al cliente en las redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Implementación de bases de datos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Generación de una base de datos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Trazabilidad del servicio',
            hash: 't_4_3',
          },
        ],
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'María Camila Álvarez Trujillo',
        cargo: 'Contratista diseño curricular',
        centro: 'Centro de Formación en Diseño, Confección y Moda',
        regional: 'Regional Antioquia',
      },
      {
        nombre: 'Liliana Ceballos Gutiérrez',
        cargo: 'Contratista diseño curricular',
        centro: 'Centro de Formación en Diseño, Confección y Moda',
        regional: 'Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Centro Agropecuario La granja',
        regional: 'Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Oscar Julián Marquez Sanabria',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Adriana Marcela Suárez Eljure',
          'Ángela María Maldonado Jaime',
          'Carlos Eduardo Garavito Parada',
          'Gilberto Junior Rodríguez Rodríguez',
          'Jessica Moreno Realpe',
          'Lina Marcela Pérez Manchego',
          'María Carolina Tamayo López',
          'Ricardo Vásquez Arroyave',
          'Wilson Andrés Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortes García',
        cargo: 'Desarrollo front-end',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ariño, J. (2018). Ventas para emprendedores: Todo lo que necesitas saber. ECOE.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=7414',
    },
    {
      referencia:
        'Ariza, F. y Ariza, J. (2014). Comunicación empresarial y atención al cliente. McGraw-Hill Interamericana.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5286',
    },
    {
      referencia:
        'Contreras, N. (Marzo 12 de 2019). Social selling: La guía de ventas en redes sociales. Hootsuite.',
      link:
        'https://blog.hootsuite.com/es/social-selling-venta-en-redes-sociales/#:%7E:text=El%20social%20selling%20es%20el,significativas%20con%20los%20clientes%20potenciales',
    },
    {
      referencia:
        'Creatiburón. (Octubre 10 de 2016). Fidelización de clientes: te doy la receta para conseguir clientes leales. Creatiburón: Diseño web. Diseño gráfico. Marketing online.',
      link: 'https://www.creatiburon.com/fidelizacion-de-clientes/ ',
    },
    {
      referencia:
        'García, B. y Gutiérrez, A. (2013). Marketing de fidelización (1st ed.). Ediciones Pirámide.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/114711',
    },
    {
      referencia:
        'Hotmart. (Abril 28 de 2021). Canales de venta: ¿cuáles son los más eficientes hoy en día?',
      link:
        'https://blog.hotmart.com/es/canales-de-venta/#:%7E:text=Los%20canales%20de%20venta%20son,con%20el%20negocio%20que%20ofreces',
    },
    {
      referencia:
        'IMF Business School. (Junio 22 de 2020). Redacción en medios digitales: El reto para los Marketers.',
      link:
        'https://blogs.imf-formacion.com/blog/marketing/redaccion-medios-digitales-marketers/',
    },
    {
      referencia:
        'Leadera Marketing Solutions. (Octubre 19 de 2018). Sistemas para mantener la trazabilidad de leads.',
      link: 'https://www.leaderasolutions.com/blog/trazabilidad-de-leads',
    },
    {
      referencia:
        'Muente, G. (Mayo 22 de 2018). Tipos de ventas: ¿cuáles existen y en qué se distinguen? Rock Content - ES.',
      link: 'https://rockcontent.com/es/blog/tipos-de-ventas/',
    },
    {
      referencia:
        'Pastrana, C. (Febrero 10 de 2014). Cómo escribir en Internet: técnicas de redacción periodística. IEBS.',
      link:
        'https://www.iebschool.com/blog/redaccion-medios-online-comunicacion-digital/',
    },
    {
      referencia:
        'RD Station. (n.d.). Ventas: estrategias, técnicas y todo lo que necesitas saber.',
      link: 'https://www.rdstation.com/mx/ventas/',
    },
    {
      referencia:
        'Soria, M. (2016). Plan de medios de comunicación e Internet (1ª ed.). CEP.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51054?page=43 ',
    },
    {
      referencia:
        'Tenebit. (Enero 7 de 2020). 3 Pilares para implementar un CRM exitoso en tu empresa.',
      link:
        'https://www.tenebit.com.co/conoce-los-3-pilares-fundamentales-al-momento-de-implementar-una-estrategia-crm-exitosa/',
    },
    {
      referencia:
        'Zendesk. (Septiembre 29 de 2020). Conoce las 7 etapas del proceso de ventas.',
      link: 'https://www.zendesk.com.mx/blog/etapas-proceso-ventas/',
    },
  ],
  glosario: [
    {
      termino: 'E-commerce',
      significado:
        'Método de compra y venta de productos a través de entornos digitales.',
    },
    {
      termino: 'Fidelización',
      significado: 'Proceso de generar lealtad y confianza.',
    },
    {
      termino: 'Lead',
      significado: 'Cliente potencial.',
    },
    {
      termino: 'Social selling',
      significado:
        'Uso de las redes sociales para atraer a los prospectos comerciales de una marca, con el fin de generar ventas con públicos objetivos.',
    },
    {
      termino: 'Target',
      significado: 'Público objetivo determinado.',
    },
  ],
  complementario: [
    {
      texto:
        'Polese, L. (Mayo 13 de 2015). 9 estrategias vitales para incrementar las ventas en redes sociales. audiense:recursos.',
      tipo: 'Artículo web',
      link:
        'https://recursos.audiense.com/blog/9-estrategias-vitales-para-incrementar-las-ventas-en-redes-sociales',
    },
    {
      texto:
        'WEBPOSITER. (Agosto 4 de 2017). Redacción SEO 📝10 Técnicas para Optimizar tu COPY 📗 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hki9G7bp1Zk&ab_channel=WEBPOSITER',
    },
    {
      texto:
        'Cyberclick • Marketing Digital. (Agosto 11 de 2020). ¿Qué es un CRM y para qué sirve? Beneficios + Ejemplos [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Ztr24-JBL2s&ab_channel=Cyberclick%E2%80%A2MarketingDigital',
    },
  ],
}
