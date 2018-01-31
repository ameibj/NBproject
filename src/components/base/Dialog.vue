<template>
  <div class="dialog-wrap">
    <div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>
    <transition name="drop">
      <div class="dialog-main" v-if="isShow">
        <div class="dialog-header">
          <p class="dialog-close" @click="closeMyself">x</p>
          <slot name="header"></slot>
        </div>
        <div class="dialog-content">
          <slot name="dialogContent">empty</slot>
        </div>
        <div class="dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    methods: {
      closeMyself() {
        this.$emit('on-close')
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/css/var.less";

  .drop-enter-active {
    transition: all .5s ease;
  }

  .drop-leave-active {
    transition: all .3s ease;
  }

  .drop-enter {
    transform: translateY(-500px);
  }

  .drop-leave-active {
    transform: translateY(-500px);
  }

  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }

  .dialog-cover {
    background: #000;
    opacity: 0.3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .dialog-main {
    width: 500px;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #f5f5f5;
    top: 20%;
    left: 50%;
    margin-left: -250px;
    z-index: 10;
    box-shadow: 0 5px 9px 2px rgba(38, 167, 255, .4);
    border-radius: 5px;
    line-height: 1.6;
    .dialog-content {
      background: #f5f5f5;
      padding: 20px;
    }
  }

  .dialog-close:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  .dialog-header {
    height: 50px;
    line-height: 50px;
    background: @themeColor;
    color: #fff;
    font-size: 22px;
    text-align: center;
    position: relative;
    .dialog-close {
      position: absolute;
      right: 0;
      top: -2px;
      text-align: center;
      cursor: pointer;
      color: #fff;
      padding: 0 20px;
    }
  }

  .dialog-footer {
    text-align: right;
    background: #f5f5f5;
    padding: 0 20px 20px;
    .submit-btn {
      font-size: 16px;
      width: 80px;
      height: 34px;
      line-height: 34px;
      border-radius: 5px;
      text-align: center;
      color: #fff;
      border: none;
      display: inline-block;
      background: @themeColor;
    }
  }
</style>
