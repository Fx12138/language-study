<template>
  <div class="article-box">
    <div class="article-title">{{ articleItem.title }}</div>
    <div class="article-content">{{ articleItem.content }}</div>
    <div class="article-options">
      <div class="options-good">
        <div>赞同</div>
        <div>反对</div>
      </div>
      <div class="options-operate">
        <div class="operate">评论</div>
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
  },
  components: {},
  created() {},
  mounted() {
    this.init();
  },
};
</script>
<style lang="less">
.article-box {
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 20px;
  border-bottom: 1px solid #f0f2f7;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  .article-title {
    height: 20px;
    width: 100%;
    background-color: #ffffff;
  }
}
.article-options {
  display: flex;
}
.options-good {
  display: flex;
}
.options-operate {
  display: flex;
  margin-left: 200px;
}
</style>