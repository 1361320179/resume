<template>
  <div>{{contactData.contact}}</div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      getContact() {
        this.$store.dispatch('saveContact');
      }
    },
    computed: {
      contactData() {
        return this.$store.state.contact;
      }
    },
    created() {
      this.getContact();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
