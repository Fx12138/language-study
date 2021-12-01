<template>
  <div id="app">
    <Header class="header"></Header>
    <div id="main">
      <div id="left"></div>
      <div id="content">
        <router-view />
      </div>
      <div id="right"></div>
    </div>
  </div>
</template>

<script>
import Header from "components/common/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
.header {
  position: fixed;
  top: 0px;
}
#main {
  margin-top: 82px;
  width: 100vw;
  height: 500px;
  display: flex;
}
#left {
  width: 200px;
  /* height: 100vh; */
  background-color: #f6f6f6;
}
#right {
  width: 200px;
  /* height: 100%; */
  background-color: #f6f6f6;
}
#content {
  flex: 1;
  background-color: #ffffff;
}
</style>
