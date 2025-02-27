import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import electron from 'vite-plugin-electron/simple';
import electronRender from 'vite-plugin-electron-renderer';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // process.env.VITE_ISENABLE_ELECTRON === 'true' && 
    electron({
      main: {
        entry: 'src/electron/main.js',
      },
      preload: {
        input: 'src/electron/preload.js',
      },
    }),
    electronRender(),
  ],
})
