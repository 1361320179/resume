<template>
  <div id="app">
    <v-tab></v-tab>
    <v-footer></v-footer>
  </div>
</template>

<script>
import tab from './components/tab/tab';
import footer from './components/footer/footer';

export default {
  components: {
    'v-tab': tab,
    'v-footer': footer
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
    background: #6a6da9

</style>
