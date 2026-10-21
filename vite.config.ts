import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Recharts représente l’essentiel du bundle ; acceptable pour un prototype de démonstration.
    chunkSizeWarningLimit: 800,
  },
});
