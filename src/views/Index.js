import axios from 'axios'
import moment from 'moment'
import ApiPaths from '@/api/api-paths'
// import th from "element-ui/src/locale/lang/th";

export default {
    data() {
        return {
            moneyList:['0','0','0','0','0'],
            dialogVisible:false,
            currentPage:1,
            pageSizes:[10,20,50],
            pageSize:10,
            total:0,
            searchData: {
                name: undefined,
                phone: undefined,
                idcard: undefined,
                fromTo: ['',''],
            },
            tableData: [],

        }
    },
    mounted() {
        this.findUserByCondition()
        this.moneyClick()
    },
    methods: {
        search(){
            this.findUserByCondition()
            // this.moneyClick()
        },
        addClick(){
            this.$router.push({name:'details'})
        },
        editClick(data) {
            this.$router.push({name:'details',query: {id:data.id}})
        },
        deleteClick(data){
            this.$confirm('确认删除该病人信息？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                const url=ApiPaths.yayi.delete
                const user={
                    id:data.id
                }
                axios.post(url,
                    user
                ).then(response=>{
                    const result=response.data
                    if(result.code===0){
                        this.findUserByCondition()
                        this.dialogVisible=false
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }else{
                        this.$message.error(result.message);
                    }

                }).catch(()=>{
                    this.$message.error('网络异常');
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        handleSizeChange(val){
            this.pageSize=val
            this.currentPage=1
            this.findUserByCondition()

        },
        handleCurrentChange(val){
            this.currentPage=val
            this.findUserByCondition()
        },
        findUserByCondition(){
            const url=ApiPaths.yayi.find
            const condition={
                name:this.searchData.name,
                phone:this.searchData.phone,
                idcard:this.searchData.idcard,
                from:this.searchData.fromTo==null?null:this.searchData.fromTo[0],
                to:this.searchData.fromTo==null?null:this.searchData.fromTo[1],
                pageSize: this.pageSize,
                currentPage: this.currentPage
            }
            axios.post(url,
                condition
            ).then(response=>{
                const result=response.data
                if(result.code===0){
                    this.tableData=result.data
                    this.total=result.total
                    this.currentPage=result.currentPage
                    this.moneyClick()
                }else{
                    this.$message.error(result.message);
                }
            }).catch(()=>{
                this.$message.error('网络异常');
            })
        },


        formatDate:function (row, column, cellValue) {
            return moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
        },

        moneyClick(){
            const url=ApiPaths.yayi.money
            const condition={
                name:this.searchData.name,
                phone:this.searchData.phone,
                idcard:this.searchData.idcard,
                from:this.searchData.fromTo==null?null:this.searchData.fromTo[0],
                to:this.searchData.fromTo==null?null:this.searchData.fromTo[1],
                pageSize: this.pageSize,
                currentPage: this.currentPage
            }
            axios.post(url,
                condition
            ).then(response=>{
                const result=response.data
                if(result.code===0){
                    this.moneyList=result.data
                }else{
                    this.$message.error(result.message);
                }
            }).catch(()=>{
                this.$message.error('网络异常');
            })
        }

    }
}