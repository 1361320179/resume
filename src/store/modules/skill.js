import axios from 'axios';

const state = {
  skill: {}
};
const mutations = {
  updateSkill(state, data) {
    state.skill = data;
  }
};
const actions = {
  saveSkill(context) {
    axios({
      methods: 'get',
      url: '/api/skill'
    })
      .then(function (res) {
        if (res.data.errno === 0) {
          context.commit('updateSkill', res.data);
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
