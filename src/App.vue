<template>
  <div id="app">
<!--    <el-row type="flex" justify="start">-->
<!--      <h1>客户管理系统</h1>-->
<!--    </el-row>-->
    <router-view></router-view>

    <!--表格、分页-->
<!--    <TableBody/>-->



  </div>
</template>

<script>
  // import TableBody from "./components/TableBody";

  export default {
    name: 'app',
    components: {

    }
  }
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
