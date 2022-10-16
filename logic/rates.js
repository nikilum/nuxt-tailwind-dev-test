export default {
  findValuteByNameOrCode(nameOrCode, ratesArray) {
    return Object.values(ratesArray)
      .find(({Name, CharCode}) => (nameOrCode === Name || nameOrCode === CharCode))
  },

  convertValute(firstValute, secondValute) {
    // (39.8954 / 1) / (15.6102 / 100)
    return (secondValute.Value / secondValute.Nominal) / (firstValute.Value / firstValute.Nominal)
  }
}
