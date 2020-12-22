<template>
  <div class="sidebar">
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      :collapse="logo"
      background-color="#545c64"
      text-color="#d0dcf3"
      router
    >
      <el-menu-item
        :index="item.menu_url"
        v-for="item in titleData"
        :key="item.index"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.power_name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
        //  侧边栏数据
        textList: [
          { power_name: "状态监控", menu_url: "monitoring" },
          { power_name: "趋势分析", menu_url: "tendency" },
          { power_name: "故障报警", menu_url: "fault" },
          { power_name: "震动分析", menu_url: "shake" },
          { power_name: "预警设置", menu_url: "setting" },
        ],
        titleData: [],
      };
    },
    props: ["logo"],
    // 计算属性 点击tags路由变化触发
    computed: {
      onRoutes() {
        // console.log('触发吗？');
        return this.$route.path.replace("/", "");
      },
    },
    created() {
      this.permissionsText();
    },
    methods: {
      // 获取侧边栏数据
      permissionsText() {
        for (let i = 0; i < this.textList.length; i++) {
          let o = this.textList[i];
          if (this.textList[i].power_name == "状态监控") {
            o.icon = "el-icon-s-platform";
          }
          if (this.textList[i].power_name == "趋势分析") {
            o.icon = "el-icon-s-marketing";
          }
          if (this.textList[i].power_name == "故障报警") {
            o.icon = "el-icon-s-opportunity";
          }
          if (this.textList[i].power_name == "震动分析") {
            o.icon = "el-icon-s-operation";
          }
          if (this.textList[i].power_name == "预警设置") {
            o.icon = "el-icon-s-tools";
          }
          this.titleData.push(o);
        }
        // console.log(this.titleData);
      },
    },
  };
</script>
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
  .el-menu-vertical-demo {
    height: 100%;
  }
  .el-menu-item {
    font-size: 16px;
  }
  .el-menu-item i {
    color: #d0dcf3;
}
</style>