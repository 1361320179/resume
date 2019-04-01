<template>
  <div id="app">
    <v-tab></v-tab>
  </div>
</template>

<script>
import tab from './components/tab/tab';

export default {
  components: {
    'v-tab': tab
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100%
    background: #99ccee

</style>
