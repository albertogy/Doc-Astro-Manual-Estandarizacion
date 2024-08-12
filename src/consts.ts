// Coloca cualquier dato global en este archivo.
// Puedes importar estos datos desde cualquier parte de tu sitio utilizando la palabra clave `import`.

/**
 * title {string} título del sitio web
 * favicon {string} URL del favicon del sitio web
 * description {string} descripción del sitio web
 * author {string} autor
 * avatar {string} Avatar utilizado en el perfil
 * motto {string} lema utilizado en el perfil
 * url {string} Enlace del sitio web
 * recentBlogSize {number} Número de artículos recientes mostrados en la barra lateral
 * archivePageSize {number} Número de artículos en las páginas de archivo
 * postPageSize {number} Número de artículos en las páginas de blog
 * feedPageSize {number} Número de artículos en las páginas de feed
 * beian {string} Política china
 */
export const site = {
  title: 'Manual de Estandarización Plan Director', // requerido
  versiones: [{ version: '1.0', fecha: '17-02-2022' }],
  favicon: '/favicon.png', // requerido
  description: '¡Bienvenido al sitio de documentacion de Plandir Web.!',
  author: "aogayar@dipujaen.es", // requerido
  avatar: '/avatar-dip.png', // requerido
  motto: 'Manual de Estandarización Plan Director.',
  url: 'https://wiki.dipujaen.es',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
}

/**
 * busuanzi {boolean} enlace: https://busuanzi.ibruce.info/
 * lang {string} Idioma predeterminado del sitio web
 * codeFoldingStartLines {number} Número de líneas desde donde comienza el plegado de código
 */
export const config = {
  busuanzi: false,
  lang: 'es', // en | zh-cn
  codeFoldingStartLines: 16, // Necesita reiniciar el proyecto para que surta efecto
}

/**
 * Navegador
 * name {string} nombre
 * iconClass {string} estilo del icono
 * href {string} URL del enlace
 * target {string} opcional "_self|_blank" abrir en la ventana actual / abrir en una nueva ventana
 */
export const categories = [
  {
    name: "Blog",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  {
    name: "Feed",
    iconClass: "ri-lightbulb-flash-line",
    href: "/feed/1",
  },
  {
    name: "Archive",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },
  {
    name: "Message",
    iconClass: "ri-chat-1-line",
    href: "/message",
  },
  {
    name: "Componentes",
    iconClass: "ri-more-fill",
    href: "javascript:void(0);",
    children: [
      {
        name: 'Empleados',
        iconClass: 'ri-information-line',
        href: '/about',
      },
      {
        name: 'Terceros/Acreedores',
        iconClass: 'ri-user-5-line',
        href: '/friends',
        target: '_self',
      },
      {
        name: 'Acreedores',
        iconClass: 'ri-user-5-line',
        href: '/friends',
        target: '_self',
      },
    ]
  },
  {
    name: "Buscar",
    iconClass: "ri-search-line",
    href: "/search",
  },
]

/**
 * Dirección de enlaces personales
 */
export const infoLinks = [
  {
    icon: 'ri-telegram-fill',
    name: 'telegram',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-twitter-fill',
    name: 'twitter',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-instagram-fill',
    name: 'instagram',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'https://github.com/cirry',
  },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: 'https://astro-yi-nu.vercel.app/rss.xml',
  }
]

/**
 * Donar
 * enable {boolean} habilitar
 * tip {string} consejo
 * wechatQRCode: Las direcciones de las imágenes deben colocarse en el directorio público.
 * alipayQRCode: Las direcciones de las imágenes deben colocarse en el directorio público.
 * paypalUrl {string} URL de PayPal
 */
export const donate = {
  enable: false,
  tip: "¡Gracias por el café! ☕",
  wechatQRCode: "/WeChatQR.png",
  alipayQRCode: "/AliPayQR.png",
  paypalUrl: "https://paypal.me/xxxxxxxxxx",
}

/**
 * Página de Enlaces de Amistad
 * name {string} nombre
 * url {string} URL
 * avatar {string} avatar
 * description {string} descripción
 */
export const friendshipLinks =
  [
    // {
    //   name: "Blog de Cirry",
    //   url: 'https://cirry.cn',
    //   avatar: "https://cirry.cn/avatar.png",
    //   description: 'El día a día de un desarrollador frontend'
    // },
  ]

/**
 * Función de comentarios
 * enable {boolean} habilitar
 * serverUrl {string} URL del servidor
 * lang {string} enlace: https://waline.js.org/guide/features/i18n.html
 * pageSize {number} número de comentarios por página, por defecto 10
 * wordLimit {number} límite de palabras en los comentarios. Cuando se llena un solo número, es el número máximo de palabras del comentario. Sin límite cuando se establece en 0
 * count {number} número de comentarios recientes
 * pageview {boolean} mostrar el número de vistas de la página y comentarios del artículo
 * reaction {string | string[]} Añadir función de interacción con emojis al artículo
 * requiredMeta {string[]} Establecer campos obligatorios, por defecto anónimo
 */
export const comment = {
  enable: false,
  serverUrl: "https://xxxxx.xxxxx.app",
  lang: 'en',
  pageSize: 20,
  wordLimit: '',
  count: 5,
  pageview: true,
  reaction: true,
  requiredMeta: ["nick", "mail"],
  whiteList: ['/message/', '/friends/'], // Abrir la página de comentarios sin mostrar la reacción
}
