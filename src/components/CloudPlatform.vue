<template>
  <div class="clodplatform">
    <boardlist :board-list="boardList"></boardlist>
    <!--产品卖点 selling -->
    <div class="selling bg-gray">
      <h1>云平台的新特性</h1>
      <div class="container es-homepage">
        <div class="course-wrapper">
          <div class="course-item" :class="{active:isActive==index}" @mouseover="hoverFun(index)"
               v-for="(item,index) in lists">
            <div class="course-item-overview text-center">
              <div class="course-item-header">
                <i class="ace-icon fa fa-cog bigger-230"></i>
                <div class="course-item-title">{{item.colName}}</div>

                <div class="course-item-line"></div>
              </div>
              <div class="course-item-body">
                <p v-for="(group,index) in item.group">{{group.header}}</p>
              </div>
            </div>
            <div class="course-item-detail">
              <div class="course-item-header">
                <i class="iconfont icon-jiaoshi"></i>
                <span>{{item.colName}}</span>
                <div class="course-item-line"></div>
              </div>
              <div class="course-item-body">
                <div class="course-intro-group">
                  <div class="course-intro-item" v-for="(group,index) in item.group">
                    <div class="course-intro-item-header">
                      <i class="iconfont icon-shipin"></i>
                      <span>{{group.header}}</span>
                    </div>
                    <div class="course-intro-item-body" v-for="(list,index) in group.textContent">
                      {{list}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BoardList from './base/BoardList'

  export default {
    name: "",
    data() {
      return {
        isActive: false,
        boardList: [
          {
            src: '/static/images/ypt.png',
            title: '云平台 V3.4',
            text: '此版本结合2017年各处用户、客户、代理商、售后人员等提出的常用需求和意见，在3.3.1基础上改进的版本。补充了一些关键需求，也对一些功能和UI做出了易用性的调整。'
          }
        ],
        lists: [
          {
            colName: '有亮点',
            group: [
              {
                header: '云录播',
                textContent: ['为常态课的直播、资源回传、资源存储和认领提供了简单易用的方案']
              },
              {
                header: '电子展',
                textContent: ['以时间为维度，定期整理汇聚平台各应用模块中发布的优秀资源和活动的合辑，并以专题的形式展示']
              },
              {
                header: '首页自定义',
                textContent: ['由用户自行定义各栏目在首页显示的位置、名称、内容数量，并支持栏目的隐藏和显示']
              },
              {
                header: '全局搜索',
                textContent: ['一词检索全平台，通过输入关键词、学科、主讲教师等信息搜索平台中相关的资源、直播、活动']
              }
            ]
          },
          {
            colName: '更有用',
            group: [
              {
                header: '平台可升级',
                textContent: [
                  '1、支持从V2.3升级到V3.3.1',
                  '2、支持从V3.0、V3.1、V3.2升级到V3.3.1',
                  '3、升级后保留用户、组织、站点、优课中心的资源'
                ]
              },
              {
                header: '批量操作',
                textContent: [
                  '1、支持批量为站群所有子站安装模块',
                  '2、支持学生用户批量删除'
                ]
              },
              {
                header: '导入导出',
                textContent: [
                  '1、评课量表导入',
                  '2、直播记录、评课结果、资源统计信息导出'
                ]
              },
              {
                header: '直播结果',
                textContent: ['直播后，主讲人能在个人空间看到评论、评分、在线讨论的信息']
              },
              {
                header: '页头页脚自定义',
                textContent: ['1、各模块的banner现在可以更换', '2、各站点的页脚的信息可以修改']
              },
              {
                header: '访问记录',
                textContent: ['可查看自己的访问记录']
              }
            ]
          },
          {
            colName: '更易用',
            group: [
              {
                header: '微信平台扩展',
                textContent: [
                  '1、微信平台新增在线听课、优课评选和量表评分',
                  '2、手机浏览器打开平台时，自动切换到微信平台模式',
                  '3、增加直播的教室视图，并支持微信平台预约直播'
                ]
              },
              {
                header: '兼容性提示',
                textContent: [
                  '识别浏览器类型及版本，不支持该浏览器时，提示下载谷歌浏览器'
                ]
              },
              {
                header: '学校搜索',
                textContent: ['在学校列表页，不仅提供分类筛选，还支持按学校名称搜索']
              },
              {
                header: '补充模块栏目',
                textContent: ['新增视频教研、专题频道、优课评选、在线听课栏目可在首页展示']
              },
            ]
          },
          {
            colName: '更好看',
            group: [
              {
                header: '新主题',
                textContent: [
                  '提供一套可更换的新主题',
                ]
              },
              {
                header: '弹窗优化',
                textContent: [
                  '改进了弹窗的显示效果'
                ]
              }
            ]
          }
        ]

      }
    },
    components: {
      boardlist: BoardList
    },
    methods: {
      hoverFun(i) {
        this.isActive = i;
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/css/var.less";

  .course-wrapper {
    display: flex;
  }

  .es-homepage .course-item {
    position: relative;
    display: block;
   // height: 350px;
    //width: 17%;
    height: 570px;
    flex: 1;
    background-color: #ffffff;
    border: 1px solid #e1e1e1;
    border-top-width: 5px;
    overflow: hidden;
    float: left;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 767px) {
    .es-homepage .course-item {
      width: auto;
      height: auto;
      margin-bottom: 30px;
      float: none;
      border-color: @themeColor;
    }

    .es-homepage .course-item.active {
      width: 32%;
    //  height: 490px;
      border-color: @themeColor;
      transform: translateY(-70px);
    }

    .es-homepage .course-item .course-item-overview {
      opacity: 0;
    }

    .es-homepage .course-item .course-item-detail {
      opacity: 1;
    }
  }

  @media screen and (max-width: 767px) {
    .es-homepage .course-item.active {
      width: auto;
      box-shadow: 0 10px 20px 1px rgba(145, 145, 145, 0.5);
      transform: translateY(0);
    }
  }

  .es-homepage .course-item.active {
    // width: 32%;
    flex: 2;
   // height: 490px;
    height: 710px;
    border-color: @themeColor;
    transform: translateY(-70px);
  }

  @media screen and (max-width: 767px) {
    .es-homepage .course-item.active {
      width: auto;
      box-shadow: 0 10px 20px 1px rgba(145, 145, 145, 0.5);
      transform: translateY(0);
    }
  }

  .es-homepage .course-item.active .course-item-overview {
    opacity: 0;
  }

  .es-homepage .course-item.active .course-item-detail {
    opacity: 1;
  }

  .es-homepage .course-item-overview {
    position: absolute;
    left: 0;
    right: 0;
   // height: 350px;
    opacity: 1;
    padding-top: 36px;
  }

  .es-homepage .course-item-overview .course-item-header i {
    font-size: 36px;
    line-height: 1;
  }

  .es-homepage .course-item-overview .course-item-body {
    margin-top: 40px;
    font-size: 14px;
    color: #313131;
    line-height: 16px;
    p {
      margin-bottom: 20px;
    }
  }

  .es-homepage .course-item-overview .course-item-title {
    margin-top: 20px;
    font-size: 18px;
    color: #313131;
    font-weight: bold;
  }

  .es-homepage .course-item-overview .course-item-line {
    width: 50px;
    height: 1px;
    margin: 20px auto 0 auto;
    background-color: #e1e1e1;
  }

  .es-homepage .course-item-detail {
    opacity: 0;
    //padding: 36px 30px 0 30px;
    padding: 36px 30px;
  //  height: 490px;
    min-width: 375px;
  }

  @media screen and (max-width: 767px) {
    .es-homepage .course-item-detail {
      min-width: auto;
    }
  }

  .es-homepage .course-item-detail .course-item-header {
    color: @themeColor;
    line-height: 1;
  }

  .es-homepage .course-item-detail .course-item-header i {
    font-size: 36px;
    vertical-align: middle;
  }

  .es-homepage .course-item-detail .course-item-header span {
    font-size: 24px;
    font-weight: bold;
    vertical-align: middle;
  }

  .es-homepage .course-item-detail .course-item-line {
    width: auto;
    height: 1px;
    margin: 25px auto 0 auto;
    background-color: #e1e1e1;
  }

  .es-homepage .course-item-detail .course-item-body {
    margin-top: 40px;
  }

  .es-homepage .course-item-detail .course-intro-item + .course-intro-item {
    margin-top: 30px;
  }

  .es-homepage .course-item-detail .course-intro-item-header {
    color: #313131;
  }

  .es-homepage .course-item-detail .course-intro-item-header i {
    font-size: 24px;
    line-height: 1px;
    vertical-align: middle;
    color: #616161;
  }

  .es-homepage .course-item-detail .course-intro-item-header span {
    color: #313131;
    font-size: 18px;
    vertical-align: middle;
  }

  .es-homepage .course-item-detail .course-intro-item-body {
    margin-top: 5px;
    line-height: 24px;
    font-size: 14px;
    color: #616161;
  }

  es-homepage .course-item-detail .course-item-header {
    color: @themeColor;
    line-height: 1;
  }

  .selling {
    padding: 60px 0;
    height: 1038px;
    h1 {
      font-size: 48px;
      color: #313131;
      letter-spacing: 5px;
      line-height: 1;
      text-align: center;
    }
    .es-homepage {
      margin-top: 160px;
    }

  }

</style>
