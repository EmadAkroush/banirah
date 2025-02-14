// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";


export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
   
  ],
  runtimeConfig: {
    public: {
        apiBase: 'http://85.198.21.72:81/api/1.0'
    }
    
},


  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
      ripple: true,
    },
    autoImport: true, // Auto-import PrimeVue components (if needed)
  },
});
