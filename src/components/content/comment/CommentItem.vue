<template>
  <div class="box1">
    <div class="comment-box">
      <div id="head">
        <img :src="comment.fromUser.avatar" alt="" />
      </div>
      <div class="content-box">
        <div class="comment-top">
          <div id="username">{{ comment.fromUser.username }}</div>
          <div id="time">{{ comment.date }}</div>
        </div>

        <div id="content-text">{{ comment.content }}</div>
        <div id="good-num">133</div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    init() {},
  },
  props: {
    comment: {
      type: Object,
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
.box1 {
  margin-left: 20px;
}
.comment-box {
  margin-top: 10px;
  display: flex;
  #head {
    height: 35px;
    width: 35px;
    img {
      height: 35px;
      width: 35px;
    }
  }

  .content-box {
    width: 100%;
    margin-left: 6px;
    .comment-top {
      height: 35px;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      #time {
        margin-right: 20px;
        margin-left: auto;
      }
    }
  }
}
.box1:not(:last-child):after {
  content: "";
  margin: 0 20px;
  display: block;
  border-bottom: 1px solid #f6f6f6;
}
</style>