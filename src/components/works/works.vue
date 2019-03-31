<template>
  <div>{{worksData.works}}</div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      getWorks() {
        this.$store.dispatch('saveWorks');
      }
    },
    computed: {
      worksData() {
        return this.$store.state.works;
      }
    },
    created() {
      this.getWorks();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
