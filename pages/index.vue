<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Завершёно!
      </h1>
      <swiper 
        :list ="$store.state.votes_expired" 
        @lastSlide="addNewSlide"
        @clickSlide="clickSlide"
      />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Swiper from '~/components/Swiper.vue'
export default {
  components: {
    Logo,
    Swiper
  },
  async created() {
    await this.$votes.getListExpired(1, 2)
  },
  methods: {
    // TODO: написать js доку
    async addNewSlide(page) {
      await this.$votes.getListExpired(page, 1)
    },
    clickSlide(num) {
      window.open(
        'https://vmeste-region.ru/votes/' +
          this.$store.state.votes_expired[num].id
      )
    }
  }
}
</script>
