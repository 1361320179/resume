<template>
  <div class="intro_wrapper">
    <div class="intro_content">
      <h3 v-text="introData.intro.quote" class="intro_quote"></h3>
      <ul class="intro_list">
        <li v-for="(item, index) in introData.intro.introList" v-text="item" :key="index" class="intro_item"></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      getIntro() {
        this.$store.dispatch('saveIntro');
      }
    },
    computed: {
      introData() {
        return this.$store.state.intro;
      }
    },
    created() {
      this.getIntro();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .intro_wrapper
    .intro_content
      display: inline-block
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      box-sizing: border-box
      width: 100%
      height: 80%
      padding: 20px
      .intro_quote
        line-height: 28px
        font-size: 14px
        text-align: center
        color: #fff
        border-1px(#fff)
      .intro_list
        margin-top: 120px
        .intro_item
          line-height: 24px
          font-size: 12px
          text-align: center
          color: #fff
</style>
