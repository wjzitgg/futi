<template>
  <div class="wrapper">
    <div class="tablist">
      <!-- 第一个表格 -->
      <div class="grid">
        <h6 class="tithead">主机</h6>
        <div class="minhea">水平方向：</div>
        <div class="demo-input-suffix">振动：<el-input v-model="input1" class="minimum"></el-input></div>
        <div class="demo-input-suffix">温度：<el-input v-model="input2" class="minimum"></el-input></div>
        <div class="minhea">垂直方向：</div>
        <div class="demo-input-suffix">振动：<el-input v-model="input3" class="minimum"></el-input></div>
        <div class="demo-input-suffix">温度：<el-input v-model="input4" class="minimum"></el-input></div>
        <div class="minhea">轴向：</div>
        <div class="demo-input-suffix">振动：<el-input v-model="input5" class="minimum"></el-input></div>
        <div class="demo-input-suffix">温度：<el-input v-model="input6" class="minimum"></el-input></div>
      </div>
      <!-- 第2个表格 -->
      <div class="grid">
        <h6 class="tithead">主轴动轴</h6>
        <div class="minhea">左轴承座：</div>
        <div class="demo-input-suffix">振动：<el-input v-model="input7" class="minimum"></el-input></div>
        <div class="demo-input-suffix">温度：<el-input v-model="input8" class="minimum"></el-input></div>
        <div class="minhea">右轴承座：</div>
        <div class="demo-input-suffix">振动：<el-input v-model="input9" class="minimum"></el-input></div>
        <div class="demo-input-suffix">温度：<el-input v-model="input10" class="minimum"></el-input></div>
      </div>
      <!-- 第3个表格 -->
      <div class="grid">
        <h6 class="tithead">张紧轮轴</h6>
        <div class="minhea">左轴承座：</div>
        <div class="demo-input-suffix">振动：<el-input v-model="input11" class="minimum"></el-input></div>
        <div class="demo-input-suffix">温度：<el-input v-model="input12" class="minimum"></el-input></div>
        <div class="minhea">右轴承座：</div>
        <div class="demo-input-suffix">振动：<el-input v-model="input13" class="minimum"></el-input></div>
        <div class="demo-input-suffix">温度：<el-input v-model="input14" class="minimum"></el-input></div>
      </div>
      <!-- 第4个表格 -->
      <div class="grid">
        <h6 class="tithead">底座</h6>
        <div class="minhea">垂直方向</div>
        <div class="demo-input-suffix">振动：<el-input v-model="input15" class="minimum"></el-input></div>
        <div class="demo-input-suffix">温度：<el-input v-model="input16" class="minimum"></el-input></div>
      </div>
      <!-- 第5个表格 -->
      <div class="grid">
        <h6 class="tithead">扶手带</h6>
        <div class="minhea">温度</div>
        <div class="demo-input-suffix">左：<el-input v-model="input17" class="minimum"></el-input></div>
        <div class="demo-input-suffix">右：<el-input v-model="input18" class="minimum"></el-input></div>
      </div>
      <!-- 第6个表格 -->
      <div class="grid">
        <h6 class="tithead">电参数</h6>
        <div class="demo-input-suffix">1相电流：<el-input v-model="input19" class="minimum"></el-input></div>
        <div class="demo-input-suffix">2相电流：<el-input v-model="input20" class="minimum"></el-input></div>
        <div class="demo-input-suffix">3相电流：<el-input v-model="input21" class="minimum"></el-input></div>
        <div class="demo-input-suffix">1相电流：<el-input v-model="input22" class="minimum"></el-input></div>
        <div class="demo-input-suffix">2相电流：<el-input v-model="input23" class="minimum"></el-input></div>
        <div class="demo-input-suffix">3相电流：<el-input v-model="input24" class="minimum"></el-input></div>
        <div class="demo-input-suffix">功率</div>
      </div>
      <!-- 第7个表格 -->
      <div class="grid">
        <h6 class="tithead">扶梯速度</h6>
        <div class="minhea">运行状态：</div>
        <div class="demo-input-suffix">速度：<el-input v-model="input25" class="minimum"></el-input></div>
         <div class="minhea">检修状态：</div>
        <div class="demo-input-suffix">速度：<el-input v-model="input26" class="minimum"></el-input></div>
      </div>
    </div>
     <el-button type="primary" style="margin-left: 20px;">提交设置</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input1:"",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: "",
        input7: "",
        input8: "",
        input9: "",
        input10: "",
        input11: "",
        input12: "",
        input13: "",
        input14: "",
        input15: "",
        input16: "",
        input17: "",
        input18: "",
        input19: "",
        input20: "",
        input21: "",
        input22: "",
        input23: "",
        input24: "",
        input25: "",
        input26: "",
      };
    },
  };
</script>
<style scoped>
.tablist {
  padding: 20px;
  display: flex;
}
.grid {
  border: 1px solid #ffe9e9;
   width: 180px;
   padding: 10px;
   margin-right: 20px;
}
.tithead {
 
  font-size: 16px;
}
  .minimum {
    width: 100px;
    height: 26px;
  }
  >>> .el-input__inner {
    height: 100%;
  }
  .demo-input-suffix {
    margin-bottom: 5px;
  }
  .minhea {
    font-weight: 600;
    font-size: 14px;
  }
</style>