<template>
  <!--<div>{{expData.exp}}</div>-->
  <div class="exp_wrapper">
    <div class="exp_content">
      <h3 v-text="expData.exp.title" class="exp_title"></h3>
      <div class="block">
        <el-timeline>
          <el-timeline-item v-for="(item, index1) in expData.exp.expList" :key="index1" :timestamp="expData.exp.expList[index1].time" placement="top">
            <el-card>
              <h4 v-text="expData.exp.expList[index1].title" class="txt_title"></h4>
              <ul class="exp_list">
                <li v-for="(item, index2) in expData.exp.expList[index1].desList" v-text="item" :key="index2" class="exp_item"></li>
              </ul>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
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
  .exp_wrapper
    .exp_content
      display: inline-block
      position: absolute
      top: 0
      left: 50%
      transform: translate(-50%, 0)
      box-sizing: border-box
      width: 100%
      height: 80%
      padding: 20px
      .exp_title
        line-height: 28px
        font-size: 14px
        text-align: center
        color: #fff
      .txt_title
        line-height: 16px
        font-size: 10px
        text-align: left
        color: #f05b72
      .exp_list
        .exp_item
          line-height: 16px
          font-size: 10px
          text-align: left
          color: #333
</style>
