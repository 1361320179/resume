<template>
  <div class="skill_wrapper">
    <div class="skill_content">
      <h3 v-text="skillData.skill.title" class="skill_title"></h3>
      <v-sketch :sList="skillData.skill.sList"></v-sketch>
      <ul class="des_list">
        <li v-for="(item, index) in skillData.skill.desList" v-text="item" :key="index" class="des_item"></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import sketch from '../../components/sketch/sketch';
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
    },
    components: {
      'v-sketch': sketch
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .skill_wrapper
    .skill_content
      display: inline-block
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      box-sizing: border-box
      width: 100%
      height: 80%
      padding: 20px
      .skill_title
        line-height: 28px
        font-size: 14px
        text-align: center
        color: #fff
      .des_list
        position: absolute
        left: 50%
        top: 70%
        width: 250px
        transform: translate(-50%, 0)
      .des_item
        line-height: 24px
        font-size: 12px
        text-align: center
        color: #fff
</style>
