<template>
    <el-form  class="login-container" ref="AccountForm" :model="account"  :rules="loginRules" label-position="left">
    <p>Welcome</p>
    <el-form-item prop="username">
      <el-input 
          v-model="account.username" 
          type="text" 
          placeholder="账号">
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="account.password" type="password" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked>记住密码</el-checkbox>
    <el-form-item>
      <el-button @click.native.prevent="handleLogin" :loading="logining" type="primary">login</el-button>
      <el-button
        type="primary"
        class="resetBtn"
        @click.native.prevent="reset">
        reset
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import store from "@/store/index";
import { requseLogin } from "@/axios/api";

export default {
  name: "login",
  data() {
    return {
      account: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true,
      logining: false
    };
  },
  methods: {
    handleLogin() {
      this.$refs.AccountForm.validate(valid => {
        if (valid) {
          this.logining = true;
          let loginParams = {
            username: this.account.username,
            password: this.account.password
          };
          store.state.username=this.account.username;
          requseLogin(loginParams)
            .then(res => {
              this.logining = false;
              let { code, msg, user } = res.data;
              if (code === 200) {
                this.$message({
                  type: "success",
                  message: msg
                });
                sessionStorage.setItem("user", JSON.stringify(user));

                console.log("this", this);
                this.$router.push({ path: "/Home" });
              } else {
                this.$message({
                  type: "error",
                  message: msg
                });
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
    reset() {
      this.$refs.AccountForm.resetFields();
    }
  }
};
</script>
<style scoped>
body{
    background: #DFE9FB;
  }
.login-container {
  width:350px;
  margin-left: 35%;
  margin-top: 50px;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  padding: 10px 30px;
  border-radius: 5px;
}
  .el-button {
    width:100%;
    box-sizing: border-box;
    margin: 10px 0;
  }
 p {
  font-size: 30px;
  margin: 0;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  background-image: linear-gradient(
    to right,
    orangered,
    orange,
    gold,
    lightgreen,
    cyan,
    dodgerblue,
    mediumpurple,
    hotpink,
    orangered
  );
  background-size: 200px;
  animation: sliding 30s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@keyframes sliding {
  to {
    background-position: -2000px;
  }
}
</style>

