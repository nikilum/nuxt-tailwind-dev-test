<template>
  <div class="container mx-auto mt-8 px-4 md:px-8 xl:px-12 2xl:px-20">
    <PageHeader>Валютный калькулятор</PageHeader>
    <main class="flex flex-col md:flex-row">
      <RatesForm class="mb-4 md:mb-0"/>
      <AdditionalInfoCard/>
    </main>
    <PageFooter type="lg" />
  </div>
</template>

<script>
import RatesForm from "~/components/RatesForm";
import AdditionalInfoCard from "~/components/AdditionalInfoCard";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

export default {
  name: 'IndexPage',
  components: {PageFooter, PageHeader, RatesForm, AdditionalInfoCard},
}
</script>
<style src="~/assets/scss/blocks/footer.scss" scoped lang="scss"></style>
