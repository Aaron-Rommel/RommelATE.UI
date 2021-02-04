<template>
  <div class="main">

    <div class="main-left">

    </div>
    <div class="main-right">

      <el-row style="margin-bottom: 50px;">
        <el-col :span="14" class="lignite">
          后台管理框架
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 20px" class="input">
        <el-col :span="14">
          <el-input prefix-icon="el-icon-user" v-model="uname"></el-input>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 30px" class="input">
        <el-col :span="14">
          <el-input prefix-icon="el-icon-lock" v-model="upass"></el-input>
        </el-col>
      </el-row>
      <el-row class="input">
        <el-col :span="14">
          <el-button type="primary" plain style="margin-right: 10px" @click="login()">登录</el-button>
          <el-button type="primary" plain>注册</el-button>
        </el-col>
      </el-row>
    </div>

    <!-- 提示框 -->
    <el-dialog title="系统提示" :visible.sync="dialogTip1" width="440px">
      <div >
        <i></i>
        <p><span>{{tipName}}</span></p>
      </div>
      <span slot="footer">
        <el-button @click="dialogTip1 = false"  type="primary" plain>确 定</el-button>
      </span>
    </el-dialog>
    <router-view/>
  </div>

</template>
<script>
  export default {
    name: "Logon",
    data() {
      return {
        uname: '',
        upass: '',
        loading: false,
        dialogTip1: false,
        tipName: "",
      }
    },
    mounted() {
    },
    methods: {
      login() {
        // if (this.uname == "") {
        //   this.tipName = "用户名称不可为空！"
        //   this.dialogTip1 = true
        //   return false
        // }
        this.$router.push(
          {
            path: "/index"
          }
        )
      }
    }
  }
</script>
<style>

  .main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .lignite {
    font-size: 25px;
    font-family: 华文行楷;
    color: #333333;
    margin-top: 250px;
    margin-left: 35px;
    margin-bottom: 18px;
    font-weight: bold;
  }

  .input {
    margin-left: 40px;
  }

  .main .main-left {
    float: left;
    width: 70%;
    height: 100%;
    background-color: #2f3e52;
  }

  .main .main-right {
    float: left;
    width: 30%;
    height: 100%;
  }


</style>
