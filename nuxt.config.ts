import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@vesp/nuxt-fontawesome', '@nuxt/eslint'],
  fontawesome: {
    icons: {
      solid: ['envelope', 'up-long'],
      brands: ['mastodon','instagram', 'bluesky']
    }
  }
})
