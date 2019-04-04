import axios from 'axios';

const state = {
  contact: {}
};
const mutations = {
  updateContact(state, data) {
    state.contact = data;
  }
};
const actions = {
  saveContact(context) {
    axios({
      methods: 'get',
      url: '/api/contact'
    })
      .then(function (res) {
        if (res.data.errno === 0) {
          context.commit('updateContact', res.data.data);
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
