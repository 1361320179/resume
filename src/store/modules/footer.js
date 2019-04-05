import axios from 'axios';

const state = {
  footer: {}
};
const mutations = {
  updateFooter(state, data) {
    state.footer = data;
  }
};
const actions = {
  saveFooter(context) {
    axios({
      methods: 'get',
      url: '/api'
    })
      .then(function (res) {
        if (res.data.errno === 0) {
          context.commit('updateFooter', res.data.data);
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
