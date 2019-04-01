import axios from 'axios';

const state = {
  info: {}
};
const mutations = {
  updateInfo(state, data) {
    state.info = data;
  }
};
const actions = {
  saveInfo(context) {
    axios({
      methods: 'get',
      url: '/api/info'
    })
      .then(function (res) {
        if (res.data.errno === 0) {
          context.commit('updateInfo', res.data.data);
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
