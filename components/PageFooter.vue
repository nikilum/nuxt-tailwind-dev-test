<template>
  <footer class="footer" :class="type === 'lg' ? 'footer_big' : 'footer_small'">
    <template v-if="type === 'lg'">
      <div class="w-full">
        <h3 class="text-base font-bold md:font-medium md:text-xl lg:text-3xl 2xl:text-4xl text-blue-800 mb-3 block text-center md:text-start">
          Нужна помощь?<br>Мы поможем! Просто свяжитесь с нами.</h3>
        <p class="block text-xs lg:text-md 2xl:text-base text-blue-900 text-center md:text-start">
          Наши специалисты с радостью ответят на все ваши вопросы и дадут
          <br>
          профессиональную консультацию по товарам.
        </p>
      </div>
      <div class="w-fit flex flex-col items-center mt-8 md:mt-0 md:ml-14 lg:mr-12">
        <a class="text-blue-800 font-bold text-2xl lg:text-4xl 2xl:text-5xl block whitespace-nowrap" href="tel:88008889028">
          8 (800) 888-90-28
        </a>
        <p class="text-blue-900 text-xs md:text-2xl my-1 lg:my-2 2xl:my-4 block">или</p>
        <a class="text-blue-800 text-lg lg:text-2xl 2xl:text-3xl" href="mailto:info@example.ru">info@example.ru</a>
      </div>
    </template>
    <template v-else>
      <img class="mb-7 md:mb-0 mr-8 w-11 h-11 md:w-auto md:h-auto" src="~/static/icons/info_blue.svg" alt="info icon">
      <span class="font-bold text-blue-800 text-base md:text-xl">
        Телефон:
        <a href="tel:88008889028">8 (800) 888-90-28</a>,
        email:
        <a href="mailto:info@example.ru">info@example.ru</a>.
      </span>
    </template>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
  props: {
    type: {type: String, default: 'sm'}
  }
}
</script>
