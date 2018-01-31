<template>
  <div class="all-project">
    <h1 class="header">上海金山网上课堂</h1>
    <boardlist :board-list="boardList">
      <li slot="feature" slot-scope="props" class="slot-lis">{{props.text}}</li>
    </boardlist>
    <!--主要项目-->
    <div class="other-Project bg-gray">
      <div class="container">
        <h1 class="header">主要项目</h1>
        <ul class="project-list">
          <li v-for="item in otherProject">
            <a :href="item.href">
              <h3 class="title">{{item.title}}</h3>
              <div class="content">
                <!--   <h4>主要功能</h4>-->
                <p>{{item.text}}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--免费支持-->
    <div class="supportive">
      <div class="container">
        <h1 class="header">其他支持</h1>
        <ul class="supportive-project">
          <li v-for="item in supportiveProject">
            <a :href="item.href">{{item.title}}</a>
          </li>
        </ul>
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
        boardList: [
          {
            htitle: '重要项目',
            src: '/static/images/jsxm.png',
            title: '项目简介',
            text: '以直播和点播为常用功能，对易用性有一定的要求，同时对资源分类管理、存储定期清理、页面自定义等都提出了较高的要求。',
            featureList: [
              {text: '1、动态首页：可定制首页的栏目、名称和内容显示数量。'},
              {text: '2、细化资源审核：可设定资源管理员，且可设定管理范围。'},
              {text: '3、资源定期清理：可设定资源过期时间，不二次使用的资源会定期自动删除'},
              {text: '4、成果展示：定期将优秀活动、资源整理成专题发布。'},
            ]
          }
        ],
        /*主要项目*/
        otherProject: [
          {
            icon: '',
            href: '',
            title: '鼓楼项目',
            text: '首页定制、优课资源排序、微课附件、课程推荐、名师工作站、专题资源审核'
          },
          {
            icon: '',
            href: '',
            title: '荷塘大赛',
            text: '导入赛程、导入量表、支持上传教案、大赛统计、直播课参赛、专家库'
          },
          {
            icon: '',
            href: '',
            title: '邯郸武安',
            text: '优课分类展示、直播分类展示、设置直播课课件、学段与年级绑定、优课评选得分可修改'
          },
          {
            icon: '',
            href: '',
            title: '厦门同安 & 甘肃定西',
            text: '全局用户搜索和管理  视频教研跨站选用户用户组织变更'
          },
          {
            icon: '',
            href: '',
            title: '烟台会 & 南明评课大赛',
            text: '大规模直播并发  录像回放'
          },
          {
            icon: '',
            href: '',
            title: '德州一中',
            text: '专题频道三级分类  主导航调整  权限调整'
          }
        ],
        /*免费支持*/
        supportiveProject: [
          {
            href: '',
            title: '西宁城北区平台'
          },
          {
            href: '',
            title: '甘肃定西云平台'
          },
          {
            href: '',
            title: '青海职教学院'
          },
          {
            href: '',
            title: '兰州市教育云平台'
          },
          {
            href: '',
            title: '陕西宝鸡校平台'
          },
          {
            href: '',
            title: '西安鼎浩'
          },
          {
            href: '',
            title: '重庆大渡口区平台'
          },
          {
            href: '',
            title: '重庆师范大学'
          },
          {
            href: '',
            title: '贵州黄花岗'
          },
          {
            href: '',
            title: '贵阳南明区平台'
          },
          {
            href: '',
            title: '广西师大'
          },
          {
            href: '',
            title: '腾冲平台'
          },
          {
            href: '',
            title: '云南省电教馆'
          },
          {
            href: '',
            title: '葫芦岛平台'
          },
          {
            href: '',
            title: '桦甸临江小学平台'
          },
          {
            href: '',
            title: '石家庄二中平台'
          },
          {
            href: '',
            title: '潍坊直播平台'
          },
          {
            href: '',
            title: '东阳平台'
          },
          {
            href: '',
            title: '上海六一小学平台'
          },
          {
            href: '',
            title: '上海浦东云平台'
          },
          {
            href: '',
            title: '上海青浦云平台'
          },
          {
            href: '',
            title: '上海杨浦云平台'
          },
          {
            href: '',
            title: '江苏淮阴云平台'
          },
          {
            href: '',
            title: '武汉青山区平台'
          },
          {
            href: '',
            title: '宣城云平台'
          },
          {
            href: '',
            title: '怀化雅礼中学平台'
          },
          {
            href: '',
            title: '福建职教学院'
          },
          {
            href: '',
            title: '珠海金湾区平台'
          },
          {
            href: '',
            title: '珠海一职校平台'
          }
        ]
      }
    },
    methods: {},
    components: {
      boardlist: BoardList
    }
  }
</script>

<style scoped lang="less">
  .all-project {
    padding-top: 40px;
  }

  .header {
    font-size: 48px;
    color: #313131;
    letter-spacing: 5px;
    line-height: 1;
    text-align: center;
    position: relative;
    top: 0;
  }

  .other-Project {
    padding: 60px 0;
  }

  .project-list {
    display: flex;
    width: 100%;
    padding: 40px 22px;
    flex-wrap: wrap;
    > li {
      width: 33%;
      padding: 10px;
      a {
        background: #fff;
        display: inline-block;
        height: 123px;
        width: 100%;
        padding: 10px 20px;
        &:hover {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
      }
      .title {
        font-size: 22px;
        margin-bottom: 10px;
        text-align: center;
        border-bottom: 1px dashed #ddd;
      }
      .content {
        h4 {
          margin: 10px 0;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }

  .supportive {
    padding: 60px 0;
    .supportive-project {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 40px 22px;
      > li {
        width: 16.66%;
        padding: 0 10px;
        margin: 10px 0;
        text-align: center;
        > a {
          display: block;
          border: 1px solid #ddd;
          padding: 10px 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: default;
        }
      }
    }
  }
</style>
