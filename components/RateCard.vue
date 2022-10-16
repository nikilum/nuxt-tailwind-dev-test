<template>
<div class="px-8 py-10 bg-gray-50 rounded-2xl shadow-black hover:shadow-md transition-shadow ease-in-out">
  <img class="mb-4 md:mb-6" :src='require(`static/icons/money_${imageColor}.svg`)'>
  <div class="mb-3 md:mb-6 text-blue-800 text-xl">{{ valuteCode }}</div>
  <div class="text-base text-gray-900 mb-7 md:mb-9">{{ valuteName }}</div>
  <ul class="list">
    <li class="list__item">Номинал: {{ valuteNominal }}</li>
    <li class="list__item">Курс: {{ valuteRate }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "RateCard",
  props: {
    imageColor: {type: String, default: "blue"},
    valuteCode: {type: String, required: true},
    valuteName: {type: String, required: true},
    valuteNominal: {type: [Number, String], required: true},
    valuteRate: {type: [Number, String], required: true}
  },

}
</script>
<style src="~/assets/scss/blocks/list.scss" scoped lang="scss"></style>
