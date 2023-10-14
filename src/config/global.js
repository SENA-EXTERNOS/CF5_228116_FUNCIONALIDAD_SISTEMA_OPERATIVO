export default {
  global: {
    componenteFormativo: 'Funcionalidad del sistema operativo',
    descripcionCurso:
      'Los sistemas operativos permiten gestionar los recursos <i>hardware</i> y proveer de servicios al resto de programas que se ejecuten sobre él, siendo el sistema quien se ejecuta siempre en modo privilegiado con respecto al resto. Por esta razón es importante verificar la funcionalidad según el <i>hardware</i> para el cual será utilizado.',
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
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
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
        titulo: 'Dispositivos y compatibilidad con el <i>software</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Seguridad de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión de la información',
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
      tema: 'Seguridad de la información.',
      referencia:
        'Vega, E. (2021). Seguridad de la información. Área de innovación y desarrollo, SL. Recuperado de:',
      tipo: 'Libro',
      link:
        'https://www.3ciencias.com/wp-content/uploads/2021/03/LIBRO-SEGURIDAD-INFORMACIO%CC%81N.pdf',
    },
    {
      tema: 'Gestión de la seguridad de la información.',
      referencia:
        'Silva, F. Segadas, G. & Bezerra, K. (s/a). Gestión de la seguridad de la información. Red Cedia. Recuperado de:',
      tipo: 'Libro',
      link:
        'https://desarrolloeconomico.gov.co/wp-content/uploads/2022/12/manual_del_sistema_de_gestion_de_seguridad_de_la_informacion_v3.0_1.pdf',
    },
    {
      tema: 'Fundamentos de seguridad informática.',
      referencia:
        'Arango Gomez, O. D. (2023). El ABC de la seguridad informática: guía práctica para entender la seguridad digital.',
      tipo: 'Libro',
      link:
        'http://repositorio.itm.edu.co/bitstream/handle/20.500.12622/5901/El%20ABC%20de%20la%20seguridad%20inform%c3%a1tica%20gu%c3%ada%20pr%c3%a1ctica%20para%20entender%20la%20seguridad%20digital.pdf?sequence=4&isAllowed=y',
    },
  ],
  glosario: [
    {
      termino: 'Compatibilidad',
      significado:
        'es la forma que hace que un sistema, un programa o aplicación, logren entenderse correctamente, tanto directamente o indirectamente.',
    },
    {
      termino: 'El control de acceso basado en roles (RBAC)',
      significado:
        'es un mecanismo de control de acceso que define los roles y los privilegios para determinar si a un usuario se le debe dar acceso a un recurso.',
    },
    {
      termino: 'Entrada',
      significado:
        'dentro de la definición de sistemas, se asocia a la señal que ingresa al sistema y en su mayoría se relacionan en estados.',
    },
    {
      termino: '<i>Firewall</i>',
      significado:
        'es un cortafuegos y su principal función es bloquear el acceso no autorizado.',
    },
    {
      termino: 'Información',
      significado:
        'es un conjunto de elementos que interactúan entre sí con un fin común; que permite que la información esté disponible para satisfacer las necesidades en una organización.',
    },
    {
      termino: 'Lista de control de acceso <i>(ACL)</i>',
      significado:
        'es una serie de comandos del <i>IOS</i> que controlan, si un <i>router</i> reenvía o descarta paquetes, según la información que se encuentra en el encabezado de este.',
    },
    {
      termino: 'Paquete',
      significado:
        'definición asociada a la red de datos, que son bloques y divide la información que el usuario quiere enviar.',
    },
    {
      termino: 'Salida',
      significado:
        'se asocia a la señal que sale de cualquier sistema y en su mayoría se relacionan en estados ya sean cero (0) o uno (1)',
    },
    {
      termino: 'Sistema',
      significado:
        'está conformado por mecanismos o pautas que complementan, ya sea una idea material o conceptual.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'logicial o soporte lógico al sistema formal de un sistema informático, que comprende el conjunto de los componentes lógicos necesarios que hace posible la realización de tareas específicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'CCNA desde cero (6 de diciembre de 2022). Listas de Control de Acceso (ACL): Funcionamiento y Creación.',
      link: 'https://ccnadesdecero.es/listas-control-acceso-acl-router-cisco/',
    },
    {
      referencia:
        'Desarrollo económico (s.f.).<i> Manual del sistema de gestión de seguridad de la información.</i> [Documento web]',
      link: '',
    },
    {
      referencia:
        'Educatica (30 de agosto de 2022). Introducción a los sistemas operativos en red.',
      link:
        'https://www.educatica.es/sistemas-operativos/sistemas-operativos-en-red/introduccion-a-los-sistemas-operativos-en-red/',
    },
    {
      referencia:
        'Ejemplos (5 de noviembre de 2022). 15 ejemplos de normas técnicas.',
      link: 'https://www.ejemplos.co/15-ejemplos-de-normas-tecnicas/',
    },
    {
      referencia:
        'Entrust (4 de noviembre de 2022). ¿Qué es el control de acceso basado en roles (RBAC)?',
      link:
        'https://www.entrust.com/es/resources/faq/what-is-role-based-access-control',
    },
    {
      referencia: 'JVS Informática (6 de diciembre de 2022). Compatibilidad.',
      link: 'https://www.jvs-informatica.com/blog/glosario/compatibilidad/',
    },
    {
      referencia:
        'Ley 1341 de 2009. Diario oficial República de Colombia. Julio 9 de 2009. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36913',
    },
    {
      referencia:
        'Microsoft (2022). Página web corporativa. Cómo probar la compatibilidad de los programas con Windows. Consultado el 6 de noviembre de 2022. Recuperado de:',
      link:
        'https://support.microsoft.com/es-es/topic/c%C3%B3mo-probar-la-compatibilidad-de-los-programas-con-windows-ccd2aab1-6f37-3162-3ec7-38ff722a730a',
    },
    {
      referencia:
        'Ministerio de tecnologías de información y comunicaciones, Colombia. (2022). Página web institucional. Estándares y Tecnologías. Consultado el 6 de diciembre de 2022. Recuperado de:',
      link:
        'https://mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Preguntas-frecuentes/5236:Estandares-y-Tecnologias',
    },
    {
      referencia:
        'Tecnologías información (4 de noviembre de 2022). Seguridad en sistemas de información.',
      link: 'https://www.tecnologias-informacion.com/seguridad.html',
    },
    {
      referencia:
        'Urbina, G. B. (2017). <em>Introducción a la seguridad informática. </em>Grupo editorial PATRIA.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=IhUhDgAAQBAJ&oi=fnd&pg=PP1&dq=%C2%BFQu%C3%A9+es+Seguridad+Inform%C3%A1tica%3F&ots=0XTz8AwhEp&sig=uJlaAWg2TEpS5bpHIcpyrGsmm6Y',
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
