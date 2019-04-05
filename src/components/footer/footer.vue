<template>
  <footer class="bottom">
    <p v-text="footerData.footer.copyright" class="footer_text"></p>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      getFooter() {
        this.$store.dispatch('saveFooter');
      }
    },
    computed: {
      footerData() {
        return this.$store.state.footer;
      }
    },
    created() {
      this.getFooter();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bottom
    position: absolute
    bottom: 2%
    width: 100%
    .footer_text
      line-height: 16px
      font-size: 10px
      text-align: center
      color: #333
</style>
