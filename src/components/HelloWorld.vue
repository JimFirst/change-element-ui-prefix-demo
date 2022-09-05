<template>
  <div>
    <div>
      element-ui的组件前缀和样式前缀都被替换成gp了，请打开控制台查看。
    </div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="0">
        col-12
      </el-col>
      <el-col :span="8" :offset="0">
        col-8
      </el-col>
    </el-row>
    <el-input v-model="value" size="normal" clearable></el-input>
    <el-button type="primary" size="default" @click="test">弹出确认框</el-button>
    <div>
      <h4>
        图标前缀不会替换
      </h4>
      <i class="el-icon-plus"></i>
    </div>
    <el-date-picker
      v-model="time"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      value: '',
      time: ''
    }
  },
  methods: {
    test() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    }
  }
}
</script>
