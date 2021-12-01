<template>
  <div class="box">
    <ArticleList :articles="articles"></ArticleList>
  </div>
</template>
<script>
import ArticleList from "components/content/article/ArticleList";
export default {
  data() {
    return {
      articles: [
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
        {
          title: "哈哈哈哈",
          content: "呵呵呵呵呵呵呵呵",
        },
      ],
    };
  },
  methods: {
    init() {},
  },
  components: {
    ArticleList,
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less">
</style>