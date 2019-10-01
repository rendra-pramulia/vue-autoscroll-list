<template>
  <div :class="classOuter" class="outer">
      <div :class="classInner" class="inner">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'AutoScroll',
  props: {
    classOuter: {
      type: String,
      default: ''
    },
    classInner: {
      type: String,
      default: ''
    },
    animationFlow: {
      type: String,
      default: 'utd'
    },
    animationSpeed: {
      type: String,
      default: '2500'
    },
    animationInterval: {
      type: String,
      default: '4000'
    }
  },
  computed: {
      speed() {
          if (this.animationSpeed) return parseInt(this.animationSpeed)
          else return 2500
      },
      interval() {
          if (this.animationInterval) return parseInt(this.animationInterval)
          else return 4000
      }
  },
  mounted() {
    this.$nextTick(() => {
      $('.outer').css({ maxHeight: $('.inner').height() })
      $('.inner').html($('.inner').html() + $('.inner').html())
      if (this.animation === 'dtu') {
        setInterval(() => {
          const childHeight = $('.inner').children().first().outerHeight()
          $('.inner').stop().animate({scrollTop: childHeight}, this.speed, 'linear', function(){
            $(this).scrollTop(0).children().last().after($('.inner').children().first())
          });
        }, this.interval)
      } else {
        setInterval(() => {
          $('.inner').stop().animate({scrollTop: 0}, this.speed, 'linear', function(){
            $(this).scrollTop(0).children().first().before($('.inner').children().last())
          });
        }, this.interval)
      }
    })
  }
}
</script>

<style>
*{
    margin:0;
    padding:0;
}
.inner{
    position:relative;
    top:0px;
}
.outer{
    overflow:hidden;
}
</style>
