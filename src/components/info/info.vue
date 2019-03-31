<template>
  <div>{{infoData.info}}</div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      getInfo() {
        this.$store.dispatch('saveInfo');
      }
    },
    computed: {
      infoData() {
        return this.$store.state.info;
      }
    },
    created() {
      this.getInfo();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
