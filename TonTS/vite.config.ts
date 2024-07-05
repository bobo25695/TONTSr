import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TONTSr/', // 设置基础路径为存储库名称
  plugins: [react(), nodePolyfills()],
});
