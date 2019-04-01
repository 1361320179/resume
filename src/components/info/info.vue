<template>
  <!--<div>{{infoData.info}}</div>-->
  <div class="info_wrapper">
    <div class="info_content">
      <h3 v-text="infoData.info.title" class="info_title"></h3>
      <ul class="info_list">
        <li v-for="(item, index) in infoData.info.infoList" :key="index" class="info_item">
          <span :class="styleList[index]" class="info_icon"></span>
          <span v-text="item.key" class="info_key"></span>
          <span>/</span>
          <span v-text="item.value" class="info_value"></span>
        </li>
      </ul>
      <ul class="des_list">
        <li v-for="(item, index) in infoData.info.desList" v-text="item" :key="index" class="des_item"></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        styleList: ['icon-i_age', 'icon-i_edu', 'icon-i_site', 'icon-i_status']
      };
    },
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
  .info_wrapper
    .info_content
      display: inline-block
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      box-sizing: border-box
      width: 100%
      height: 80%
      padding: 20px
      color: #fff
      .info_title
        line-height: 28px
        font-size: 14px
        text-align: center
      .info_list
        display: flex
        margin-top: 20px
        margin-bottom: 80px
        text-align: center
        .info_item
          flex: 1
          font-size: 0
          & > span
            font-size: 12px
            &:last-child
              margin-left: 2px
          .info_icon
            display: block
            padding: 6px
            font-size: 24px
            line-height: 36px
      .des_list
        margin: 0 auto
        padding-top: 10px
        padding-bottom: 10px
        width: 90%
        text-align: center
        font-size: 12px
        background: #f2f3f4
        border-radius: 10px
        .des_item
          line-height: 24px
          text-align: center
          color: #333
</style>
