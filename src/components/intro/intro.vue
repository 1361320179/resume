<template>
  <div>{{introData.intro}}</div>
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

</style>
