<template>
  <div class="contain">
    <el-row :gutter="15">
      <el-form ref="showForm" :model="showFormData" :rules="rules" size="medium" label-width="100px"
        label-position="left">

        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span style="float: left">登记</span>
          </div>

          <el-form-item label="姓名：" prop="name">
            <el-input v-model="showFormData.name" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="性别：" prop="sex">
            <el-radio-group v-model="showFormData.sex" size="medium">
              <el-radio v-for="(item, index) in sexOptions" :key="index" :label="item.value"
                        :disabled="item.disabled">{{item.label}}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年龄：" prop="age">
            <el-input v-model="showFormData.age" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="职业：" prop="job">
            <el-input v-model="showFormData.job" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="住址：" prop="address">
            <el-input v-model="showFormData.address" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="身份证：" prop="idcard">
            <el-input v-model="showFormData.idcard" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="联系方式：" prop="phone">
            <el-input v-model="showFormData.phone" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>

          <el-form-item label="诊断：" prop="zhenduan">
            <el-input v-model="showFormData.zhenduan" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="转诊医院：" prop="zhuanzhenyiyuan">
            <el-input v-model="showFormData.zhuanzhenyiyuan" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="处理：" prop="chuli">
            <el-input v-model="showFormData.chuli" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="接诊医生：" prop="jiezhenyisheng">
            <el-input v-model="showFormData.jiezhenyisheng" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="治疗项目：" prop="zhiliaoxiangmu">
            <el-input v-model="showFormData.zhiliaoxiangmu" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="漱口水：" prop="shukoushui">
            <el-input v-model="showFormData.shukoushui" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="牙刷：" prop="yashua">
            <el-input v-model="showFormData.yashua" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="电动牙刷：" prop="diandongyashua">
            <el-input v-model="showFormData.diandongyashua" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="牙片：" prop="yapian">
            <el-checkbox-group v-model="showFormData.yapian" size="medium">
              <el-checkbox v-for="(item, index) in yapianOptions" :key="index" :label="item.value"
                           :disabled="item.disabled">{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>


          <el-row>
            <el-col :span="6">
              <el-form-item label="微信收款：" prop="weixinmoney">
                <el-input v-model="showFormData.weixinmoney" placeholder="微信" clearable
                          :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="支付宝收款：" prop="zhifubaomoney">
                <el-input v-model="showFormData.zhifubaomoney" placeholder="支付宝" clearable
                          :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="医保刷卡" prop="yibaomoney">
                <el-input v-model="showFormData.yibaomoney" placeholder="医保" clearable
                          :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="POS机刷卡：" prop="posmoney">
                <el-input v-model="showFormData.posmoney" placeholder="POS机" clearable
                          :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="现金收款：" prop="xianjinmoney">
                <el-input v-model="showFormData.xianjinmoney" placeholder="现金" clearable
                          :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="备注：" prop="beizhu">
<!--            <el-input v-model="showFormData.diandongyashua" clearable :style="{width: '100%'}">-->
<!--            </el-input>-->
            <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="showFormData.beizhu">
            </el-input>
          </el-form-item>
        </el-card>

          <el-card shadow="never">
<!--            <div slot="header" class="clearfix">-->
<!--              <span style="float: left">登记</span>-->
<!--            </div>-->
          <el-form-item label="主诉：" prop="zhusu">
            <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="showFormData.zhusu">
            </el-input>
          </el-form-item>
          <el-form-item label="现病史：" prop="xianbingshi">
<!--            <el-input placeholder="请输入内容" v-model="showFormData.xianbingshi">-->
<!--              <template slot="prepend">牙痛天数：</template>-->
<!--            </el-input>-->
            <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="showFormData.xianbingshi">
            </el-input>
          </el-form-item>
          <el-form-item label="就诊：" prop="jiuzhen">
            <el-checkbox-group v-model="showFormData.jiuzhen" size="medium">
              <el-checkbox v-for="(item, index) in jiuzhenOptions" :key="index" :label="item.value"
                           :disabled="item.disabled">{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="既往史：" prop="jiwangshi">
            <el-checkbox-group v-model="showFormData.jiwangshi" size="medium">
              <el-checkbox v-for="(item, index) in jiwangshiOptions" :key="index" :label="item.value"
                           :disabled="item.disabled">{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="家族史：" prop="jiazushi">
            <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="showFormData.jiazushi">
            </el-input>
          </el-form-item>
        </el-card>

        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span style="float: left">体检</span>
          </div>
          <el-col :span="13">
            <el-form-item label="龋坏：" prop="quhuai">
              <el-checkbox-group v-model="showFormData.quhuai" size="medium">
                <el-checkbox v-for="(item, index) in quhuaiOptions" :key="index" :label="item.value"
                  :disabled="item.disabled">{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="疼痛：" prop="tengtong">
              <el-checkbox-group v-model="showFormData.tengtong" size="medium">
                <el-checkbox v-for="(item, index) in tengtongOptions" :key="index" :label="item.value"
                  :disabled="item.disabled">{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="邻牙感染：" prop="linyaganran">
              <el-radio-group v-model="showFormData.linyaganran" size="medium">
                <el-radio v-for="(item, index) in linyaganranOptions" :key="index" :label="item.value"
                  :disabled="item.disabled">{{item.label}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="松动：" prop="songdong">
              <el-checkbox-group v-model="showFormData.songdong" size="medium">
                <el-checkbox v-for="(item, index) in songdongOptions" :key="index" :label="item.value"
                  :disabled="item.disabled">{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

          <el-col :span="13">
            <el-form-item label="附着丧失：" prop="fuzhuosangshi">
              <el-radio-group v-model="showFormData.fuzhuosangshi" size="medium">
                <el-radio v-for="(item, index) in fuzhuosangshiOptions" :key="index" :label="item.value"
                  :disabled="item.disabled">{{item.label}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="体温：" prop="tiwen">
              <el-input v-model="showFormData.tiwen" clearable :style="{width: '100%'}">
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="其他：" prop="other1">
<!--              <el-input v-model="showFormData.other1" placeholder="请输入其他：" clearable :style="{width: '100%'}">-->
<!--              </el-input>-->
              <el-input
                      type="textarea"
                      :rows="4"
                      placeholder="请输入内容"
                      v-model="showFormData.other1">
              </el-input>
            </el-form-item>
          </el-col>
        </el-card>


        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span style="float: left">治疗计划</span>
          </div>
          <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="showFormData.jihuazhiliao">
          </el-input>

        </el-card>


        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span style="float: left">处置</span>
          </div>
          <el-row>
            <el-col :span="13">
              <el-form-item label="遵医嘱：" prop="zunyizhu">
                <el-radio-group v-model="showFormData.zunyizhu" size="medium">
                  <el-radio v-for="(item, index) in zunyizhuOptions" :key="index" :label="item.value"
                    :disabled="item.disabled">{{item.label}}</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label-width="150px" label="其他牙齿需要治疗：" prop="qitazhiliao">
                <el-input
                        type="textarea"
                        :rows="4"
                        placeholder="请输入内容"
                        v-model="showFormData.qitazhiliao">
                </el-input>
              </el-form-item>

            </el-col>
            <el-col :span="13">
              <el-form-item label-width="160px" label="患者要求复诊再治疗：" prop="fuzhen1">
                <el-radio-group v-model="showFormData.fuzhen1" size="medium">
                  <el-radio v-for="(item, index) in fuzhen1Options" :key="index" :label="item.value"
                    :disabled="item.disabled">{{item.label}}</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label-width="160px" label="要求复诊：" prop="fuzhen2">
                <el-radio-group v-model="showFormData.fuzhen2" size="medium">
                  <el-radio v-for="(item, index) in fuzhen2Options" :key="index" :label="item.value"
                            :disabled="item.disabled">{{item.label}}</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="其他：" prop="other2">
<!--                <el-input v-model="showFormData.other2" clearable-->
<!--                  :style="{width: '100%'}">-->
<!--                </el-input>-->
                <el-input
                        type="textarea"
                        :rows="4"
                        placeholder="请输入内容"
                        v-model="showFormData.other2">
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="换药：" prop="huanyao">
                <el-checkbox-group v-model="showFormData.huanyao" size="medium">
                  <el-checkbox v-for="(item, index) in huanyaoOptions" :key="index" :label="item.value"
                    :disabled="item.disabled">{{item.label}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="补牙：" prop="buya">
                <el-checkbox-group v-model="showFormData.buya" size="medium">
                  <el-checkbox v-for="(item, index) in buyaOptions" :key="index" :label="item.value"
                    :disabled="item.disabled">{{item.label}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>

            <el-col :span="16">
              <el-form-item label-width="110px" label="纤维桩植入：" prop="xianwei">
                <el-checkbox-group v-model="showFormData.xianwei" size="medium">
                  <el-checkbox v-for="(item, index) in xianweiOptions" :key="index" :label="item.value"
                    :disabled="item.disabled">{{item.label}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>

            <el-col :span="16">
              <el-form-item label-width="110px" label="金属桩植入：" prop="jinshu">
                <el-checkbox-group v-model="showFormData.jinshu" size="medium">
                  <el-checkbox v-for="(item, index) in jinshuOptions" :key="index" :label="item.value"
                    :disabled="item.disabled">{{item.label}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>

            <el-col :span="20">
              <el-form-item label-width="110px" label="修复：" prop="xiufu">
                <el-checkbox-group v-model="showFormData.xiufu" size="medium">
                  <el-checkbox v-for="(item, index) in xiufuOptions" :key="index" :label="item.value"
                               :disabled="item.disabled">{{item.label}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>

            <el-col :span="16">
              <el-form-item label-width="110px" label="种植：" prop="zhongzhi">
                <el-checkbox-group v-model="showFormData.zhongzhi" size="medium">
                  <el-checkbox v-for="(item, index) in zhongzhiOptions" :key="index" :label="item.value"
                               :disabled="item.disabled">{{item.label}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>



        <el-form-item>
          <el-button @click="onCancel">返回</el-button>
          <el-button type="primary" @click="onSubmit('showForm')">确定</el-button>
        </el-form-item>

      </el-form>

    </el-row>
  </div>
</template>
<script src="./Details.js">


</script>
<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .contain{
    padding-right: 600px;
    padding-left: 200px;
  }
  .el-card{
    margin-bottom: 20px;
  }
</style>
