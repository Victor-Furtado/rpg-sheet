import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    css: ["@/assets/styles/styles.css"],
    build: {
      postcss: {
        postcssOptions: require("./postcss.config.js"),
      },
    },
  });
  
