<template>
  <!--<div>{{worksData.works}}</div>-->
  <div class="works_wrapper">
    <div class="works_content">
      <h3 class="works_title" v-text="worksData.works.title"></h3>
      <div class="block">
        <el-carousel trigger="click" height="200px" :autoplay=false>
          <el-carousel-item v-for="(item1, index1) in worksData.works.worksList" :key="index1" class="carousel_item">
            <h4 v-text="item1.title" class="works_item_title"></h4>
            <ul class="detail_list">
              <li v-for="(item2, index2) in item1.detailList" :key="index2" v-text="item2" class="detail_item"></li>
            </ul>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
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
  .works_wrapper
    .works_content
      display: inline-block
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      box-sizing: border-box
      width: 100%
      height: 80%
      padding: 20px
      .works_title
        margin-bottom: 60px
        line-height: 28px
        font-size: 14px
        text-align: center
        color: #fff
      .carousel_item
        background: #afb4db
        .works_item_title
          line-height: 24px
          font-size: 12px
          text-align: center
          color: #333
        .detail_list
          margin-left: 8px
          .detail_item
            line-height: 18px
            font-size: 12px
            text-align: left
            color: #333
</style>
