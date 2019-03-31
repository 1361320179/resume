<template>
  <div>{{expData.exp}}</div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      getExp() {
        this.$store.dispatch('saveExp');
      }
    },
    computed: {
      expData() {
        return this.$store.state.exp;
      }
    },
    created() {
        this.getExp();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
