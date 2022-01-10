<template>
  <div class="box">
    <div class="comment-wel">精彩评论</div>
    <div id="default-comment" v-if="NoComment">暂时没有评论哦!</div>
    <comment-item
      :comments="comments"
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
    ></comment-item>
    <div id="post-comment-box">
      <div id="write-box">
        <input
          type="text"
          v-model="content"
          name=""
          id=""
          placeholder="写下你的评论"
        />
        <button @click="pubComment(content, articleId)">发布</button>
      </div>
    </div>
  </div>
</template>
<script>
import CommentItem from "./CommentItem.vue";
import { getCommentsById, pubComment } from "network/comment/comment";
export default {
  data() {
    return {
      comments: [],
      NoComment: false,
      content: "",
    };
  },
  methods: {
    init() {},
    getComments() {
      getCommentsById(this.articleId).then((data) => {
        if (data.data.data.length == 0) {
          this.NoComment = true;
        }
        this.comments = data.data.data;
      });
    },
    pubComment(content, articleId) {
      let fromUser = {
        username: "测试用户",
        avatar: "https://profile.csdnimg.cn/B/0/4/0_weixin_43845975",
      };
      pubComment(content, articleId, fromUser).then((data) => {
        if (data.status == 200) {
          this.content = "";
          window.alert("发表成功");
          this.getComments();
        }
      });
    },
  },
  props: {
    articleId: {
      type: String,
    },
  },
  components: {
    CommentItem,
  },
  created() {
    this.getComments();
  },
  mounted() {
    this.init();
  },
};
</script>
<style lang="less" scoped>
.box {
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  width: 100%;
  height: auto;
  margin-top: 15px;
  .comment-wel {
    padding: 15px 20px;
    background-color: #f6f6f6;
    font-weight: 600;
    padding: 10px 20px;
    font-size: 14px;
    color: grey;
  }
  #post-comment-box {
    border-top: 1px solid #ebebeb;
    width: 100%;
    #write-box {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;
      width: 100%;
      input {
        width: 80%;
        height: 38px;
      }
      button {
        width: 100px;
        height: 35px;
        margin-left: 20px;
        background-color: royalblue;
        border: none;
        border-radius: 8px;
      }
    }
  }
}
</style>