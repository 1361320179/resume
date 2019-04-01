import axios from 'axios';

const state = {
  works: {}
};
const mutations = {
  updateWorks(state, data) {
    state.works = data;
  }
};
const actions = {
  saveWorks(context) {
    axios({
      methods: 'get',
      url: '/api/works'
    })
      .then(function (res) {
        if (res.data.errno === 0) {
          context.commit('updateWorks', res.data.data);
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
