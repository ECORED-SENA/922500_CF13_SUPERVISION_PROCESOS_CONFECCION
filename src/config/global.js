export default {
  global: {
    componenteFormativo: 'Distribución de planta',
    descripcionCurso:
      'Es necesario identificar las actividades que se van a realizar en el espacio de trabajo, los recursos que de los que se debe disponer, los puestos de trabajo necesarios y las demás áreas que se deben tener en las instalaciones. En este componente se encontrarán las maneras y metodologías para diseñar la distribución de planta, o para rediseñar la existente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Distribución de planta',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Distribución de planta de acuerdo con el sistema de producción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Distribución de planta según necesidades del área',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Puestos de trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ergonomía y puestos de trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Descripción y análisis de puestos de trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Puestos de trabajo y factores ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Normativa',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: 'Distribución de planta',
      referencia:
        'Distribución de planta 	Líder del emprendimiento (s.f.) <i>¿Qué es la distribución de planta?</i> [Video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/9Yw8t3hsr5M',
    },
    {
      tema: 'Distribución de planta',
      referencia:
        'Pantoja, C., Pablo Orejuela, J., y Bravo, J. J. (2017). <i>Metodología de distribución de plantas en ambientes de agrupación celular</i>. Estudios Gerenciales.',
      tipo: 'Artículo',
      link:
        'https://link.gale.com/apps/doc/A503761466/IFME?u=sena&sid=bookmark-IFME&xid=337ffdb3',
    },
    {
      tema: 'Tipos de distribución de planta',
      referencia:
        'Campos J. (2016). <i>Distribución de planta</i>. [Video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=vyqLP_nJxuE',
    },
    {
      tema: '<i>Softwares</i> para distribuciones de planta',
      referencia:
        'Profa Lucydul (2022). <i>Tutorial Visio: diseño de layout o distribución de planta |Fábrica</i>. [Video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/SCQ907uU8KY',
    },
    {
      tema: '<i>Softwares</i> para distribuciones de planta',
      referencia:
        'Ortega, K. (2020). <i>Distribución de planta bloques de Autocad</i>. [Video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/E9_m4SW1boY',
    },
    {
      tema: '<i>Softwares</i> para distribuciones de planta',
      referencia:
        'Raven Tv11. (2016) <i>¿Qué es un layout?</i> [Video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=CnuGywCmCTM',
    },
    {
      tema: '<i>Softwares</i> para distribuciones de planta',
      referencia:
        'JACB ARQ. (2020). <i>Cómo hacer planos en Excel fácil y rápido</i>. [Video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/g1Ckxiad4Ms',
    },
    {
      tema: 'Ergonomía Puestos de trabajo',
      referencia:
        'Asensio, C., S., Bastante, C., M., y Diego, M., J. (2012). <i>Evaluación ergonómica de puestos de trabajo</i>. Ediciones Paraninfo.',
      tipo: 'Libro',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=https://go.gale.com%2f',
    },
    {
      tema: 'Proceso de diseño y análisis puestos de trabajo',
      referencia:
        'Palomo, V., M. (2009). <i>Planificación y descripción de puestos de trabajo</i>. ESIC Editorial.',
      tipo: 'Libro',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=https://go.gale.com%2f',
    },
    {
      tema: 'Distribución de plantas',
      referencia:
        'Pantoja, C., Orejuela, J. P., y Bravo, J. J. (2017). Metodología de distribución de plantas en ambientes de agrupación celular. <i>Estudios Gerenciales</i>, 33(143), 132-140.',
      tipo: 'Articulo Libro',
      link:
        'https://go-gale-com.bdigital.sena.edu.co/ps/i.do?p=IFME&u=sena&id=GALE|A503761466&v=2.1&it=r',
    },
    {
      tema: 'Normativa',
      referencia: 'SURA (2023). Normatividad SST.',
      tipo: 'Página web',
      link:
        'https://www.arlsura.com/index.php/decretos-leyes-resoluciones-circulares-y-jurisprudencia',
    },
  ],
  glosario: [
    {
      termino: 'Actividad económica',
      significado:
        'para satisfacer necesidades y expectativas, se requiere hacer ciertos procedimientos que permiten la producción y el intercambio de bienes y servicios, a esa misión, se le denomina actividad económica.',
    },
    {
      termino: 'Área de trabajo',
      significado:
        'espacio o sitio destinado para que se realicen funciones de transformación de materiales en productos o para prestar un servicio.',
    },
    {
      termino: 'Inherentes',
      significado:
        'que hacen parte de algo común, que sus características y naturaleza los agrupan.',
    },
    {
      termino: 'Relevante',
      significado: 'que es importante, sobresaliente, fundamental.',
    },
    {
      termino: 'Talento Humano',
      significado:
        'personas que participan en la ejecución y coordinación de las actividades empresariales en una organización.',
    },
    {
      termino: 'Vestier',
      significado:
        'área destinada en las empresas u organizaciones para que el personal adecue su vestimenta de acuerdo con la función a desempeñar.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asensio, C., S., Bastante, C., M., y Diego, M., J. (2012). <i>Evaluación ergonómica de puestos de trabajo</i>. Ediciones Paraninfo.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000071157',
    },
    {
      referencia:
        'Castelló, P., García, C., Piedrabuena, A., Ferreras, A., Monytero, J., Chirivella, C., Vera, P., y Prat, J. (2004). <i>Estudio de las condiciones ergonómicas del trabajo en el sector textil</i>. Instituto de Biomecánica de Valencia.',
      link:
        'https://gestion.ibv.org/gestoribv/index.php/productos/descargables/106-estudio-de-las-condiciones-ergonomicas-del-trabajo-en-el-sector-textil/file',
    },
    {
      referencia:
        'Escuela Colombiana de Ingeniería Julio Garavito. (2019) <i>Diseño antropométrico de puestos de trabajo - Protocolo curso de ergonomía. Laboratorio de condiciones de trabajo</i>.',
      link:
        'https://docplayer.es/33656830-Diseno-antropometrico-de-puestos-de-trabajo-protocolo-curso-de-ergonomia.html',
    },
    {
      referencia:
        'Gómez, L. (2017). <i>Condiciones de trabajo, riesgo y salud ambiental</i>. Fundación Universitaria del Área Andina.',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1246/Condiciones%20de%20Trabajo%2C%20Riesgo%20y%20Salud%20Ambiental.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'ICASEL Canarias (s.f.). <i>Estudio ergonómico en el sector del calzado: tareas de aparado – INSST</i>.',
      link:
        'https://issuu.com/icaselcanarias/docs/estudio_ergonomico_sector_calzado_aparado/1',
    },
    {
      referencia:
        'Instituto Regional de Seguridad y Salud en el Trabajo de Madrid. (s.f.). <i>Diseño del puesto de trabajo en oficinas y despachos en las administraciones públicas</i>. Instituto Regional de Seguridad y Salud en el Trabajo de Madrid.',
      link:
        'https://sistemamid.com/panel/uploads/biblioteca/2015-07-09_10-48-08126551.pdf',
    },
    {
      referencia:
        'OIT. (s. f.). <i>Resolución sobre las estadísticas del trabajo, la ocupación y la subutilización de la fuerza de trabajo</i>.',
      link:
        'https://www.ilo.org/wcmsp5/groups/public/---dgreports/---stat/documents/normativeinstrument/wcms_234036.pdf',
    },
    {
      referencia:
        'Ofiprix (2017). <i>La mejor ergonomía en el puesto de trabajo de pie</i>. Ofiprix.',
      link:
        'https://www.ofiprix.com/blog/ergonomia-en-el-puesto-de-trabajo-de-pie/',
    },
    {
      referencia:
        'Palomo, V., M. (2009). <i>Planificación y descripción de puestos de trabajo (cuadernos de documentación)</i>. ESIC Editorial. Libro Biblioteca SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000065030',
    },
    {
      referencia: 'SURA ARL. (2023). <i>Centro de documentación</i>.',
      link:
        'https://www.arlsura.com/index.php/decretos-leyes-resoluciones-circulares-y-jurisprudencia',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'John Jairo Pérez Chaverra',
          cargo: 'Experto temático',
          centro: 'SENA',
        },
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo: 'Asesora Metodológica diseño y desarrollo curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda Complejo Sur Itagüí Regional Antioquia',
        },
        {
          nombre: 'Pedro Luis Sossa',
          cargo: 'Asesora Metodológica diseño y desarrollo curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda Complejo Sur Itagüí Regional Antioquia',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial. Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
