import path from 'path';
import { defineConfig } from 'umi';
export default defineConfig({
  routes: [
    { path: '/', component: 'Home' },
    { path: '/docs', component: 'docs' },
    { path: '/login', component: 'Login', layout: false },
    { path: '/analyze', component: 'Analyze' },
    { path: '/mychart', component: 'MyChart' },
  ],

  npmClient: 'pnpm',
  alias: {
    '@/': path.resolve(__dirname, 'src/'),
  },
  dva: {},
  plugins: ['@umijs/plugins/dist/dva'],
});
