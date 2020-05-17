import { vuexfireMutations } from 'vuexfire'

export const state = () => ({
  drawer: null
})

export const mutations = {
  ...vuexfireMutations,
  toggleDrawer: (state) => {
    state.drawer = !state.drawer
  }
}

export const getters = {
  stateDrawer: (state) => {
    // eslint-disable-next-line no-undef
    return state.drawer
  }
}
