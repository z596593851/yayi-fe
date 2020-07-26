import axios from 'axios'
// import moment from 'moment'
import ApiPaths from '@/api/api-paths'
// import {relativeTimeRounding} from "moment";
export default {
    components: {},
    props: [],
    data() {
        var moneyCheck = (rule, value, callback) => {

            if (value!=value.replace(/[^\d.]/g,' ')) {
                callback(new Error('只能输入数字或小数'));
            }
            callback();

        };

        // var moneyCheck = (rule, value, callback) => {
        //     if (value === ''||value===undefined) {
        //         callback(new Error('请输入收款数'));
        //     } else {
        //         if (value!=value.replace(/[^\d.]/g,' ')) {
        //             callback(new Error('只能输入数字或小数'));;
        //         }
        //         callback();
        //     }
        // };

        return {
            showFormData: {
                id:undefined,
                name: undefined,
                sex: '男',
                age: '',
                job: undefined,
                address: undefined,
                idcard: undefined,
                phone: undefined,
                zhenduan:undefined,
                zhuanzhenyiyuan:undefined,
                chuli:undefined,
                jiezhenyisheng:undefined,
                zhiliaoxiangmu:undefined,
                shukoushui:undefined,
                yashua:undefined,
                diandongyashua:undefined,
                yapian:[],
                weixinmoney:'0',
                zhifubaomoney:'0',
                yibaomoney:'0',
                posmoney:'0',
                xianjinmoney:'0',
                money:'0',
                beizhu:undefined,
                zhusu: undefined,
                xianbingshi:undefined,
                jiuzhen:[],
                jiwangshi:[],
                jiazushi:undefined,
                quhuai: [],
                tengtong: [],
                linyaganran: '无',
                songdong: [],
                fuzhuosangshi: '无',
                tiwen:undefined,
                other1: undefined,
                zhiliaojihua:undefined,
                zunyizhu: '否',
                qitazhiliao: undefined,
                fuzhen1: '否',
                fuzhen2: '否',
                other2: undefined,
                huanyao: [],
                buya: [],
                xianwei: [],
                jinshu: [],
                xiufu:[],
                zhongzhi:[]
            },

            rules: {
                name: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }],
                weixinmoney: [{
                    validator:moneyCheck,
                    trigger: 'blur'
                }],
                zhifubaomoney: [{
                    validator:moneyCheck,
                    trigger: 'blur'
                }],
                yibaomoney: [{
                    validator:moneyCheck,
                    trigger: 'blur'
                }],
                posmoney: [{
                    validator:moneyCheck,
                    trigger: 'blur'
                }],
                xianjinmoney: [{
                    validator:moneyCheck,
                    trigger: 'blur'
                }],
                sex: [{
                    required: true,
                    message: '性别不能为空',
                    trigger: 'change'
                }],
                age: [{
                    required: true,
                    message: '年龄不能为空',
                }],


            },
            sexOptions: [{
                "label": "男",
                "value": "男"
            }, {
                "label": "女",
                "value": "女"
            }],
            yapianOptions: [{
                "label": "小",
                "value": "小"
            }, {
                "label": "大",
                "value": "大"
            }],

            jiuzhenOptions: [{
                "label": "夜间痛",
                "value": "夜间痛"
            }, {
                "label": "咬合痛",
                "value": "咬合痛"
            }, {
                "label": "冷热痛",
                "value": "冷热痛"
            }, {
                "label": "间接性疼痛",
                "value": "间接性疼痛"
            },{
                "label": "牙龈肿痛",
                "value": "牙龈肿痛"
            },{
                "label": "叩痛",
                "value": "叩痛"
            },{
                "label": "牙龈出血",
                "value": "牙龈出血"
            },{
                "label": "牙冠折断",
                "value": "牙冠折断"
            }],
            jiwangshiOptions: [{
                "label": "高血压",
                "value": "高血压"
            }, {
                "label": "糖尿病",
                "value": "糖尿病"
            }, {
                "label": "血液病",
                "value": "血液病"
            }, {
                "label": "肾病",
                "value": "肾病"
            }, {
                "label": "心脏病",
                "value": "心脏病"
            }, {
                "label": "月经期",
                "value": "月经期"
            }, {
                "label": "脑梗",
                "value": "脑梗"
            }, {
                "label": "白血病",
                "value": "白血病"
            }, {
                "label": "艾滋病",
                "value": "艾滋病"
            }, {
                "label": "孕妇",
                "value": "孕妇"
            }, {
                "label": "癌症",
                "value": "癌症"
            }, {
                "label": "乙肝",
                "value": "乙肝"
            }],
            quhuaiOptions: [{
                "label": "远",
                "value": "远"
            }, {
                "label": "近",
                "value": "近"
            }, {
                "label": "合",
                "value": "合"
            }],
            tengtongOptions: [{
                "label": "+",
                "value": "+"
            }, {
                "label": "++",
                "value": "++"
            }, {
                "label": "+++",
                "value": "+++"
            }],
            linyaganranOptions: [{
                "label": "无",
                "value": "无"
            }, {
                "label": "有",
                "value": "有"
            }],
            songdongOptions: [{
                "label": "I°",
                "value": "I°"
            }, {
                "label": "II°",
                "value": "II°"
            }, {
                "label": "III°",
                "value": "III°"
            }],
            fuzhuosangshiOptions: [{
                "label": "无",
                "value": "无"
            }, {
                "label": "有",
                "value": "有"
            }],


            zunyizhuOptions: [{
                "label": "否",
                "value": "否"
            }, {
                "label": "是",
                "value": "是"
            }],
            fuzhen1Options: [{
                "label": "否",
                "value": "否"
            }, {
                "label": "是",
                "value": "是"
            }],
            fuzhen2Options: [{
                "label": "否",
                "value": "否"
            }, {
                "label": "是",
                "value": "是"
            }],
            huanyaoOptions: [{
                "label": "丁香油引流",
                "value": "丁香油引流"
            }, {
                "label": "fc引流",
                "value": "fc引流"
            }, {
                "label": "cp引流",
                "value": "cp引流"
            }, {
                "label": "封fc",
                "value": "封fc"
            }, {
                "label": "封ca(oh)2",
                "value": "封ca(oh)2"
            }, {
                "label": "瘘管处理",
                "value": "瘘管处理"
            }, {
                "label": "拔除",
                "value": "拔除"
            }],
            buyaOptions: [{
                "label": "玻璃离子",
                "value": "玻璃离子"
            }, {
                "label": "3m250",
                "value": "3m250"
            }, {
                "label": "3m350",
                "value": "3m350"
            }, {
                "label": "卡瑞斯玛",
                "value": "卡瑞斯玛"
            }, {
                "label": "贺利氏",
                "value": "贺利氏"
            }, {
                "label": "义获嘉",
                "value": "义获嘉"
            }, {
                "label": "梅卡",
                "value": "梅卡"
            }],
            xianweiOptions: [{
                "label": "1枚",
                "value": "1枚"
            }, {
                "label": "2枚",
                "value": "2枚"
            }, {
                "label": "3枚",
                "value": "3枚"
            }, {
                "label": "4枚",
                "value": "4枚"
            }],
            jinshuOptions: [{
                "label": "1枚",
                "value": "1枚"
            }, {
                "label": "2枚",
                "value": "2枚"
            }, {
                "label": "3枚",
                "value": "3枚"
            }, {
                "label": "4枚",
                "value": "4枚"
            }],
            xiufuOptions: [{
                "label": "钴铬支架",
                "value": "钴铬支架"
            }, {
                "label": "纯钛支架",
                "value": "纯钛支架"
            }, {
                "label": "Hpp",
                "value": "Hpp"
            }, {
                "label": "吸附性义齿",
                "value": "吸附性义齿"
            }, {
                "label": "隐形牙",
                "value": "隐形牙"
            }],
            zhongzhiOptions: [{
                "label": "植是道",
                "value": "植是道"
            }, {
                "label": "奥齿泰",
                "value": "奥齿泰"
            }, {
                "label": "皓圣",
                "value": "皓圣"
            }],

        }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        this.findPatientById()
    },
    methods: {
        isEmpty(obj){
            if( obj === undefined || obj === null || obj === "" || obj==='' || obj===' ' || obj===" "){
                return true;
            }else{
                return false;
            }
        },
        onSubmit(showForm){
            this.$refs[showForm].validate((valid) => {
                if (valid) {
                    this.showFormData.xianjinmoney=this.isEmpty(this.showFormData.xianjinmoney)?"0":this.showFormData.xianjinmoney
                    this.showFormData.weixinmoney=this.isEmpty(this.showFormData.weixinmoney)?"0":this.showFormData.weixinmoney
                    this.showFormData.zhifubaomoney=this.isEmpty(this.showFormData.zhifubaomoney)?"0":this.showFormData.zhifubaomoney
                    this.showFormData.yibaomoney=this.isEmpty(this.showFormData.yibaomoney)?"0":this.showFormData.yibaomoney
                    this.showFormData.posmoney=this.isEmpty(this.showFormData.posmoney)?"0":this.showFormData.posmoney
                    this.showFormData.money=(parseFloat(this.showFormData.weixinmoney)+parseFloat(this.showFormData.zhifubaomoney)+parseFloat(this.showFormData.yibaomoney)+parseFloat(this.showFormData.posmoney)+parseFloat(this.showFormData.xianjinmoney)).toFixed(1)
                    // this.showFormData.money=this.showFormData.xianjinmoney+ this.showFormData.weixinmoney+this.showFormData.zhifubaomoney+this.showFormData.shuakamoney

                    this.save()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        onCancel(){
            this.$router.push({name:'index'})
        },
        findPatientById(){
            if(this.$route.query.id!=null){
                const url=ApiPaths.yayi.find
                const condition={
                    id:this.$route.query.id
                }
                axios.post(url,
                    condition
                ).then(response=>{
                    const result=response.data
                    if(result.code===0){
                        this.showFormData=result.data
                    }else{
                        this.$message.error(result.message);
                    }
                }).catch(()=>{
                    this.$message.error('网络异常');
                })
            }

        },
        save(){
            const url=ApiPaths.yayi.save
            axios.post(url,
                this.showFormData
            ).then(response=>{
                const result=response.data
                if(result.code===0){
                    this.$message({
                        type: 'success',
                        message: '保存成功!'
                    });
                    this.$router.push({name:'index'})
                }else{
                    this.$message.error(result.message);
                }
            }).catch(()=>{
                this.$message.error('网络异常');
            })
        },
    }
}