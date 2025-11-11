# 🚀 Add Vuetify to Your Nuxt 3 Project

Vuetify is a powerful Material Design framework for Vue 3.  
Follow these simple steps to integrate it cleanly into your **Nuxt 3** app.

---

## 🧩 Step 1 — Create the Plugin Configuration

1. Inside your `/app` folder, create a new folder named **`plugins`**
2. Inside that folder, create a file named **`vuetify.ts`**

Then, copy and paste the following code:

```ts
// app/plugins/vuetify.ts
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#E53935',
            secondary: '#FFCDD2',
            success: '#4CAF50',
            info: '#2196F3',
            warning: '#FB8C00',
            error: '#FF5252',
            color1: '#9C27B0',
            color2: '#FFEB3B',
            color3: '#121212',
          },
        },
        dark: {
          colors: {
            primary: '#FFCDD2',
            secondary: '#E53935',
            success: '#81C784',
            info: '#64B5F6',
            warning: '#FFB74D',
            error: '#E57373',
            color1: '#CE93D8',
            color2: '#FFF176',
            color3: '#868686',
            background: '#121212',
            text: '#FFFFFF',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
```

---

## ⚙️ Step 2 — Update `nuxt.config.ts`

Now, open your **`nuxt.config.ts`** file and add Vuetify configuration:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
})
```

---

## 📦 Step 3 — Install Dependencies

Open your terminal and run the following commands:

```bash
# Install Vuetify and the Vite plugin
npm install -D vuetify vite-plugin-vuetify

# Install Material Design Icons
npm install @mdi/font
```

---

## ✅ Step 4 — Restart Your Dev Server

Once everything is installed, **restart your Nuxt dev server** to apply changes:

```bash
npm run dev
```

You can now start using Vuetify components inside your pages and layouts 🎨

---

## 🧠 Quick Test

To verify your installation, create a test page `/app/pages/vuetify.vue` and paste this:

```vue
<template>
  <v-container class="pa-10 text-center">
    <v-btn color="primary">Vuetify is working 🎉</v-btn>
  </v-container>
</template>
```

Then navigate to [http://localhost:3000/vuetify](http://localhost:3000/vuetify)  
You should see a beautiful Vuetify button 😎  
