<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    
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
    <ElImageViewer
      v-if="imageViewerVisible"
      :on-close="closeImageView"
      :url-list="srcList"
    ></ElImageViewer>
    <el-image 
      style="width: 100px; height: 100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" 
      :preview-src-list="srcList">
    </el-image>
  </div>
</template>

<script>
import { Image } from 'element-ui'
export default {
  name: 'HelloWorld',
  components: {
    ElImageViewer: Image.components.ImageViewer
  },
  data() {
    return {
      value: '',
      time: '',
      srcList: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
      imageViewerVisible: true
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
    },
    closeImageView() {
      this.imageViewerVisible = false
    }
  }
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>