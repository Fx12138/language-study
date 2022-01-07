<template>
  <div class="header-box">
    <Publish @dialogFormVisible="controlDialog" v-if="dialogFormVisible" />
    <span class="title">语学</span>
    <ul>
      <li
        v-for="(item, index) in tabs"
        :key="index"
        @click="tabChange(item.index)"
      >
        {{ item.tabTitle }}
      </li>
    </ul>
    <div class="search-input">
      <input type="text" name="" id="" />
    </div>
    <div class="search-button">
      <button>搜索</button>
    </div>
    <div class="search-button">
      <button @click="dialogFormVisible = true">发表</button>
    </div>
    <div class="photo" @mouseover="photoOver" @mouseleave="photoLeave">
      <div class="photo-img"><img src="~assets/img/photo.jpg" alt="" /></div>
      <div class="photo-profile" v-show="photoClicked">
        <ul>
          <li @click="$router.push('/my/profile')">我的主页</li>
          <li>我的文章</li>
          <li>我的收藏</li>
          <li>退出登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Publish from "components/content/article/Publish";
export default {
  data() {
    return {
      tabs: [
        {
          index: 0,
          tabTitle: "英语",
        },
        {
          index: 1,
          tabTitle: "日语",
        },
        {
          index: 2,
          tabTitle: "韩语",
        },
        {
          index: 3,
          tabTitle: "俄语",
        },
      ],
      photoClicked: false,
      dialogFormVisible: false,
    };
  },
  methods: {
    init() {},
    tabChange(index) {
      switch (index) {
        case 0:
          this.$router.push("/english");
          break;
        case 1:
          this.$router.push("/japanese");
          break;
        case 2:
          this.$router.push("/korean");
          break;
        case 3:
          this.$router.push("/russian");
          break;
      }
    },

    photoOver() {
      this.photoClicked = true;
    },
    photoLeave() {
      this.photoClicked = false;
    },
    controlDialog(dialogFormVisible) {
      this.dialogFormVisible = dialogFormVisible;
    },
  },
  components: { Publish },
  created() {},
  mounted() {
    this.init();
  },
};
</script>
<style lang="less">
.header-box {
  width: 100vw;
  height: 80px;
  background-color: #ffffff;
  // overflow: hidden;
  display: flex;
  border: 1px solid #f0f2f7;
  box-shadow: 0 0 2px;
}
.title {
  margin-left: 100px;
  font-size: 3rem;
}
ul {
  display: flex;
  margin-top: 30px;
  margin-left: 50px;
  li {
    list-style: none;
    margin-left: 20px;
  }
}
.search-input {
  width: 200px;
  margin-top: 25px;
  margin-left: 100px;
  input {
    height: 30px;
    width: 200px;
    padding: 0;
    // border: none;
  }
}
.search-button {
  height: 30px;
  width: 50px;
  margin-left: 20px;
  margin-top: 28px;
  button {
    height: 30px;
    width: 50px;
  }
}
.photo {
  height: 80px;
  width: 100px;
  margin-left: 100px;
  // margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .photo-img {
    height: 60px;
    width: 60px;
    padding-top: 10px;
    padding-bottom: 13px;
    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
  }
}

// 设置鼠标悬浮显示下拉框
.photo-profile {
  height: 100px;
  width: 100px;
  // margin-top: 15px;
  box-shadow: 0px 0px 1px;
  background-color: #ffffff;
  border: 1px solid #f0f2f7;
  font-size: 13px;
  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    li {
      line-height: 25px;
      height: 25px;
      text-align: center;
      margin: 0;
    }
    li:hover {
      color: tomato;
      cursor: default;
    }
  }
}
</style>