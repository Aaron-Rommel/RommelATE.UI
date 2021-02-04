<template>
  <div class="container_all">
    <el-container>
      <el-aside width="200px" class="main_aside">
        <el-row>
          <el-col :span="24">
            <p class="main_left_title">RommelATE框架</p>
            <el-menu
              :default-active="activeindex"
              class="el-menu-vertical"
              @open="handleOpen"
              @close="handleClose" background-color="#2f3e52" text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1">
                <i class="el-icon-monitor"></i>
                <span slot="title" @click="ToMainPage">系统首页</span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span>用户角色</span>
                </template>
                <el-menu-item index="2-1" @click="ToUserInfoPage">用户管理</el-menu-item>
                <el-menu-item index="2-2" @click="ToRoleInfoPage">角色管理</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>菜单权限</span>
                </template>
                <el-menu-item index="3-1">菜单管理</el-menu-item>
                <el-menu-item index="3-2">权限管理</el-menu-item>
                <el-menu-item index="3-3">接口管理</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-s-home"></i>
                  <span>业务操作</span>
                </template>
                <el-menu-item index="4-1">图标</el-menu-item>
                <el-menu-item index="4-2">表单</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>基础配置</span>
                </template>
                <el-menu-item index="5-1">字典管理</el-menu-item>
                <el-menu-item index="5-2">系统设置</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header class="main_container_header">
          <div style="" class="header-right">
            <p class="main_header_p">
              <img src="../assets/logo.png"/>
            </p>
            <span>
                后台测试1
              </span>
          </div>
        </el-header>
        <el-main class="main_container_main">
          <div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    name: "Index",
    data() {
      return {
        isCollapse: true,
        activeindex:"2-1"
      }
    },
    mounted() {
      this.ToUserInfoPage();
    },
    methods: {
      ToMainPage(){
        this.$router.push({
          path: "/index/welcome"
        })
      },
      ToUserInfoPage()
      {
        this.$router.push({
          path: "/index/userinfo"
        })
      },
      ToRoleInfoPage()
      {
        this.$router.push({
          path: "/index/roleinfo"
        })
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<style>

  .main_header_p
  {
    display: inline-block;
    margin-bottom: 15px;
    width: 35px;
    height: 35px;
    background-color: #eeeeee;
    border-radius: 100%;
    line-height: 40px;
    text-align: center;
  }
  .main_header_p img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  .main_container_ini_font {
    line-height: 30px;
    font-family: 華康勘亭流(P);
    font-size: 20px;
    text-align: left;

  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .header-left_breader {
    color: white;
  }

  .header-left {
    margin-top: 40px;
    margin-left: 1px;
  }

  .header-right {
    float: right;
    text-align: right;
    color: #eeeeee;
    line-height: 60px;
  }

  .container_all .el-menu {
    border-right: none
  }

  .main_left_title {
    font-family: "Times New Roman";
    color: #eeeeee;
    font-size: 20px;

  }

  .el-menu-vertical {
  }

  .container_all {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  .main_aside {
    background-color: #2f3e52;
    /*撑满整个div*/
    height: 100vh;
  }

  .main_container_header {
    background-color: #2f3e52;
    height: 62px;
    border-left: solid 1px #eeeeee;
  }

  .main_container_main {
    background-color: white;
  }

</style>
