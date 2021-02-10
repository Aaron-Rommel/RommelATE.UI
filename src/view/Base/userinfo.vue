<template>
  <div>
    <div style="margin-bottom:10px;height: 50px;">
      <el-row>
        <el-col :span="4">
          <div style="padding-right: 20px; position:relative;padding-left: 60px;font-size: 14px">
            <p style="position: absolute;left: 0;top: 0;width: 60px;line-height: 30px">
              账套：
            </p>
            <el-input placeholder="账套" size="small"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div style="padding-right: 20px; position:relative;padding-left: 60px;font-size: 14px">
            <p style="position: absolute;left: 0;top: 0;width: 60px;line-height: 30px">
              姓名：
            </p>
            <el-input placeholder="姓名" size="small"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div style="text-align: left;line-height: 30px">
            <el-button size="small" icon="el-icon-search">查询</el-button>
            <el-button size="small" icon="el-icon-refresh-left">重置</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="ele-table-tool">
      <el-button type="primary" plain size="small" icon="el-icon-plus">新建</el-button>
      <el-button type="danger" plain size="small" icon="el-icon-delete">批量删除</el-button>
      <el-button plain size="small" icon="el-icon-upload2">导出</el-button>
    </div>
    <div class="ele-table-tool-right">
      <i class="el-icon-refresh-right" style="margin-right: 5px"></i>
      <i class="el-icon-setting" style="margin-right: 5px"></i>
      <i class="el-icon-s-operation" style="margin-right: 5px"></i>
      <i class="el-icon-full-screen" style="margin-right: 5px"></i>
    </div>
    <div>
      <template>
        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
          :header-cell-style="tableHeaderColor"
        >
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            type="index"
            width="40">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="200"
            sortable>
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            sortable>
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            sortable>
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300"
            sortable>
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            sortable>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width=220>
            <template slot-scope="scope">
              <el-button type="text" @click="handleClick(scope.row)">查看</el-button>
              <span style="color:darkgray">|</span>
              <el-button type="text">编辑</el-button>
              <span style="color:darkgray">|</span>
              <el-button type="text" style="color: red">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 15, 20, 30]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="500">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    name: "userinfo",
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        // 更改表头样式
        tableHeaderColor({ row, column, rowIndex, columnIndex }) {
          if (rowIndex === 0) {
            return 'background-color: #fafafa;'
          }
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
        formInline: {
          user: '',
          region: ''
        },
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        }
      }
    },
    mounted() {
      this.ToUserInfoPage();
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClick(row) {
        console.log(row);
      },
      onSubmit() {
        console.log('submit!');
      }

    }
  }
</script>

<style>
  .ele-table-tool {
    float: left;
    border-radius: 0;
    margin-bottom: 10px;
  }

  .ele-table-tool-right {
    float: right;
    border-radius: 0;
  }

  .block
  {
    margin-top: 25px;
  }
  .el-pagination
  {
    float: right;
  }
</style>
