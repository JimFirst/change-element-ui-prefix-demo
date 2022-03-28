<template>
  <div>
    <div>
      element-ui的组件前缀和样式前缀都被替换成gp了，请打开控制台查看。
    </div>
    <el-input v-model="value" size="normal" clearable></el-input>
    <el-button type="primary" size="default" @click="test">弹出确认框</el-button>
    <div>
      <h4>
        图标前缀不会替换
      </h4>
      <i class="el-icon-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      value: ''
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
