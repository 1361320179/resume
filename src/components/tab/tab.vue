<template>
  <div class="tab">
    <ul class="tab-list">
      <li class="tab-item">
        <router-link to="/intro">
          <span class="title">首页</span>
          <span class="icon icon-d_home"></span>
        </router-link>
      </li>
      <li class="tab-item">
        <router-link to="/info">
          <span class="title">关于我</span>
          <span class="icon icon-d_info"></span>
        </router-link>
      </li>
      <li class="tab-item">
        <router-link to="/skill">
          <span class="title">技能</span>
          <span class="icon icon-d_skills"></span>
        </router-link>
      </li>
      <li class="tab-item">
        <router-link to="/experience">
          <span class="title">经历</span>
          <span class="icon icon-d_exp"></span>
        </router-link>
      </li>
      <li class="tab-item">
        <router-link to="/works">
          <span class="title">作品</span>
          <span class="icon icon-d_works"></span>
        </router-link>
      </li>
      <li class="tab-item">
        <router-link to="/contact">
          <span class="title">联系我</span>
          <span class="icon icon-d_contact"></span>
        </router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view class="show"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    position: absolute
    top: 30%
    right: 6px
    .tab-list
      padding: 6px
      .tab-item
        margin-top: 20px
        text-align: right
        .title
          opacity: 0
          font-size: 12px
          font-weight: bold
          transition: all .5s
        .icon
          display: inline-block
          padding: 3px
          border-radius: 50%
          vertical-align: middle
          font-size: 22px
          background: rgba(66, 66, 66, 0)
          transition: all .5s
        a.active .title
          opacity: 1
        a.active .icon
          background: rgba(66, 66, 66, 1)
    .show
      position: fixed
      top: 40px
      right: 40px
      bottom: 40px
      left: 0
</style>
