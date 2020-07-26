<template>
    <div id="TableBody">

        <!--搜索模块-->
        <el-row :gutter="15">
            <el-form ref="elForm" :model="searchData" size="medium" label-width="100px">
                <el-col :span="5">
                    <el-form-item label-width="40px" label="姓名" prop="name">
                        <el-input v-model="searchData.name" placeholder="请输入姓名" clearable :style="{width: '100%'}"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label-width="70px" label="联系方式" prop="phone">
                        <el-input v-model="searchData.phone" placeholder="请输入联系方式" clearable :style="{width: '100%'}">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label-width="70px" label="身份证" prop="idcard">
                        <el-input v-model="searchData.idcard" placeholder="请输入身份证号" clearable :style="{width: '100%'}">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label-width="70px" label="创建时间" prop="fromTo">

                        <el-date-picker
                                v-model="searchData.fromTo"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="4"><el-button type="primary" size="medium" @click="search()">搜索</el-button></el-col>
            </el-form>
        </el-row>
        <!-- 新增按钮-->
        <el-row type="flex" justify="start">
            <el-button type="primary" size="medium" @click="addClick">新增</el-button>
        </el-row>
        <!--Table模块-->
        <el-row>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="createtime" label="创建时间" :formatter="formatDate" width="170"></el-table-column>
                <el-table-column prop="name" label="姓名" width="80"></el-table-column>
                <el-table-column prop="sex" label="性别" width="80"></el-table-column>
                <el-table-column prop="age" label="年龄" width="80"></el-table-column>
                <el-table-column prop="idcard" label="身份证" width="210"></el-table-column>
                <el-table-column prop="phone" label="联系方式" width="210"></el-table-column>
                <el-table-column prop="weixinmoney" label="微信收款" width="90"></el-table-column>
                <el-table-column prop="zhifubaomoney" label="支付宝收款" width="90"></el-table-column>
                <el-table-column prop="yibaomoney" label="医保收款" width="90"></el-table-column>
                <el-table-column prop="posmoney" label="POS机收款" width="100"></el-table-column>
                <el-table-column prop="xianjinmoney" label="现金收款" width="90"></el-table-column>
                <el-table-column prop="money" label="收款总计" width="90"></el-table-column>
                <el-table-column prop="option" label="操作" width="210" v-slot="data">
                    <el-button @click="editClick(data.row)" type="text" size="small">详情</el-button>
                    <el-button @click="deleteClick(data.row)" type="text" size="small">删除</el-button>
                </el-table-column>
            </el-table>
        </el-row>
        <!--分页模块-->
        <el-row>
            <div style="float: left">
                <span style=" margin-right: 5px">费用统计：</span>
<!--                <el-button style=" margin-right: 5px"  type="primary" size="medium" @click="moneyClick">统计费用</el-button>-->
                <el-tag>微信:{{moneyList[0]}}元</el-tag>
                <el-tag>支付宝:{{moneyList[1]}}元</el-tag>
                <el-tag>医保:{{moneyList[2]}}元</el-tag>
                <el-tag>POS机:{{moneyList[3]}}元</el-tag>
                <el-tag>现金:{{moneyList[4]}}元</el-tag>
                <el-tag>总计:{{moneyList[5]}}元</el-tag>
            </div>


            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="pageSizes"
                    :page-size="pageSize"
                    layout=" prev, pager, next, jumper,sizes,total"
                    :total="total">
            </el-pagination>

        </el-row>

    </div>
</template>

<script src="./Index.js">
</script>

<style scoped>

</style>