<template>
  <div>
      <form action="#" id="login">
        <h2>
            登录
            <router-link to="/logon">注册</router-link>
        </h2>
        <div>
            <label for="account">
                账号：
            </label>
            <input type="text" v-model="account">
        </div>
        <div>
            <label for="password">密码：</label>
            <input type="password" v-model="password">
        </div>
        <div>
            <label for=""></label>
            <input type="button" @click="login" class="btn" value="提交" id="submit-btn">
            <input type="button" @click="reset" class="btn" value="重置">
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  methods: {
    async login() {
      if (this.account && this.password) {
        try {
          const result = await this.$api.login(`account=${this.account}&password=${this.password}`);
          console.log(result);
          this.Cookie.setCookie('username', this.account);
          this.$router.push('./main');
        } catch (error) {
          console.log(error);
        }
      }
    },
    reset() {
      this.account = '';
      this.password = '';
    },
  },
  created() {
    this.Cookie.setCookie('username', '', -1);
  },
};

</script>

<style scoped src="./login.css">
    /* @import url(./login.css); */
</style>
