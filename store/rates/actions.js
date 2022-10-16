export default {
  async GET_RATES({ commit }) {
    try {
      const data = await this.$axios.$get(`https://www.cbr-xml-daily.ru/daily_json.js`)

      commit('SET_RATES', data)

      return Promise.resolve(data)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
