export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "あんず お肉の工場直売所 つくば店",
        htmlAttrs: {
            lang: "jp",
            prefix: "og: http://ogp.me/ns#",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "FC店としてとんＱが運営する食肉を専門に扱う『あんず お肉の工場直売所 つくば店』。工場にて加工されたお肉を直接納品し、店舗で切り分け販売することで,A５ランクの宮崎牛や国産ブランドの豚肉・鶏肉などワンランク上のお肉を特別価格でご提供しております。 また、ほかではあまり見ない希少部位やホルモン、店内で調理したお肉を使ったお惣菜など満足できる商品をご用意しております。",
            },
            { name: "format-detection", content: "telephone=0298933860" },
            {
                hid: "og:site_name",
                property: "og:site_name",
                content: "あんず お肉の工場直売所 つくば店",
            },
            { hid: "og:type", property: "og:type", content: "website" },
            {
                hid: "og:url",
                property: "og:url",
                content: "https://meatfactory-tsukuba.com",
            },
            {
                hid: "og:title",
                property: "og:title",
                content: "あんず お肉の工場直売所 つくば店",
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "FCとしてとんＱが運営する食肉専門店『あんず お肉の工場直売所 つくば店』。A５ランクの宮崎牛や国産ブランドの豚肉・鶏肉などワンランク上のお肉を特別価格でご提供しております。",
            },
            {
                hid: "og:image",
                property: "og:image",
                content: "https://meatfactory-tsukuba.com/ogp-image.jpg",
            },
            { name: "twitter:card", content: "summary" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "apple-touch-icon-precomposed", href: "/icon.png" },
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                option: "crossorigin",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&display=swap",
            },
        ],
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
    modules: ["nuxt-lazy-load", "@nuxtjs/gtm"],
    gtm: {
        id: 'GTM-KGM2GLC'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    render: {
        static: { maxAge: '1y' }
    },

};
