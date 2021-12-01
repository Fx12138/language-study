<template>
  <div class="article-list">
    <span v-if="articles.length == 0"
      >目前没有收录文章哦!再逛逛其他地方吧!</span
    >
    <ArticleItem
      v-for="(item, index) in articles"
      :key="index"
      :articleItem="item"
    ></ArticleItem>
  </div>
</template>
<script>
import ArticleItem from "components/content/article/ArticleItem";
export default {
  data() {
    return {};
  },
  props: {
    articles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    init() {},
  },
  components: {
    ArticleItem,
  },
  created() {},
  mounted() {
    this.init();
  },
};
</script>
<style lang="less">
</style>