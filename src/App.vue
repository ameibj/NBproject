<template>
  <div class="app">
    <!--<div class="app-header">
        <router-link to="/">
          <img src="../static/images/logo_nb.png" alt="">
        </router-link>
    </div>-->
    <div class="app-content">
      <banner></banner>
      <div class="app-nav-wrapper" :class="{navfixed:navfixed}" ref="navbar">
        <div class="container">
          <ul class="app-nav">
            <router-link to="/CloudPlatform" tag="li">云平台</router-link>
            <router-link to="/NewProduct" tag="li">新产品</router-link>
            <router-link to="/NewModule" tag="li">新模块</router-link>
            <router-link to="/AllProject" tag="li">项目一览</router-link>
          </ul>
        </div>
      </div>
      <div class="fixed-content">
        <router-view></router-view>
      </div>
      <div class="feedback-wrapper" @click="feedbackClick">
        <!-- <feedback></feedback>-->
        <div class="feedback" @click="feedbackClick">
          <a class="btn-confirm feedback-btn">欢迎您的意见反馈 ~ </a>
        </div>
      </div>
      <!--localStorange-->
      <div class="localStorange" v-show="items.length>0">
        <div class="container">
          <h2 class="feedback-header">意见反馈</h2>
          <div class="faceback-msg">
            <a class="btn-delete" @click="showcConfirmDialog">删除所有记录</a>
            <ul class="feedback-lists">
              <li v-for="(its,index) in items" :key="index">
                <div class="header">
                  <span class="data-time">{{its.DATA.dateTime}}</span>
                  <a href="javascript:void(0)" class="btn-delete btn-sm pull-right" @click="removeIts(index)">删除此条</a>
                </div>
                <div class="feedback-text">{{its.DATA.text}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--反馈表单dialog-->
    <my-dialog :is-show="isShowDialog" @on-close="closeDialog('isShowDialog')">
      <div slot="header">意见反馈</div>
      <div slot="dialogContent">
        <form>
          <textarea class="form-control" rows="7" placeholder="请输入您的宝贵意见" v-model="newMessage"
                    @keyup.enter="onSend"></textarea>
        </form>
      </div>
      <div slot="footer">
        <!--div 模拟按钮事件，原生按钮事件完成后浏览器滚动条会自动回到top：0位-->
        <a class="submit-btn" @click="onSend">发送</a>
      </div>
    </my-dialog>
    <!--删除localstorange dialog-->
    <my-dialog class="warning-block" :is-show="isShowFeedbackDialog" @on-close="closeDialog('isShowFeedbackDialog')">
      <div class="warning" slot="header">警告！！</div>
      <div slot="dialogContent">
        <p>确定是否清除所有本地数据，点击确定则清除本地的所有——反馈意见!</p>
      </div>
      <div slot="footer">
        <a class="btn-cancel btn-sm round-5" @click="closeDialog('isShowFeedbackDialog')">取消</a>
        <a class="btn-confirm btn-sm round-5" @click="claerStorange">确定</a>
      </div>
    </my-dialog>

    <div class="app-foot">
      <p>Copyright &copy; zonkey group, All Rights Reserved. 中庆集团京ICP备14011207号-1 </p>
    </div>
  </div>
</template>

<script>
  import banner from './components/Banner'
  import myDialog from './components/base/Dialog'
  /*loacalStorange*/
  import store from './store.js'
  import {formatDate} from './assets/js/date.js'

  export default {
    data() {
      return {
        isShowDialog: false,
        newMessage: '',
        items: store.fetch(), //获取localStorange 数据,
        isShowFeedbackDialog: false,
        navfixed: false  // 固定导航
      }
    },
    methods: {
      feedbackClick() {
        this.isShowDialog = true;
      },
      closeDialog(attr) {
        // this.isShowDialog = false; //扩展为 [] this 的属性访问
        this[attr] = false;
      },
      onSend() {
        this.isShowDialog = false;
        // 发送提交 反馈
        this.addItemFun();
        console.log(JSON.stringify(this.items))
      },
      // 保存本地存储
      addItemFun() {
        let reqParms = {
          dateTime: formatDate(new Date(), 'yyyy-MM-dd hh:mm'),
          text: this.newMessage
        };
        this.items.push({'DATA': reqParms}); // 存储到 localStorange
        this.newMessage = '';
      },
      showcConfirmDialog() {
        this.isShowFeedbackDialog = true;
      },
      claerStorange() {
        this.isShowFeedbackDialog = false;
        // 清除本地存储
        // store.clear(); //不这样清除
        this.items = [];
      },
      // 清除当前条 storange
      removeIts(index) {
        this.items.splice(index, 1)
        console.log('数组长度' + this.items.length + '数据还有' + JSON.stringify(this.items));
      }
    },
    watch: { // localStorage
      items: {
        handler: function (val, oldVal) {
          store.save(val);
        },
        deep: true
      }
    },
    computed: {},
    created() {
      this.$nextTick(function () {// 固定导航
        var navbarTop = this.$refs.navbar.offsetTop;
        var that = this;
        window.addEventListener('scroll', function () {
          // 火狐document.documentElement  chrome document.body
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          if (scrollTop > navbarTop) {
            that.navfixed = true;
          }
          else {
            that.navfixed = false;
          }
        });

        /* window.addEventListener('scroll', function () {
          if (documentEvent.scrollTop > 350) {
            that.$refs.navbar.style.position = 'fixed';
            that.$refs.navbar.style.top = 0;
            that.$refs.navbar.style.zIndex = 999;
          }
          else {
            that.$refs.navbar.style.position = 'relative';
            that.$refs.navbar.style.top = 0;
            that.$refs.navbar.style.zIndex = 999;
          }
        })*/
      })
    },
    components: {
      banner,
      myDialog
    }
  }
</script>

<style lang="less">
  @import "./assets/css/index.less";
  @import "./assets/css/var.less";

  .pull-right {
    float: right;
  }

  .app-nav-wrapper {
    height: 80px;
    width: 100%;
    background: @themeColor;
    margin-bottom: 30px;
    position: relative;
    .app-nav {
      display: flex;
      width: 100%;
      margin: 0;
      > li {
        flex: 1;
        // width: 284px;
        line-height: 80px;
        font-size: 22px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        border-right: 1px solid @activeColor;
        &:first-child {
          border-left: 1px solid @activeColor;
        }
        &.active {
          background: @activeColor;
        }
      }
    }
  }

  .feedback-wrapper {
    position: fixed;
    top: 65%;
    right: 0;
  }

  .feedback {
    position: relative;
    background: url("/static/images/feedback.png") no-repeat center;
    width: 118px;
    height: 118px;
    display: block;
    cursor: pointer;
    &:hover {
      .feedback-btn {
        display: block;
      }
    }
    .feedback-btn {
      position: absolute;
      right: 100%;
      top: 50%;
      padding: 10px;
      transform: translateY(-50%);
      font-size: 16px;
      border-radius: 4px;
      display: none;
      &:after {
        content: ' ';
        position: absolute;
        border-width: 6px 10px;
        border-style: solid;
        border-color: transparent transparent transparent @themeColor;
        left: 100%;
        top: 50%;
        margin-top: -9px;
      }
    }
  }

  .dialog-content {
    .content {
      /* background: #f5f5f5;
       padding: 20px;*/
    }
    .form-control {
      display: block;
      width: 100%;
      height: auto;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
      transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
      resize: none;
      outline: none;
      &:focus {
        border-color: #bbb;
        box-shadow: 0 0 2px #c9c9c9;
      }
    }
  }

  .dialog-header {
    height: 50px;
    line-height: 50px;
    background: @themeColor;
    color: #fff;
    font-size: 22px;
    text-align: center;
    &.warning {
      background: @colorRed;
    }
  }

  .btn-confirm, .btn-cancel {
    padding: 3px 12px;
    border-radius: 5px;
  }

  /*页头页脚*/
  .app-header {
    height: 80px;
    line-height: 80px;
    width: 100%;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding-left: 100px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.4);
    transition: background-color 0.3s ease-in-out;
    img {
      height: auto;
      height: 50px;
      margin-top: 15px;
    }
  }

  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #363636;
    color: #b2b2b2;
    clear: both;
  }

  /*feedback-lists*/
  .localStorange {
    padding-top: 30px;
    .feedback-header {
      position: relative;
      margin: 30px 0 10px;
      font-size: 28px;
      font-weight: bold;
      color: #616161;
      &:before {
        content: ' ';
        position: absolute;
        background: #26A7FF;
        height: 4px;
        width: 2em;
        left: 0;
        top: -15px;
        -webkit-box-shadow: 0px 4px 4px 0px rgba(38, 167, 255, 0.2);
        box-shadow: 0px 4px 4px 0px rgba(38, 167, 255, 0.2);
      }
    }
  }

  .faceback-msg {
    border: 3px double #ddd;
    max-height: 300px;
    padding: 20px 30px;
    margin-bottom: 50px;
    overflow: auto;
    .feedback-lists {
      > li {
        padding: 10px 25px;
        border-bottom: 1px dashed #999;
        margin: 10px 0;
        .header {
          overflow: hidden;
          .btn-cancel {
            float: right;
          }
        }
        .feedback-text {
          padding-right: 150px;
        }
      }
    }
  }

  .data-time {
    color: #999;
    overflow: hidden;
  }

  .btn-cancel, .btn-confirm {
    color: #fff;
    display: inline-block;
    cursor: pointer;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
  }

  .btn-cancel, .btn-delete {
    background-color: @colorRed;
    border-color: #ac2925;
    color: #fff;
  }

  .btn-delete {
    padding: 5px 12px;
  }

  .btn-confirm {
    background-color: @themeColor;
    border-color: #2e6da4;
  }

  .btn-sm {
    padding: 5px 12px;
    font-size: 12px;
    line-height: 1.42857143;
    vertical-align: middle;
  }

  .warning {
    background: @colorRed;
  }

  .warning-block {
    .dialog-main {
      box-shadow: 0 5px 9px 2px rgba(201, 48, 44, 0.4);
    }
  }

  .navfixed {
    position: fixed;
    top: 0;
    z-index: 999;
  }
</style>
