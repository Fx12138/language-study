<template>
  <div class="article-box">
    <div class="title">{{ article.title }}</div>
    <div class="user-info">
      <div>用户头像</div>
      <div class="follow">关注他+</div>
    </div>
    <div class="content">{{ article.content }}</div>
    <CommentList class="comment-box" :articleId="articleId"></CommentList>
  </div>
</template>
<script>
import { getArticleById } from "network/article/article";
import CommentList from "components/content/comment/CommentList";
export default {
  data() {
    return {
      articleId: "",
      article: {
        title: "",
        content: "",
        time: "",
        user: "",
        comment: {},
      },
    };
  },
  methods: {
    init() {},
    getArticle() {
      getArticleById(this.articleId).then((result) => {
        // this.title = result.data.data.title;
        // this.content = result.data.data.content;
        this.article = result.data.data;
      });
    },
  },
  components: {
    CommentList,
  },
  created() {
    this.articleId = this.$route.params.articleId;
    this.getArticle();
  },
  mounted() {
    this.init();
  },
};
</script>
<style lang="less" scoped>
.article-box {
  height: 100%;
  width: 90%;
}
.title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-left: 0px;
  font-weight: bold;
  font-size: 1.5rem;
}
.user-info {
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  .follow {
    height: 40px;
    line-height: 40px;
    width: 70px;
    text-align: center;
    background-color: tomato;
    margin-left: auto;
    margin-right: 100px;
  }
}
</style>