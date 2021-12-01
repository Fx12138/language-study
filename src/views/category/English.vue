<template>
  <div class="box">
    <ArticleList :articles="articles"></ArticleList>
  </div>
</template>
<script>
import { getArticlesByCat } from "../../network/article/article";

import ArticleList from "components/content/article/ArticleList";
export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getEnglishArticles() {
      getArticlesByCat(0)
        .then((result) => {
          this.articles = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    ArticleList,
  },
  created() {
    this.getEnglishArticles();
  },
  mounted() {},
};
</script>
<style lang="less">
</style>