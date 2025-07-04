import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: { mdi },
    },
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#df6853",
            secondary: "#fbe9e5",
            accent: "#7f7f7f",
            background: "#fff",
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: "#90CAF9",
            secondary: "#424242",
            accent: "#FF4081",
            background: "#000",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
