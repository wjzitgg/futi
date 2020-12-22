<template>

  <div class="hello">
    <div class="tit">
      扶梯监控平台
       <div class="head-right">
          <div class="btn-fullscreen" @click="handleFullScreen">
                <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                    <i class="el-icon-rank"></i>
                </el-tooltip>
            </div>
            <div class="username">{{username}}</div>
            <!-- 头像 -->
            <div class="user-avator"><img src="../../static/avatar.jpeg"></div>
            
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
    <div class="xuanzhe">
       <span class="fuuti">扶梯选择：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.name"
            :value="item.id">
              <span style="float: left">{{ item.num }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.name }}</span>
          </el-option>
        </el-select>
        <el-button type="primary" @click="queren">确认</el-button>
    </div>
    <div class="ditupng">
      <img src="../../static/zuobiao.png" alt="">
    </div>
  </div>
</template>

<script>
export default { 
  data() {
      return {
        options: [{
            "id": "10001",
            "code": "1000",
            "num": "A梯",
            "name": "越秀测试 A梯",
            "ROW_NUMBER": "1"
        },
        {
            "id": "10002",
            "code": "1001",
            "num": "B梯",
            "name": "广百新一城-扶梯",
            "ROW_NUMBER": "2"
        },
        {
            "id": "10003",
            "code": "1002",
            "num": "C梯",
            "name": "海珠·合生生活天地-扶梯",
            "ROW_NUMBER": "3"
        }],
        value: '',
        fullscreen: false,
        collapse: false,
        username:'',
      }
    },
     created () {
      this.username = localStorage.getItem('username')
    },
    methods: {
      // 确认选择扶梯
      queren() {
        console.log(this.value);
        localStorage.setItem("futiID",this.value)
        this.$router.push('welcome')
      },
       // 全屏事件
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            },
          //退出登录
          handleCommand(command) {
            if(command == "logout") {
              localStorage.clear();
              this.$router.push('/login')
            }
          },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fuuti {
      color: #fff;
    }
  .hello{
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, #414c77, #7682ad);
  }
  .xuanzhe {
    padding: 120px 0;
    text-align: center;
  }
  .tit {
    font-size: 20px;
    font-weight: 600;
    padding: 20px;
    text-align: center;
    background-color: #32385d;
    color: #fff;
  }
  .ditupng {
    text-align: center;
    margin: 0 auto;
    width: 1000px;
    height: 573px;
  }
  .ditupng img {
    width: 80%;
    height: 80%;
  }
    /* 头像右边 */
  .head-right {
    display: flex;
    align-items: center;
    position: absolute;
    right: 40px;
    top: 20px;
  }

       /* 头像 */
   .user-avator {
       width:40px;
       height:40px;
       border-radius: 50%;
       overflow: hidden;
    }
   .username {
     margin-right: 10px;
   }
   .user-avator img{
       width: 100%;
       height: 100%;
    }
   .btn-fullscreen {
        cursor: pointer;
        margin-right: 20px;
        font-size: 26px;
    }
    /* 头像箭头 */
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
    position: absolute;
    top: 4px;

  }
  .el-dropdown-menu , .el-popper {
    top: 42px !important;
  }
</style>
