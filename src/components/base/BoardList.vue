<template>
  <div>
    <div class="board-list" :class="{oddstyle:index % 2 == 0, 'board-move':isScroll}"
         v-for="(item,index) in boardList"
         :key="index" ref="scrollDom">
      <div class="container">
        <div class="wow slideInUp board-img" data-wow-duration="1s" data-wow-delay="1s" data-wow-offset="20">
          <img :src="item.src" alt="">
        </div>
        <div class="board-text">
          <div class="title">
            <h2>{{item.title}}</h2>
          </div>
          <p>{{item.text}}</p>
          <div class="feature" v-if="item.featureList">
            <h3>主要特性</h3>
            <ul>
              <slot name="feature" v-for="li in item.featureList" :text="li.text">{{li}}</slot>
            </ul>
          </div>

          <a href="javascript:;" class="my-btn" v-show="false">了解详情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      boardList: {
        type: Array
      },
      items: {
        type: Array
      },
    },
    data() {
      return {
        isScroll: true
      }
    },
    computed: {},
    methods: {
      scrollMove() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        // ref 距离顶的高度
        // var redH = this.$refs.scrollDom[0].offsetTop;
        if (t > 20) {
          this.isScroll = false;
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        //  this._calculateHeight();
        //  this.scrollMove();
        // window.addEventListener('scroll', this.scrollMove, false);
        new WOW().init();
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/var.less";
  @import "../../../static/css/animate.css";

  .board-list {
    width: 100%;
    background: #f5f5f5;
    overflow: hidden;
    &.oddstyle {
      background: #fff;
      .board-img {
        float: left;
        width: 55%;
      }
      .board-text {
        float: right;
        width: 45%;
      }
    }
    .board-img {
      float: right;
      width: 55%;
      position: relative;
      top: 0;
      // box-shadow: 0 0 35px 4px rgba(0, 0, 0, 0.1);
      transition: all 1.4s 0.4s cubic-bezier(0, 0.85, 0.35, 1);
      img {
        width: 100%;
        height: auto;
      }
    }
    .board-text {
      position: relative;
      float: left;
      width: 45%;
      height: 432px;
      padding: 74px 44px;
      .title {
        position: relative;
        overflow: hidden;
      }
      h2 {
        font-size: 28px;
        line-height: 33px;
        margin-bottom: 20px;
        font-weight: bold;
        color: #616161;
        position: relative;
        &:before {
          content: ' ';
          position: absolute;
          background: @themeColor;
          height: 4px;
          width: 2em;
          left: 0;
          top: -25px;
          box-shadow: 0px 4px 4px 0px rgba(38, 167, 255, 0.2);
        }
      }
      p {
        font-size: 16px;
      }
    }
  }

  .my-btn {
    width: 110px;
    height: 34px;
    line-height: 34px;
    background: @themeColor;
    text-align: center;
    color: #fff;
    border: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 40px;
  }

  .feature {
    margin-top: 20px;
    h3 {
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
</style>
