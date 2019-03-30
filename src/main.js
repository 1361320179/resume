// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import intro from './components/intro/intro';
import info from './components/info/info';
import skill from './components/skill/skill';
import experience from './components/experience/experience';
import works from './components/works/works';
import contact from './components/contact/contact';

import './common/stylus/index.styl';
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {path: '/intro', component: intro},
  {path: '/info', component: info},
  {path: '/skill', component: skill},
  {path: '/experience', component: experience},
  {path: '/works', component: works},
  {path: '/contact', component: contact}
];
const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes
});
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
Vue.use({
  vm
});
