// frontend/entrypoints/inertia.js
import { createInertiaApp } from '@inertiajs/react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

document.addEventListener("DOMContentLoaded", () => {

    createInertiaApp({
        resolve: (name) => {
          const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
          return pages[`../pages/${name}.tsx`]
        },
        setup({ el, App, props }) {
          const root = createRoot(el)
          root.render(
            createElement(StrictMode, null,
              createElement(App, props)
            )
          )
        },
      })
      
})