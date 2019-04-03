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
import store from './store/index';

import './common/stylus/index.styl';

import { Carousel, CarouselItem, Timeline, TimelineItem, Card } from 'element-ui';

Vue.use(VueRouter);

Vue.prototype.$ELEMENT = {size: 'small'};
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Card);

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
  store,
  render: h => h(App)
});
Vue.use({
  vm
});
