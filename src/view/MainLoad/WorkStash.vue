<template>
  <div>
    <div>
      <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div class="text item">
              <div class="top-card-left">
                <p>
                  <span class="top-card-left_image">
                  <img src="../../assets/logo.png"/>
                </span>
                  <span>早安，管理员，开始您一天的工作吧！</span>
                </p>
                <p class="top-card-left_weath">
                  <span>
                         <i class="el-icon-cloudy"></i>
                  </span>
                  今日多云转阴，18℃ - 22℃，出门记得穿外套哦~
                </p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row style="margin-top: 15px">
        <el-col :span="6" style="padding-left: 8px; padding-right: 8px;">
          <el-card class="box-card">
            <div class="text item">
              <div>
                <p>
                  <span>待办</span>
                </p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" style="padding-left: 8px; padding-right: 8px;">
          <el-card class="box-card">
            <div class="text item">
              <div>
                <p>
                  <span>已办</span>
                </p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" style="padding-left: 8px; padding-right: 8px;">
          <el-card class="box-card">
            <div class="text item">
              <div>
                <p>
                  <span>消息</span>
                </p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" style="padding-left: 8px; padding-right: 8px;">
          <el-card class="box-card">
            <div class="text item">
              <div>
                <p>
                  <span>消息2</span>
                </p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row style="margin-top: 15px">
        <el-col :span="8" style="padding-left: 8px; padding-right: 8px;">
          <el-card class="box-card" >
            <div slot="header" class="clearfix">
              <span class="second-row-card">最新动态</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>

        </el-col>
        <el-col :span="8" style="padding-left: 8px; padding-right: 8px;">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="second-row-card">我的任务</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="8"  style="padding-left: 8px; padding-right: 8px;">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="second-row-card">本月目标</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row style="margin-top: 15px">
        <el-col :span="12" style="padding-left: 8px; padding-right: 8px;">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="second-row-card">本月目标</span>
            </div>
            <div>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12" style="padding-left: 8px; padding-right: 8px;">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="second-row-card">本月目标</span>
            </div>
            <div>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  export default {
    name: "WorkStash"
  }
</script>

<style>
  .second-row-card
  {
    float: left;
    font-size: 16px;
    line-height: 10px;
  }
  .top-card-left {
    float: left;
    margin-bottom: 20px;
  }

  .top-card-left img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .top-card-left_image {

    display: inline-block;
    margin-bottom: 15px;
    width: 35px;
    height: 35px;
    background-color: #eeeeee;
    border-radius: 100%;
    line-height: 40px;
    text-align: center;
  }

  .top-card-left_weath {
    font-size: 10px;
    color: darkgrey;
  }

</style>
