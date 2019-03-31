import axios from 'axios';

const state = {
  exp: {}
};
const mutations = {
  updateExp(state, data) {
    state.exp = data;
  }
};
const actions = {
  saveExp(context) {
    axios({
      methods: 'get',
      url: '/api/experience'
    })
      .then(function (res) {
        if (res.data.errno === 0) {
          context.commit('updateExp', res.data);
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
