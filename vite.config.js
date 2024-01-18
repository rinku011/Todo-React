import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import jsCookie from 'js-cookie';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'js-cookie': jsCookie,
    },
  },
});

