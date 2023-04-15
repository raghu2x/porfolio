// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/css/app.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
