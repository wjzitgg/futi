<template>
  <div class="header">
    <!-- 左边 -->
    <div class="logo">
      <!-- <img src="../assets/image/yx-logo.png" alt=""> -->
      扶梯监控系统
       <!-- 折叠按钮 -->
      <div class="fold-btn" @click="collapseChage">
        <i class="el-icon-menu"></i>
      </div>
    </div>
    <!-- 右边 -->
  <div class="head-right">
     <div class="btn-fullscreen" @click="handleFullScreen">
          <!-- <el-tooltip effect="dark" :content="fullscreen?`返回扶梯选择页`:`返回扶梯选择页`" placement="bottom">
              <i class="el-icon-rank"></i>
          </el-tooltip> -->
          返回扶梯选择页
      </div>
      <div class="username">{{username}}</div>
      <!-- 头像 -->
      <div class="user-avator"><img src="../../../static/avatar.jpeg"></div>
      
       <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-caret-bottom quit"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出系统登录</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
   
   

  </div>
</template>
<script>
  export default {
    data () {
      return {
        fullscreen: false,
        collapse: false,
        username:'',
      }
    },
    created () {
      this.username = localStorage.getItem('username')
    },
    methods: {
      // 全屏事件
            handleFullScreen(){
               this.$router.push('/')
            },
          //退出登录
          handleCommand(command) {
            if(command == "logout") {
              localStorage.clear();
              this.$router.push('/login')
            }
          },
           // 侧边栏折叠
          collapseChage(){
              this.collapse = !this.collapse;
              this.$emit('collapseaa', this.collapse);
          },
    }
  }
</script>
<style scoped>
  .header{
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        width: 100%;
        font-size: 22px;
        color: #fff;
  }
   .logo {
          color: #fff;
          display: flex;
          align-items: center;
      
      }
   .logo img {
          width: 60px;
          height: 60px;
        }
  .fold-btn {
        padding: 0 21px;
        cursor: pointer;
  
    }
  .username {
    font-size: 16px;
    margin-right: 10px;
  }
  .head-right {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 30px;
  }
   .user-avator {
       width:40px;
       height:40px;
       border-radius: 50%;
       overflow: hidden;
    }
   .user-avator img{
       width: 100%;
       height: 100%;
    }
    .btn-fullscreen {
      cursor: pointer;
      margin-right: 20px;
      font-size: 16px;
      color: #e58644;
    }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
    position: absolute;
    top: -16px;

  }
  .el-dropdown-menu , .el-popper {
    top: 42px !important;
  }
  
 
</style>