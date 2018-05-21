import api from '../../api/menu'

const state = {
  all: []
}

const mutations = {
  setMenu (state, data) {
    state.all = data
  }
}

const actions = {
  async loadMenu ({ commit }) {
    const result = await api.getMenus()
    commit('setMenu', result.data)
  }
}

export default {
  state,
  actions,
  mutations
}
