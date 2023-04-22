import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
            buildDirectory: "../public_html",
            publicDirectory: "../public_html",
            hotFile: "../public_html/hot",
        }),
        react({}),
    ],
});
