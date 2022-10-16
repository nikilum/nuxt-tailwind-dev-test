<template>
  <div class="bg-blue-100 border-blue-150 border rounded-2xl px-4 py-6 md:px-8 md:py-10 w-full h-fit">
    <h2 class="text-blue-800 uppercase font-semibold text-xs xl:text-base mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:
    </h2>
    <div class="flex flex-col md:flex-row">
      <ul class="list mb-8 md:mb-0">
        <li class="list__item">incididunt ut labore et dolore magna aliqua</li>
        <li class="list__item">incididunt ut labore et</li>
        <li class="list__item">incididunt ut labore et dolore</li>
        <li class="list__item">labore et dolore</li>
        <li class="list__item">incididunt ut</li>
        <li class="list__item">incididunt ut labore et dolore</li>
        <li class="list__item">incididunt ut labore</li>
      </ul>
      <div class="grid grid-cols-4 md:grid-cols-1 xl:grid-cols-2 gap-4 flex-3 md:max-w-[86px] xl:max-w-[16rem] 2xl:max-w-xs">
        <img class="xl:rounded-none rounded-tr-xl rounded-bl-lg object-cover h-12 w-20 xl:h-auto xl:w-auto" src="~/static/images/window-1.png" alt="first img">
        <img class="xl:rounded-none rounded-tl-xl rounded-br-xl xl:rounded-tr-[50px] object-cover h-12 w-20 xl:h-auto xl:w-auto" src="~/static/images/window-2.png" alt="second img">
        <img class="xl:rounded-none rounded-tl-xl rounded-br-xl xl:rounded-bl-[50px] object-cover h-12 w-20 xl:h-auto xl:w-auto" src="~/static/images/window-3.png" alt="third img">
        <img class="xl:rounded-none rounded-tl-xl rounded-br-xl object-cover h-12 w-20 xl:h-auto xl:w-auto" src="~/static/images/window-4.png" alt="fourth img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdditionalInfoCard"
}
</script>
<style src="~/assets/scss/blocks/list.scss" scoped lang="scss"></style>
