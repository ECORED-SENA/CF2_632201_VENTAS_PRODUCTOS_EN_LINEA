export default {
  global: {
    componenteFormativo: 'Gestión de datos e información de los clientes',
    descripcionCurso:
      'El componente formativo está centrado en el cliente, como entidad principal del negocio en varias dimensiones, tales como llegar al cliente, su atención y mejorar las estrategias del negocio para aumentar posibilidades de éxito, está complementado con videos explicativos y textos para mejorar la experiencia del aprendizaje.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
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
        titulo: 'Canales digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Herramientas y utilidades',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Gestión de registros y almacenamiento de información en canales digitales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Habeas data y normatividad vigente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Manejo de la información personal - Habeas data',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Requerimientos del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Propuestas de valor y factores clave',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Algunos requisitos para mejorar experiencias de los clientes',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Comunicación comercial en medios digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'La comunicación comercial online',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Elementos generales de la comunicación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Niveles de comunicación comercial',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Técnicas y habilidades en la comunicación comercial',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Sistemas para el registro e historial de clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Sistemas de ventas de la empresa y CRM',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo:
              'Trazabilidad y valor de los registros - CRM (Customer Relationship Management)',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo:
              'Mejorar atención al cliente a partir de sus necesidades y servicios registrados',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
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
  complementario: [
    {
      tema: 'Requerimiento de cliente.',
      referencia: 'Academia play. (2016). El cerebro triuno.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ih9_X45C6CQ',
    },
  ],
  glosario: [
    {
      termino: '<em>Chatbots</em>',
      significado:
        'aplicaciones informáticas basadas en la inteligencia artificial que permiten simular la conversación con una persona, dándole respuestas automatizadas a sus dudas o preguntas más comunes.',
    },
    {
      termino: '<em>Dashoboard</em>',
      significado:
        'tablero o cuadro de mandos, en el que se reflejan, mediante una representación gráfica, las principales métricas o KPI que intervienen en la consecución de los objetivos de una estrategia o empresa',
    },
    {
      termino: 'Google Ads',
      significado:
        'programa de publicidad en línea de Google. A través de Google Ads, se pueden crear anuncios en línea para llegar a las personas en el momento exacto en que se interesan por los productos y servicios que ofrece.',
    },
    {
      termino: 'Herramientas de consumo de datos',
      significado:
        'desde el contexto de analítica e inteligencia de negocios, se refiere a la visualización e interpretación de los datos.',
    },
    {
      termino: 'Hiperconectados',
      significado:
        'término que se utiliza para designar los distintos medios de comunicación con los que contamos actualmente como el correo electrónico, las redes sociales, la mensajería instantánea, el teléfono y el internet.',
    },
    {
      termino: 'Inteligencia de negocio',
      significado:
        'la inteligencia de negocios (BI) combina análisis de negocios, minería de datos, visualización de datos, herramientas e infraestructura de datos, y las prácticas recomendadas para ayudar a las organizaciones a tomar decisiones más basadas en los datos.',
    },
    {
      termino: '<em>Machine learning</em>',
      significado:
        'disciplina del campo de la inteligencia artificial que, a través de algoritmos, dota a los ordenadores de la capacidad de identificar patrones en datos masivos y elaborar predicciones (análisis predictivo).',
    },
    {
      termino: 'Medios asincrónicos',
      significado:
        'cualquier comunicación que no se desarrolle en tiempo real. Por ejemplo, enviar correo al cliente en lugar de hacer una llamada.',
    },
    {
      termino: 'Medios sincrónicos',
      significado:
        'momentos en los que se lleva a cabo un diálogo o conversación entre dos o más personas a tiempo real.',
    },
    {
      termino: 'Neurociencia',
      significado:
        'se centra en el estudio del sistema nervioso, de su estructura y del cerebro y el impacto de este en las funciones cognitivas y el comportamiento humano.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arboleda, J. D. (2018). Discusión sobre la Teoría de los 3 cerebros - Paul MacLean.',
      link:
        'https://www.linkedin.com/pulse/discusi%C3%B3n-sobre-la-teor%C3%ADa-de-los-3-cerebros-paul-arboleda-g%C3%B3mez/?originalSubdomain=es',
    },
    {
      referencia: 'Asprilla, M. (2019). 3 requerimientos de todo cliente.',
      link: 'https://ventasymercadeo.co/3-requerimientos-de-todo-cliente/',
    },
    {
      referencia:
        'Canales, R., P (2013). Neuromarketing, ¿el futuro ya está aquí? 3C Empresa, 16.',
      link:
        'https://www.3ciencias.com/articulos/articulo/neuromarketing-el-futuro-ya-esta-aqui-2/',
    },
    {
      referencia:
        'Lean, P. D. (1978). A mind of three minds Evolution of the Human Brain. Science Teacher, 45(4), 31-39.MarketerosLATAM. (2021). Ciclo de Deming, etapas e importancia.',
      link:
        'https://www.marketeroslatam.com/ciclo-de-deming-etapas-e-importancia/',
    },
    {
      referencia: 'Martínez, C. (2017). Qué es comunicación comercial.',
      link:
        'https://www.telcel.com/empresas/tendencias/notas/que-es-comunicacion-comercial',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2021). Manejo de información personal.',
      link: 'https://www.sic.gov.co/manejo-de-informacion-personal',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
