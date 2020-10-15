<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
        <span>渡一教育</span>
      </div>
      <ul class="user">
        <li class="username" id="username">李泊浩</li>
        <li class="logout">
          <a href="./login.html">退出</a>
        </li>
      </ul>
    </div>
    <div class="left-menu">
      <dl class="menu">
        <dt>学生管理</dt>
        <!-- <dd class="active" data-id="student-list">学生列表</dd>
        <dd data-id="student-add">新增学生</dd> -->
        <router-link tag="dd" to="/main/stulist">学生列表</router-link>
        <router-link tag="dd" to="/main/addstu">学生列表</router-link>
      </dl>
    </div>
    <div class="right-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
 @import url(./index.css);
</style>
