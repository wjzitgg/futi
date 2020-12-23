<template>
  <div class="wrapper">
    <!-- 上表单 -->
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="参数" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择参数">
          <el-option label="振动" value="1"></el-option>
          <el-option label="振动点温度" value="2"></el-option>
          <el-option label="扶手带温度" value="3"></el-option>
          <el-option label="速度" value="4"></el-option>
          <el-option label="噪声" value="5"></el-option>
          <el-option label="电参数" value="6"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              v-model="ruleForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确认</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 趋势图 -->
    <div class="run-chart">
      <h6>趋势图</h6>
      <div id="main" style="width: 1100px; height: 500px"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          region: "",
          date1: "",
          delivery: false,
        },
        rules: {
          region: [
            { required: true, message: "请选择参数类型", trigger: "change" },
          ],
          date1: [
            {
              type: "date",
              required: true,
              message: "请选择日期时间",
              trigger: "change",
            },
          ],
        },
        // 折线图
        option: {
        //  线上提示
          tooltip: {
            trigger: "axis",
          },
          // legend: {
          //   data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
          // },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
         
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["10", "11", "12", "13", "14", "15", "16","17", "18", "19","20","21","22", "23", "24","25","26","27", "28", "29","30"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "测试1",
              type: "line",
              stack: "总量",
              data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,330, 410, 520, 620, 720, 523, 460],
            },
            {
              name: "测试2",
              type: "line",
              stack: "总量",
              data: [220, 182, 191, 234, 290, 330, 310,120, 132, 101, 134, 90, 230, 210,330, 410,520, 620, 720, 523, 460],
            },
            {
              name: "测试3",
              type: "line",
              stack: "总量",
              data: [150, 232, 201, 154, 190, 330, 410,120, 132, 101, 134, 90, 230, 210,330, 410,120, 132, 330, 410,120],
            },
            {
              name: "测试4",
              type: "line",
              stack: "总量",
              data: [320, 332, 301, 334, 390, 330, 320,120, 132, 101, 134, 90, 230, 210,330, 410,120, 132, 330, 410,120],
            },
            {
              name: "测试5",
              type: "line",
              stack: "总量",
              data: [820, 932, 901, 934, 1290, 1330, 1320, 310,120, 132, 101, 134, 90, 230, 210,330, 410,120, 502,820, 932, 901, 934,],
            },
          ],
        },

      };
    },
     mounted() {
        this.getchart();
      },
    methods: {
      // 确认按钮
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(valid);
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
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
    padding: 40px 120px;
  }
  .dateline {
    color: #10121f;
    font-size: 20px;
    font-weight: 600;
  }
  .test {
    display: flex;
  }
  .test span {
    display: flex;
  }
  >>> .el-date-editor .el-range-separator {
    width: 10%;
  }
  /* 趋势图 */
  #main {
    background-color: #f3f3f3;
  }
  .run-chart {
    margin-top: 80px;
  }
  .run-chart h6 {
    width: 1100px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 20px;
    color: #10121f;
  }
  >>> .el-form-item__label {
    font-size: 20px;
    font-weight: 600;
    width: 120px;
  }
 .el-button--primary {
  width: 180px;   
}
</style>