<template>
  <boardlist :board-list="boardList">
    <li slot="feature" slot-scope="props" class="slot-lis">{{props.text}}</li>
  </boardlist>
</template>

<script>
  import BoardList from './base/BoardList'

  export default {
    name: "",
    data() {
      return {
        boardList: [
          {
            src: '/static/images/lub.png',
            title: '录播集控平台V3.0版本',
            text: '对录播教室进行集中管控，支持多教室轮询，便于查看录播教室。支持录播教室远程导播和直播监控，辅助中庆录播教室的管理、操作和实时监控。',
            featureList: [
              {text: '1、支持分区管理，可自定义分区与管理员'},
              {text: '2、支持3100、3700和5100一键批量升级'},
              {text: '3、使用app即可对录播教室进行相应控制'}
            ]
          },
          {
            src: '/static/images/zbfu.png',
            title: '公共服务直播平台',
            text: '满足大规模直播时代客户需求，更快速、更灵活、更开放的满足不同行业、场景的客户对直播功能的需求，可广泛应用于众多行业领域。',
            featureList: [
              {text: '1、1000个点并发，500K码率，电影模式直播'},
              {text: '2、网页端+手机端+公众号同步进行，大型直播灵活观看'},
              {text: '3、.大会、分会场自由组建直播'}
            ]
          },
          {
            src: '/static/images/jxpt.png',
            title: '教学平台',
            text: '支持备课资料随堂用、课堂资料自动回传到平台的备课系统和教师自主准备导学案，在线开展导学的教学平台。',
            featureList: [
              {text: '1、提供个人备课资料管理，支持备课资料上传、下载和预览'},
              {text: '2、连接智慧教室，支持课件同步到课堂，课堂资源回传到备课中心'},
              {text: '3、支持在线组织导学，在线了解学习情况'}
            ]
          },
          {
            src: '/static/images/mkpt.png',
            title: '慕课平台',
            text: '以课程为中心，支持自定义课程分类，定制课程专辑，提供课程置顶展示和课程推荐的课程平台。',
            featureList: [
              {text: '1、自定义课程分类'},
              {text: '2、自定义课程专辑'},
              {text: '3、支持课程推荐和置顶展示'}
            ]
          },
          {
            src: '/static/images/pxpt.png',
            title: '培训平台',
            text: '在线自主学习+培训管理的课程学习平台。',
            featureList: [
              {text: '1、自定义课程分类，支持按分类管理课程和学习情况'},
              {text: '2、记录用户学习历史，方便继续学习'},
              {text: '3、支持学情监督，随时了解学习者的学习时长和课程数量'},
              {text: '4、提供日志和统计，展现平台使用的全局视图'}
            ]
          }
        ],
        featureList: [
          '1、提供个人备课资料管理，支持备课资料上传、下载和预览',
          '2、连接智慧教室，支持课件同步到课堂，课堂资源回传到备课中心',
          '3、支持在线组织导学，在线了解学习情况'
        ]
      }
    },
    components: {
      boardlist: BoardList
    }
  }
</script>

<style scoped lang="less">
.slot-lis {
  margin-bottom: 5px;
}
</style>
