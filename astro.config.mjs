// @ts-check
import { defineConfig } from 'astro/config';
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    // site: 'https://thermo.kiapmd.dev',

    site: import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321',
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": path.resolve("./src"),
            },
        },
    },
});
