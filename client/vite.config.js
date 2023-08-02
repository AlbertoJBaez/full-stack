import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://ytpa6cbcqt.eu-west-1.awsapprunner.com/",
      "/auth": "https://ytpa6cbcqt.eu-west-1.awsapprunner.com/"
      }
    }
  }
)
