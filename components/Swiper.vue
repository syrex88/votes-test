<template>
  <div
    class="swipe-component">
    <swiper
      v-if="list.length !== -1" 
      ref="swiper-plugin"
      @slideChange="slideChange"
      @click="click"
    >
      <swiper-slide 
        v-for="vote in list"  
        :key="vote.id" >
        <div class="swipe-info">
          <div class="date">с {{ $moment(vote.date).format('DD MMMM') }} по {{ $moment(vote.expire).format('DD MMMM') }}</div>
          <div 
            :style="'background: url('+vote.thumbnail.url+') center; height:336px;' " 
            class="image"/>
          <div class="text">{{ vote.title }}</div> 
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    slideChange(ev) {
      let count_slides = this.$refs['swiper-plugin'].swiper.realIndex
      if (count_slides === this.list.length - 1) {
        this.$emit('lastSlide', count_slides + 2)
      }
    },
    click() {
      this.$emit('clickSlide', this.$refs['swiper-plugin'].swiper.realIndex)
    }
  }
}
</script>
<!--TODO: не ругайте за стили не в общем файле :) знаю-->
<style>
.swipe-component {
  margin-top: 42px;
  width: 400px;
  min-height: 440px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 12px -3px rgba(56, 54, 68, 0.8);
}
.swipe-info .date {
  text-align: left;
  position: absolute;
  padding-left: 21px;
}
.swipe-info .text {
  text-align: left;
  padding: 4px 21px;
}
.swipe-info .image {
  border-radius: 4px;
}
</style>
