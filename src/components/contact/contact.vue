<template>
  <!--<div>{{contactData.contact}}</div>-->
  <div class="contact_wrapper">
    <div class="contact_content">
      <h3 class="contact_title" v-text="contactData.contact.title"></h3>
      <ul class="message_list">
        <li v-for="(item, index) in contactData.contact.messageList" v-text="item" :key="index" class="message_item"></li>
      </ul>
      <div class="icon_wrapper">
        <ul class="icon_list">
          <li class="icon_item"><a :href="contactData.contact.github" target="_blank"  class="icon-s_github"></a></li>
          <li class="icon_item"><a :href="contactData.contact.blog" target="_blank" class="icon-s_blog"></a></li>
          <li class="icon_item"><a :href="contactData.contact.weibo" target="_blank" class="icon-s_wb"></a></li>
          <li class="icon_item"><a :href="contactData.contact.zhihu" target="_blank" class="icon-s_zh"></a></li>
        </ul>
      </div>
    </div>
  </div>
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
  .contact_wrapper
    .contact_content
      display: inline-block
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      box-sizing: border-box
      width: 100%
      height: 80%
      padding: 20px
      .contact_title
        line-height: 28px
        font-size: 14px
        text-align: center
        color: #fff
      .message_list
        margin-top: 80px
        .message_item
          line-height: 28px
          font-size: 14px
          text-align: center
          color: #fff
      .icon_wrapper
        margin-top: 20px
        .icon_list
          margin: 0 auto
          width: 140px
          height: 20px
          text-align: center
          .icon_item
            float: left
            margin: 6px
            padding: 2px
            border: 1px solid #fff
            border-radius: 50%
            font-size: 16px
</style>
