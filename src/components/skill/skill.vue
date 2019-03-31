<template>
  <div>{{skillData.skill}}</div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      getSkill() {
        this.$store.dispatch('saveSkill');
      }
    },
    computed: {
      skillData() {
        return this.$store.state.skill;
      }
    },
    created() {
      this.getSkill();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
