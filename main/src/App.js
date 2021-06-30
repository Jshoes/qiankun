import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react app', 
    entry: '//localhost:3000',
    container: '#root',
    activeRule: '/',
  },
  {
    name: 'vue app',
    entry: '//localhost:8080',
    container: '#root',
    activeRule: '/',
  },
]);

start();