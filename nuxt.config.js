export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'meat-factory',
        htmlAttrs: {
            lang: 'jp'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', option: 'crossorigin' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap' },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~assets/css/destyle.css", "~assets/css/common.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        'nuxt-lazy-load',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}