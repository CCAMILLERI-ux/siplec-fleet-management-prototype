import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  // Le build est publié sur GitHub Pages, sous le chemin du dépôt.
  base: command === 'build' || isPreview ? '/siplec-fleet-management-prototype/' : '/',
  build: {
    // Recharts représente l’essentiel du bundle ; acceptable pour un prototype de démonstration.
    chunkSizeWarningLimit: 800,
  },
}));
