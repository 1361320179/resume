import Vue from 'vue';
import Vuex from 'vuex';

import intro from './modules/intro';
import info from './modules/info';
import skill from './modules/skill';
import exp from './modules/experience';
import works from './modules/works';
import contact from './modules/contact';
import footer from './modules/footer';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  modules: {
    intro,
    info,
    skill,
    exp,
    works,
    contact,
    footer
  },
  strict: debug
});
