<template>
  <div class="wrapper">
    <!-- 搜索框 -->
    <div class="boxser">
      <div class="titles">故障历史</div>
      <div class="yipai">
        <el-checkbox-group v-model="checkedCities1" :min="0" :max="4">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group>
        <!-- 日期 -->
        <div class="block">
          <span class="demonstration">时间范围</span>
          <el-date-picker
            size="small"
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </div>
        <el-button class="btnqr" type="info">确认</el-button>
      </div>
    </div>
    <!-- 折线图和历史数据 -->
    <div class="datum">
      <!-- 柱形图 -->
      <div class="histogram">
        <p class="report">故障历史报告</p>
        <div
          id="main"
          style="
            width: 600px;
            height: 480px;
            margin: 0 auto;
            background: #f3f3f3;
          "
        ></div>
      </div>
      <!-- 历史记录 -->
      <div class="histogram">
        <p class="report">故障告警信息</p>
        <div class="history" style="background: #ecedee;">
          <el-table :data="tableData" max-height="480" :cell-style="{background:'#ecedee',color:'#000'}" :header-cell-style="{background:'#484B5D',color:'#fff'}" >
            <el-table-column prop="id" label="序号" width="80">
            </el-table-column>
            <el-table-column prop="name" label="方位" width="100">
            </el-table-column>
            <el-table-column prop="date" label="日期" width="130">
            </el-table-column>
            <el-table-column prop="address" label="故障">
            </el-table-column>
            <el-table-column prop="overhaul" label="状态" width="80"> </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  const cityOptions = ["扶手带过温", "电机振动异常", "速度异常", "停电"];
  export default {
    data() {
      return {
        checkedCities1: ["扶手带过温"],
        cities: cityOptions,
        value1: "",
         tableData: [{
          id:1,
          date: '2016-05-03',
          name: '底座',
          address: '底座松动',
          overhaul: '检修',
        }, {
          id:2,
          date: '2016-05-03',
          name: '驱动轴',
          address: '轴承滚动体故障',
          overhaul: '检修',
        }, {
          id:3,
          date: '2016-05-03',
          name: '梯级链',
          address: '链条磨损',
          overhaul: '检修',
        }, {
          id:4,
          date: '2016-05-03',
          name: '扶手带',
          address: '扶手温度过高',
          overhaul: '检修',
        }, {
          id:5,
          date: '2016-05-03',
          name: '电机',
          address: '电机振动异常',
          overhaul: '检修',
        }, {
          id:6,
          date: '2016-05-03',
          name: '停电',
          address: '底座松动',
          overhaul: '检修',
        }, {
          id:7,
          date: '2016-05-03',
          name: '底座',
          address: '底座松动',
          overhaul: '检修',
        }],
        option: {
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: ["扶手带过温", "电机振动异常", "速度异常", "停电"],
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              // data: [10, 20, 33, 40],
            },
          ],
          series: [
            {
              name: "数值",
              type: "bar",
              barWidth: "60%",
              data: [20, 30, 16, 24],
            },
          ],
        },
      };
    },
    mounted() {
      this.getchart();
    },
    methods: {
      // 获取折线图数据
      getchart() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById("main"));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.option);
      },
    },
  };
</script>
<style scoped>
  .wrapper {
    padding: 60px 80px;
  }
  /* 上 */
  .boxser {
    /* width: 1560px; */
    height: 134px;
    padding: 22px 38px;
    border-radius: 5px;
    background-color: #fff;
    
  }
  .boxser .titles {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 18px;
  }
  .yipai {
    display: flex;
    align-items: center;
  }
  /* .block {
    width: 50%;
  } */
  .el-checkbox-group {
    width: 50%;
  }
  >>> .el-checkbox__label {
    color: #000000;
    font-size: 16px;
    font-weight: 500;
  }
  .demonstration {
    font-size: 16px;
    font-weight: 600;
    color: #000;
    margin-right: 36px;
  }
  .btnqr {
    width: 130px;
    height: 34px;
    font-size: 16px;
    background-color: #515fb6;
    margin-left: 30px;
    line-height: 9px;
    letter-spacing: 6px;
  }
  /* 下排 */
  .datum {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
  /* 折线图 */
  .histogram {
    width: 760px;
    height: 600px;
    background: #fff;
    padding: 40px 23px;
    border-radius: 5px;
  }
  .report {
    font-size: 18px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 20px;
  }
  /* 历史记录 */
  .history{
    background: #ecedee;
    width: 600px;
    height: 480px;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
  }
</style>