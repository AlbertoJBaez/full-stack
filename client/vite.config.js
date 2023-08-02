import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ytpa6cbcqt.eu-west-1.awsapprunner.com',
        changeOrigin: true, // Cambia el origen de la solicitud al objetivo del proxy
      },
      '/auth': {
        target: 'https://ytpa6cbcqt.eu-west-1.awsapprunner.com',
        changeOrigin: true, 
      },
    },
    },
  });
