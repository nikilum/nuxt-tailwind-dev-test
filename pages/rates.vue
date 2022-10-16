<template>
  <div class="container mx-auto mt-8 px-4 md:px-8 xl:px-12 2xl:px-20">
    <PageHeader>Курс рубля</PageHeader>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <RateCard v-for="(card, index) of Object.values(rates)" :key="card.ID"
                :valute-name="card.Name"
                :valute-code="card.CharCode"
                :valute-nominal="card.Nominal"
                :valute-rate="card.Value"
                :image-color="index % 2 === 0 ? 'blue' : 'red'"/>
    </div>
    <PageFooter type="sm" />
  </div>
</template>

<script>
import {mapState} from "vuex";
import RateCard from "../components/RateCard";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

export default {
  name: "rates",
  components: {PageFooter, PageHeader, RateCard},
  computed: {
    ...mapState('rates', ['rates']),
  }
}
</script>
<style src="~/assets/scss/blocks/footer.scss" scoped lang="scss"></style>
