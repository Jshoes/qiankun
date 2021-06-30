import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
} from "qiankun";

addGlobalUncaughtErrorHandler((event) => console.log(event));
registerMicroApps([
  {
    name: 'react app', 
    entry: '//localhost:3000',
    container: '#root',
    activeRule: '/react',
  },
  {
    name: 'vue app',
    entry: '//localhost:8080',
    container: '#root',
    activeRule: '/vue',
  },
]);

start();
