<template>
  <svg class="skill_pic">
    <polyline points="100,20 180,100 100,180 20,100 100,20" stroke="#ddd" stroke-width="2" fill-opacity="0"></polyline>
    <circle v-for="(item, index) in sList" :key="'c'+index" r="10" :cx="cList[index][0]" :cy="cList[index][1]"
            :fill="colorList[index]" fill-opacity="0.4"></circle>
    <text v-for="(item, index) in sList" :key="'t'+index" :x="cList[index][0]-7" :y="cList[index][1]+2" font-size="8px" fill="#fff">
      {{item}}
    </text>
  </svg>
  <!--[[66, 66], [99, 66], [132, 66], [132, 99], [132, 132], [99, 132], [66, 132], [66, 99]]-->
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      sList: {}
    },
    created() {
      this.$nextTick(this.move());
    },
    data() {
      return {
        colorList: ['#8a2be2', '#ffff00', '#8b3a3a', '#b8860b', '#cd2626'],
        x1: 66,
        y1: 66,
        x2: 99,
        y2: 66,
        x3: 132,
        y3: 66,
        x4: 132,
        y4: 99,
        x5: 132,
        y5: 132,
        x6: 99,
        y6: 132,
        x7: 66,
        y7: 132,
        x8: 66,
        y8: 99
      };
    },
    computed: {
      cList() {
        return [[this.x1, this.y1], [this.x2, this.y2], [this.x3, this.y3], [this.x4, this.y4], [this.x5, this.y5], [this.x6, this.y6], [this.x7, this.y7], [this.x8, this.y8]];
      }
    },
    methods: {
      move() {
        setInterval(function () {
          if (this.x1 < 132 && this.y1 === 66) {
            this.x1 += 1;
          } else if (this.y1 < 132 && this.x1 === 132) {
            this.y1 += 1;
          } else if (this.x1 > 66 && this.y1 === 132) {
            this.x1 -= 1;
          } else if (this.y1 > 66 && this.x1 === 66) {
            this.y1 -= 1;
          }
          if (this.x2 < 132 && this.y2 === 66) {
            this.x2 += 1;
          } else if (this.y2 < 132 && this.x2 === 132) {
            this.y2 += 1;
          } else if (this.x2 > 66 && this.y2 === 132) {
            this.x2 -= 1;
          } else if (this.y2 > 66 && this.x2 === 66) {
            this.y2 -= 1;
          }
          if (this.x3 < 132 && this.y3 === 66) {
            this.x3 += 1;
          } else if (this.y3 < 132 && this.x3 === 132) {
            this.y3 += 1;
          } else if (this.x3 > 66 && this.y3 === 132) {
            this.x3 -= 1;
          } else if (this.y3 > 66 && this.x3 === 66) {
            this.y3 -= 1;
          }
          if (this.x4 < 132 && this.y4 === 66) {
            this.x4 += 1;
          } else if (this.y4 < 132 && this.x4 === 132) {
            this.y4 += 1;
          } else if (this.x4 > 66 && this.y4 === 132) {
            this.x4 -= 1;
          } else if (this.y4 > 66 && this.x4 === 66) {
            this.y4 -= 1;
          }
          if (this.x5 < 132 && this.y5 === 66) {
            this.x5 += 1;
          } else if (this.y5 < 132 && this.x5 === 132) {
            this.y5 += 1;
          } else if (this.x5 > 66 && this.y5 === 132) {
            this.x5 -= 1;
          } else if (this.y5 > 66 && this.x5 === 66) {
            this.y5 -= 1;
          }
        }.bind(this), 20);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .skill_pic
    position: absolute
    top: 15%
    left: 50%
    transform: translate(-100px, 0) scale(1.3)
    width: 200px
    height: 200px
</style>
