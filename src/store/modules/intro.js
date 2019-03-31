import axios from 'axios';

const state = {
  intro: {}
};
const mutations = {
  updateIntro(state, data) {
    state.intro = data;
  }
};
const actions = {
  saveIntro(context) {
    axios({
      methods: 'get',
      url: '/api/intro'
    })
      .then(function (res) {
        if (res.data.errno === 0) {
          context.commit('updateIntro', res.data);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
};
export default {
  state,
  mutations,
  actions
};
