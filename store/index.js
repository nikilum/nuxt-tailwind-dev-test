export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('rates/GET_RATES')
  }
}
