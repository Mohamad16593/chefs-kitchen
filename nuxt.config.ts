import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  //app transitions
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
      title: "Kitchen",
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "fav-icon.svg",
        },
      ],
    },
  },
  //main css file
  css: ["~/assets/css/main.css"],
  //Vuetify
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //Google fonts
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: [300, 400, 700],
          "Open+Sans": true,
          Lato: [100, 300],
        },
      },
    ],
    //pinia
    "@pinia/nuxt",
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
