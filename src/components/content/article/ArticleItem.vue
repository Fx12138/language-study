<template>
  <div class="article-box">
    <div class="article-title" @click="toDetail(articleItem._id)">
      {{ articleItem.title }}
    </div>
    <div class="article-content">{{ articleItem.content }}</div>
    <div class="article-options">
      <div class="options-good">
        <div>赞同</div>
        <div>反对</div>
      </div>
      <div class="options-operate">
        <div class="operate">展开评论</div>
        <div class="operate">收藏</div>
        <div class="operate">分享</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    articleItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    init() {},
    toDetail(articleId) {
      this.$router.push({
        path: `/article/${articleId}`,
      });
    },
  },
  components: {},
  created() {},
  mounted() {
    this.init();
  },
};
</script>
<style lang="less" scoped>
.article-box {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #f0f2f7;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  .article-title {
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    font-size: 1.2rem;
    width: 100%;

    background-color: #ffffff;
  }
  .article-content {
    display: -webkit-box; /**对象作为伸缩盒子模型展示**/
    -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
    -webkit-line-clamp: 3; /**显示的行数**/
    overflow: hidden; /**隐藏超出的内容**/
  }
}
.article-options {
  display: flex;
  margin-top: 30px;
}
.options-good {
  display: flex;
}
.options-operate {
  display: flex;
  margin-left: 100px;
  .operate {
    margin-left: 50px;
  }
}
</style>