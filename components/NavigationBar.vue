<template>
  <header class="font-sans bg-blue-100">
    <div class="container px-8 xl:px-12 2xl:px-20 mx-auto">
      <nuxt-link
        v-for="route of routes"
        :key="route.name"
        class="mr-8 text-xs py-4 last:mr-0 inline-block"
        :class="selectedRoute === route.name ? 'text-gray-700' : 'text-gray-600'"
        :to="{ name: route.name }"
      >
        {{ route.title }}
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavigationBar",
  data: () => ({
    routes: [
      {name: "index", title: "Калькулятор"},
      {name: "rates", title: "Курс рубля"}
    ],
  }),
  computed: {
    selectedRoute() {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
</style>
