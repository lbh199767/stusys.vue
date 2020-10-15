<template>
  <div id="student-list">
    <table>
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>邮箱</th>
          <th>年龄</th>
          <th>电话号码</th>
          <th>住址</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="tbody">
        <tr>
          <td>00001</td>
          <td>张益达</td>
          <td>男</td>
          <td>12354323@qq.com</td>
          <td>20</td>
          <td>13809452354</td>
          <td>上海</td>
          <td>
            <button class="btn edit">编辑</button>
            <button class="btn remove">删除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal">
      <div class="modal-content">
        <h2>编辑表单</h2>
        <form action="#" id="edit-student-form">
          <div>
            <label for="edit-name">姓名</label
            ><input type="text" id="edit-name" name="name" />
          </div>
          <div>
            <label for="">性别</label>
            <input type="radio" name="sex" id="edit-male" value="0" checked />
            <label for="edit-male" class="sex">男</label>
            <input type="radio" name="sex" id="edit-female" value="1" />
            <label for="edit-female" class="sex">女</label>
          </div>
          <div>
            <label for="edit-email">邮箱</label
            ><input type="email" id="edit-email" name="email" />
          </div>
          <div>
            <label for="edit-number">学号</label
            ><input type="text" id="edit-number" name="sNo" readonly />
          </div>
          <div>
            <label for="edit-birthYear">出生年</label
            ><input type="text" id="edit-birthYear" name="birth" />
          </div>
          <div>
            <label for="edit-phone">手机号</label
            ><input type="text" id="edit-phone" name="phone" />
          </div>
          <div>
            <label for="edit-address">住址</label
            ><input type="text" id="edit-address" name="address" />
          </div>
          <div>
            <label for=""></label>
            <button id="edit-submit" class="btn">提交</button>
          </div>
        </form>
      </div>
    </div>
    <div class="turn-page">
      <div id="prev-btn">上一页</div>
      <div id="next-btn">下一页</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
