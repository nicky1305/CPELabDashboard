import { rmSync } from 'node:fs'
import path from 'node:path'
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron/simple'

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import tsconfigPaths from "vite-tsconfig-paths";

import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  rmSync('dist-electron', { recursive: true, force: true })

  const isServe = command === 'serve'
  const isBuild = command === 'build'
  const sourcemap = isServe || !!process.env.VSCODE_DEBUG

  const env = loadEnv(mode, process.cwd(), "");
  const base = process.env.VITE_APP_BASE_PATH || "/";
  const isProduction = mode === "production";

  return {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      },
    },
    plugins: [
      react(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      electron({
        main: {
          // Shortcut of `build.lib.entry`
          entry: 'electron/main/index.ts',
          onstart(args) {
            if (process.env.VSCODE_DEBUG) {
              console.log(/* For `.vscode/.debug.script.mjs` */'[startup] Electron App')
            } else {
              args.startup()
            }
          },
          vite: {
            build: {
              sourcemap,
              minify: isBuild,
              outDir: 'dist-electron/main',
              rollupOptions: {
                external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              },
            },
          },
        },
        preload: {
          // Shortcut of `build.rollupOptions.input`.
          // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
          input: 'electron/preload/index.ts',
          vite: {
            build: {
              sourcemap: sourcemap ? 'inline' : undefined, // #332
              minify: isBuild,
              outDir: 'dist-electron/preload',
              rollupOptions: {
                external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              },
            },
          },
        },
        // Ployfill the Electron and Node.js API for Renderer process.
        // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
        // See 👉 https://github.com/12343954/vite-plugin-electron-renderer
        renderer: {},
      }),
    ],
    // server: process.env.VSCODE_DEBUG && (() => {
    //   const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL)
    //   console.log('host= ', url.hostname, ' port=', url.port);
    //   return {
    //     open: true,
    //     // host: url.hostname,
    //     // port: +url.port,
    //     host: true,
    //     port: 3001,
    //     proxy: {
    //       "/api": {
    //         // target: "http://localhost:3000",
    //         target: "http://localhost:5173",
    //         changeOrigin: true,
    //         // rewrite: (path) => path.replace(/^\/api/, ""),
    //       },
    //     },
    //   }
    // })(),
    clearScreen: false,
  }
})
