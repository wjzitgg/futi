<template>
  <div class="wrapper">
    <!-- 上面部分内容 -->
    <div class="content-top">
      <div class="conttit">
        运行模式：节能
      </div>
      <div class="heng">
          <!-- 左边三框 -->
          <div class="contlf">
              <div class="run">
                <p>运行速度</p>
                <div class="runval"><span>0.8</span>米/秒</div>
              </div>
              <div class="run">
                <p>运行功率</p>
                <div class="runval"><span>1239</span>w</div>
              </div>
              <div class="run">
                <p>噪声</p>
                <div class="runval"><span>10</span>db</div>
              </div>
          </div>
          <!-- 中间图 -->
          <div class="contenimg">
            <img src="../../static/futi.jpg" alt="">
          </div>
          <!-- 右边 -->
          <div class="contlf">
              <div class="run2">
                <p>电流</p>
                <div class="electricity">1相电流<span>10A</span></div>
                <div class="electricity">2相电流<span>10A</span></div>
                <div class="electricity">3相电流<span>10A</span></div>
              </div>
              <div class="run2">
                <p>电压</p>
                <div class="electricity">1相电压<span>240V</span></div>
                <div class="electricity">2相电压<span>240V</span></div>
                <div class="electricity">3相电压<span>240V</span></div>
              </div>
             
          </div>
      </div>
    
    </div>
    <!-- 下排 -->
    <div class="botmrow">
      <!-- 1 -->
       <div class="host">
            <p>主机</p>
            <div class="hostval">
              <span class="direction">水平方向</span>
              <span class="lemp">振动</span>
              <span class="valnum">0.15</span>
            </div>
            <div class="hostval">
              <span class="direction"></span>
              <span class="lemp">温度</span>
              <span class="valnum">40.2°C</span>
            </div>
            <div class="hostval">
              <span class="direction">垂直方向</span>
              <span class="lemp">振动</span>
              <span class="valnum">0.15</span>
            </div>
            <div class="hostval">
              <span class="direction"></span>
              <span class="lemp">温度</span>
              <span class="valnum">40.2°C</span>
            </div>
            <div class="hostval">
              <span class="direction">轴向</span>
              <span class="lemp">振动</span>
              <span class="valnum">0.15</span>
            </div>
            <div class="hostval">
              <span class="direction"></span>
              <span class="lemp">温度</span>
              <span class="valnum">40.2°C</span>
            </div>
        </div>
        <!-- 2 -->
        <div>
           <div class="host" style="height: 143px; margin-bottom: 15px;">
              <p>底座</p>
              <div class="hostval">
                <span class="direction">垂直方向</span>
                <span class="lemp">振动</span>
                <span class="valnum">0.15</span>
              </div>
              <div class="hostval">
                <span class="direction"></span>
                <span class="lemp">温度</span>
                <span class="valnum">40.2°C</span>
              </div>
            </div>
           <div class="host" style="height: 143px;">
              <p>扶手带</p>
              <div class="hostval">
                <span class="direction">温度</span>
                <span class="lemp">左</span>
                <span class="valnum">40°C</span>
              </div>
              <div class="hostval">
                <span class="direction"></span>
                <span class="lemp">右</span>
                <span class="valnum">40.2°C</span>
              </div>
            </div>
        </div>
        <!-- 3 -->
      <div class="host">
            <p>主驱动轴</p>
            <div class="direction2">左轴承座</div>
            <div class="hostval">
              
              <span class="lemp">振动</span>
              <span class="valnum">0.15</span>
            </div>
            <div class="hostval">
              <span class="lemp">温度</span>
              <span class="valnum">40.2°C</span>
            </div>

            <div class="direction2" style="margin-top: 14px;">右轴承座</div>
            <div class="hostval">
              <span class="lemp">振动</span>
              <span class="valnum">0.15</span>
            </div>
            <div class="hostval">
              <span class="lemp">温度</span>
              <span class="valnum">40.2°C</span>
            </div>
           
        </div>
        <!-- 4 -->
      <div class="host">
            <p>张紧轮轴</p>
            <div class="direction2">左轴承座</div>
            <div class="hostval">
              
              <span class="lemp">振动</span>
              <span class="valnum">0.15</span>
            </div>
            <div class="hostval">
              <span class="lemp">温度</span>
              <span class="valnum">40.2°C</span>
            </div>

            <div class="direction2" style="margin-top: 14px;">右轴承座</div>
            <div class="hostval">
              <span class="lemp">振动</span>
              <span class="valnum">0.15</span>
            </div>
            <div class="hostval">
              <span class="lemp">温度</span>
              <span class="valnum">40.2°C</span>
            </div>
           
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input1:"",
        input2: "",
      };
    },
  };
</script>
<style scoped>
  .wrapper {
    padding: 40px 80px; 
  }
  .conttit{
    height: 70px;
    line-height: 70px;
    padding-left: 18px;
    font-size: 24px;
    font-weight: 800;
    color: #32385D;
  }
  .run {
    width: 248px;
    height: 78px;
    padding: 10px 18px 0;
    background: rgba(83, 90, 133, 0);
    border: 1px solid #AFB2C5;
    margin-bottom: 15px;
  }
  .run p {
    font-size: 18px;
    font-weight: 600;
    color: #10121F;
  }
  .runval {
    text-align: right;
    font-size: 16px;
    color: #32385D;
    font-weight: 600;
  }
  .runval span {
    font-size: 32px;
    color: #515FB6;
    margin-right: 10px;
    font-weight: 200;
  }
  /* 中间图 */
  .contenimg {
    /* width: 100%; */
    height: 100%;
    padding: 0 80px;
  }
  .contenimg img {
    width: 512px;
    height: 260px;
  }
  .heng {
    display: flex;
  }
  .run2 {
    width: 248PX;
    height: 123PX;
    padding: 10px 18px 0;
    background: rgba(83, 90, 133, 0);
    border: 1px solid #AFB2C5;
    margin-bottom: 15px;
  }
  .run2 p {
    font-size: 18px;
    color: #10121F;
    font-weight: 600;
  }
  .electricity {
    margin-top: 6px;
    color: #393D52;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
  }
  .electricity span {
    color: #1B1C24;
    font-weight: bold;
  }
  /* 下排 */
  .botmrow {
    display: flex;
    margin-top: 40px;
  }
  .host {
    width: 247px;
    height: 301px;
    padding: 0 10px;
    background: rgba(83, 90, 133, 0);
    border: 1px solid #AFB2C5;
    margin-right: 60px;
  }
  .host p {
    color: #10121F;
    font-size: 18px;
    font-weight: 600;
    padding: 15px 7px;
    border-bottom: 1px solid #000;
  }
  .hostval {
    font-size: 16px;
    padding: 15px 7px 0;
    display: flex;
  }
  .hostval .direction {
    font-weight: 800;
    color: #393D52;
    width: 80px;
  }
  .hostval .lemp {
    font-weight: bold;
    color: #666667;
  }
  .valnum {
    font-weight: bold;
    color: #1B1C24;
    flex: 1;
    text-align: right;
  }
  .direction2 {
    padding: 15px 7px 0;
    font-size: 16px;
    font-weight: 800;
    color: #10121F;
  }
</style>