<template>
  <div class="header-box">
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
    <div class="photo">
      <img src="~assets/img/photo.jpg" alt="" />
    </div>
  </div>
</template>
<script>
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
  },
  components: {},
  created() {},
  mounted() {
    this.init();
  },
};
</script>
<style lang="less">
.ssss {
  height: 100px;
  width: 100px;
  background-color: yellow;
}
.header-box {
  width: 100vw;
  height: 80px;
  background-color: #ffffff;
  // overflow: hidden;
  display: flex;
  border: 1px solid #f0f2f7;
  box-shadow: 0 0 6px;
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
  height: 60px;
  width: 60px;
  margin-left: 100px;
  border-radius: 50%;
  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }
}
</style>