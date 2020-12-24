<template>
  <div class="wrapper">
    <!-- 上框 -->
    <div class="boxser">
      <div class="titles">振动分析</div>
      <div class="yipai">
          <span class="demonstration">测试点</span>
          <el-select size="small" v-model="value" placeholder="请选择" style="margin-right: 90px;">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: "",
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      };
    },
    mounted() {
      // this.getchart();
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
    padding-left: 40px;
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
    margin-top: 40px;
    height: 640px;
    padding: 40px 80px;
    border-radius: 5px;
    background-color: #fff;
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
  .history {
    background: #ecedee;
    width: 600px;
    height: 480px;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
  }
</style>