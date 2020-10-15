<template>
  <div id="student-add">
    <form action="#" id="add-student-form">
      <div>
        <label for="name">姓名</label
        ><input type="text" id="name" name="name" />
      </div>
      <div>
        <label for="">性别</label>
        <input type="radio" name="sex" id="male" value="0" checked />
        <label for="male" class="sex">男</label>
        <input type="radio" name="sex" id="female" value="1" />
        <label for="female" class="sex">女</label>
      </div>
      <div>
        <label for="email">邮箱</label
        ><input type="email" id="email" name="email" />
      </div>
      <div>
        <label for="number">学号</label
        ><input type="text" id="number" name="sNo" />
      </div>
      <div>
        <label for="birthYear">出生年</label
        ><input type="text" id="birthYear" name="birth" />
      </div>
      <div>
        <label for="phone">手机号</label
        ><input type="text" id="phone" name="phone" />
      </div>
      <div>
        <label for="address">住址</label
        ><input type="text" id="address" name="address" />
      </div>
      <div>
        <label for=""></label>
        <button id="add-submit" class="btn">提交</button>
        <input type="reset" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
