<template>
<div class="mr-9 flex flex-col w-full">
  <label class="mb-6 text-sm 2xl:text-base flex flex-col">
    Валюта 1
    <input  v-model.trim="firstValute" list="valute-autocomplete" placeholder="Введите название или код" class="input mt-2">
  </label>
  <label class="mb-6 text-sm 2xl:text-base flex flex-col">
    Валюта 2
    <input v-model.trim="secondValute" list="valute-autocomplete" placeholder="Введите название или код" class="input mt-2 marker:hidden">
  </label>
  <label class="mb-6 text-sm 2xl:text-base flex flex-col">
    Количество
    <input type="number" v-model="valuteCount" placeholder="Введите число" class="input mt-2">
  </label>

  <div class="bg-blue-100 rounded-2xl px-8 py-10 flex items-center">
    <img class="mr-8 xl:max-h-12 xl:max-w-12" src="~/static/icons/info_red.svg" alt="info image">
    <div class="font-bold text-blue-800 xl:text-xl 2xl:text-2xl">Итого: {{ result }}</div>
  </div>
  <datalist id="valute-autocomplete">
    <option v-for="item of ratesAutocomplete">
      {{ item }}
    </option>
  </datalist>
</div>
</template>

<script>
import { mapState } from 'vuex';
import rates from '~/logic/rates'

export default {
  name: "RatesForm",
  data: () => ({
    firstValute: "",
    secondValute: "",
    valuteCount: "",
  }),
  methods: {
    ...rates
  },
  computed: {
    ...mapState('rates', ['rates']),
    result() {
      const firstValuteObj = this.findValuteByNameOrCode(this.firstValute, this.rates)
      const secondValuteObj = this.findValuteByNameOrCode(this.secondValute, this.rates)
      const count = this.valuteCount

      if (!firstValuteObj || !secondValuteObj || !count) {
        return "..."
      }

      const result = (this.convertValute(secondValuteObj, firstValuteObj) * count).toLocaleString()

      if (result.length > 20) {
        return 'Слишком длинное число'
      }

      return result
    },
    ratesAutocomplete() {
      return [
        ...Object.keys(this.rates),
        ...Object.values(this.rates).map(({ Name }) => (Name))
      ]
    }
  }
}
</script>

<style src="~/assets/scss/blocks/input.scss" scoped lang="scss"></style>
