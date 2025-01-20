import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ตรวจสอบโหมดที่กำลังรัน
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    base: isProduction ? '/production-base/' : '/',
    server: {
      port: 3000,
    },
    build: {
      outDir: isProduction ? 'dist/prod' : 'dist/dev',
    },
  };
});
