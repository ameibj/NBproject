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
            src: '/static/images/ylb.png',
            title: '云录播',
            text: '云录播模块是为了支持分布式录播而定制的直播模块，为常规授课的直播、资源回传、资源存储和认领提供了简单易用的方案。',
            featureList: [
              {text: '1、免预约：可按课表自动生成课节信息'},
              {text: '2、自动录制：根据课程安排或课表时间自动录制录像（服务器录像）'},
              {text: '3、资源认领：按课表时间自动录制的课程可由教师自主人认领'}
            ]
          },
          {
            src: '/static/images/dzz.png',
            title: '电子展',
            text: '电子展是以时间为维度，定期整理汇聚平台各应用模块中发布的优秀资源和活动的合辑，并以专题的形式展示。',
            featureList: [
              {text: '1、内容自由定制：根据需要选择某段时间内发布的优秀课程和开展的活动'},
              {text: '2、专题展示：整理好的内容以专题页的形式展示在平台'},
              {text: '3、跨模块综合展示：可将优课中心、微课中心、专题频道、优课评选、视频教研模块的资源综合成一个专题展示。'}
            ]
          },
          {
            src: '/static/images/mszj.png',
            title: '名师工作站',
            text: '名师工作站是一个简单的资源分享圈子，圈内成员自由分享视频、文档并开展内部交流，优秀资源可由名师整理成专辑并发布。',
            featureList: [
              {text: '1、圈内分享和交流'},
              {text: '2、优秀资源整理成专辑并发布'}
            ]
          },
          {
            src: '/static/images/kzpt.png',
            title: '跨站互联',
            text: '跨站互联可将独立部署的多个云平台整合成有上下级级关系的多级平台',
            featureList: [
              {text: '1、支持资源跨平台自下而上的提交'},
              {text: '2、支持直播跨平台自下而上的提交'},
              {text: '2、支持公告跨平台自上而下的传达'}
            ]
          }
        ]
      }
    },
    components: {
      boardlist :BoardList
    }
  }
</script>

<style scoped lang="less">

</style>
