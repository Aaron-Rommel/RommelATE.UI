<template>
  <div class="container_all">
    <el-container>
      <el-aside width="auto"
                @mouseenter.native="collapseOpen"
                @mouseleave.native="collapseClose" class="main_aside">
        <el-row>
          <el-col :span="24">
            <p class="main_left_title">Rompro</p>
            <el-menu
              :default-active="activeindex"
              class="el-menu-vertical"
              @open="handleOpen"
              @close="handleClose" background-color="#001529" text-color="#fff"
              active-text-color="#ffd04b"
              :collapse="isCollapse">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-s-home" style="font-size: 14px"></i>
                  <span>DashBoard</span>
                </template>
                <el-menu-item index="1-1" @click="ToMainPage"><i class="el-icon-monitor"
                                                                 style="font-size: 14px"></i><span>工作台</span>
                </el-menu-item>
                <el-menu-item index="1-2" @click="ToMainPage"><i class="el-icon-data-line"
                                                                 style="font-size: 14px"></i><span>分析页</span>
                </el-menu-item>
                <el-menu-item index="1-3" @click="ToMainPage"><i class="el-icon-stopwatch"
                                                                 style="font-size: 14px"></i><span>监控页</span>
                </el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-setting" style="font-size: 14px"></i>
                  <span>系统管理</span>
                </template>
                <el-menu-item index="2-1" @click="ToUserInfoPage"><i class="el-icon-user"
                                                                     style="font-size: 14px"></i><span>用户管理</span>
                </el-menu-item>
                <el-menu-item index="2-2" @click="ToRoleInfoPage"><i class="el-icon-postcard"
                                                                     style="font-size: 14px"></i><span>角色管理</span>
                </el-menu-item>
                <el-menu-item index="2-3" @click="ToRoleInfoPage"><i class="el-icon-set-up" style="font-size: 14px"></i><span>菜单管理</span>
                </el-menu-item>
                <el-menu-item index="2-4" @click="ToRoleInfoPage"><i class="el-icon-notebook-2"
                                                                     style="font-size: 14px"></i><span>字典管理</span>
                </el-menu-item>
                <el-menu-item index="2-4" @click="ToRoleInfoPage"><i
                  class="el-icon-office-building" style="font-size: 14px"></i><span>机构管理</span></el-menu-item>
                <el-menu-item index="2-4" @click="ToRoleInfoPage"><i class="el-icon-wallet" style="font-size: 14px"></i><span>登录日志</span>
                </el-menu-item>
                <el-menu-item index="2-4" @click="ToNoAuth"><i class="el-icon-receiving"
                                                               style="font-size: 14px"></i><span>操作日志</span>
                </el-menu-item>
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
          <div style="" class="header-left">
            <i class="el-icon-s-unfold" @click="collapseStatus" style="color:white;"></i>
            <i class="el-icon-refresh-right" style="color:white; margin-left: 10px;"></i>
            <i class="el-icon-s-home" style="color:white;margin-left: 10px;"></i>
            <i> &nbsp;/&nbsp;</i>
            <i style="font-style: normal">首页</i>
            <i> &nbsp;/&nbsp;</i>
            <i style="font-style: normal">用户管理</i>
          </div>
          <div style="" class="header-right">
            <i class="el-icon-full-screen" style="margin-right: 15px"></i>

            <span style="margin-right: 30px;position: relative;">
              <i class="el-icon-bell">
                 <span style="background-color: red;border-radius: 5px;position:absolute;text-align: center;">15</span>
              </i>
            </span>
            <p class="main_header_p">
              <img src="../assets/logo.png"/>
            </p>
            <span>
                Rommel
            </span>
          </div>
        </el-header>
        <div style="position:relative;height: 100%">
          <el-main>
            <div class="main_container_main_scroll">
              <div style="float: left;line-height: 40px;margin-left: 15px;">
                <i class="el-icon-arrow-left"></i>
                <el-tag>主页</el-tag>
                <el-tag
                  :key="tag"
                  v-for="tag in dynamicTags"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)">
                  {{tag}}
                </el-tag>
              </div>
              <div style="float: right;line-height: 40px;margin-right: 20px">
                <i class="el-icon-arrow-right"></i>
                <el-dropdown>
                  <span class="el-dropdown-link" style="margin-left: 15px">
                    <i class="el-icon-arrow-down el-icon--right">
                    </i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-back">关闭左侧</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-right">关闭右侧</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-close">关闭其他</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-close">关闭全部</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div class="main_container_main_context">
              <router-view></router-view>
            </div>
          </el-main>
        </div>
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
        activeindex: "2-1",
        collapseBtnClick: false,
        isCollapse: true,
        dynamicTags: ['用户管理', '角色管理', '权限管理']
      }
    },
    mounted() {
      this.ToUserInfoPage();
    },
    methods: {


      collapseStatus() {
        this.collapseBtnClick = this.isCollapse;
        this.isCollapse = !this.isCollapse;
      },
      ToMainPage() {
        this.$router.push({
          path: "/index/workstash"
        })
      },
      ToUserInfoPage() {
        this.$router.push({
          path: "/index/userinfo"
        })
      },
      ToRoleInfoPage() {
        this.$router.push({
          path: "/index/roleinfo"
        })
      },
      ToNoAuth() {
        this.$router.push({
          path: "/index/Authpage"
        })
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      collapseOpen() {
        if (this.collapseBtnClick) return;
        this.isCollapse = false;
      },
      collapseClose() {
        if (this.collapseBtnClick) return;
        this.isCollapse = true;
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }

</script>

<style>
  /*.el-submenu .el-menu-item{*/
  /*  padding-left : 15px !important;*/
  /*}*/


  .main_header_p {
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

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }


  .header-left {
    float: left;
    /*margin-top: 40px;*/
    margin-left: 1px;
    margin-bottom: 1px;
    line-height: 60px;
    font-size: 14px;
    color: #FFFFFF;
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
    color: #eeeeee;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
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
    background-color: #001529;
    height: 100%;
  }

  .main_container_header {
    background-color: #001529;
    height: 62px;
  }

  .el-main {
    background-color: #f0f2f5;
    height: 100%;
  }

  /* IFRAM 主体加载 */
  .main_container_main {
    background-color: #f0f2f5;
    height: 100%;
  }

  .main_container_main_context {
    background-color: white;
    padding: 16px;
    margin-top: 45px;
    height: auto;
    overflow: hidden;
  }

  .el-tag {
    /* element-ui 元素*/
    margin-right: 10px;
    background-color: #FFFFFF;
    border: none;
    font-size: 12px;
    color: #333333;
    height: 100%;
  }

  .el-tag:hover {
    border: none;
    cursor: pointer;
    background-color: #1890ff14 !important;
    color: #1890ff;
  }

  .main_container_main_scroll {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    background-color: #FFFFFF;
    height: 45px;
  }

</style>
