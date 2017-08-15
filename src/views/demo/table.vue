<template>
    <div>
    <TableExt size="small" ref="table" :url="url" border  :columns="columns"  pagination  :queryParams="searchData">
        <div slot="header" >
            <Row>
                <i-col span="12">
                    <i-button type="primary" icon="ios-plus-empty" @click="handleSubmit('table')">登录</i-button>
                    <i-button type="ghost" @click="reset">重置</i-button>
                    <i-button type="error" @click="delChecked">删除</i-button>
                </i-col>
                <i-col span="12">
                    <Row type="flex" justify="end">
                        <i-col >
                            <i-form class="search-form">
                                <Form-item >
                            <Input v-model="dataValue" @on-enter="handleSubmit('table')">
                            <Select v-model="dataKey" slot="prepend" style="width: 80px">
                                <Option value="module">业务模块</Option>
                                <Option value="operator">操作</Option>
                            </Select>
                            </Input>
                                </Form-item>
                            </i-form>
                        </i-col>
                        <i-col span="1">

                        </i-col>
                    </Row>
                </i-col>
            </Row>
            <!--<i-form ref="searchData" :model="searchData" :label-width="80"  inline>-->
                <!--<Form-item prop="like_name" label="用户名">-->
                    <!--<i-input type="text" v-model="searchData.name" placeholder="Username" @on-enter="handleSubmit('table')">-->
                    <!--</i-input>-->
                <!--</Form-item>-->
                <!--<Form-item prop="password">-->
                    <!--<i-input type="password" v-model="searchData.password" placeholder="Password">-->
                    <!--</i-input>-->
                <!--</Form-item>-->
                <!--<Form-item prop="cs">-->
                    <!--<i-input type="password" v-model="searchData.cs" placeholder="cs">-->
                    <!--</i-input>-->
                <!--</Form-item>-->
                <!--<Form-item>-->
                    <!--<i-button type="primary" @click="handleSubmit('table')">登录</i-button>-->
                    <!--<i-button type="ghost" @click="reset">重置</i-button>-->
                    <!--<i-button type="error" @click="delChecked">删除</i-button>-->
                <!--</Form-item>-->
            <!--</i-form>-->
        </div>
    </TableExt>
    <template>
        <Modal
                v-model="modal1"
                title="高级搜索"
                @on-ok="ok"
                @on-cancel="cancel">
            <i-form ref="searchData" :model="searchData" :label-width="80"  inline>
            <Form-item prop="like_name" label="用户名">
            <i-input type="text" v-model="searchData.name" placeholder="Username" @on-enter="handleSubmit('table')">
            </i-input>
            </Form-item>
            <Form-item prop="password">
            <i-input type="password" v-model="searchData.password" placeholder="Password">
            </i-input>
            </Form-item>
            <Form-item prop="cs">
            <i-input type="password" v-model="searchData.cs" placeholder="cs">
            </i-input>
            </Form-item>
            <Form-item>
            <i-button type="primary" @click="handleSubmit('table')">登录</i-button>
            <i-button type="ghost" @click="reset">重置</i-button>
            <i-button type="error" @click="delChecked">删除</i-button>
            </Form-item>
            </i-form>
        </Modal>
    </template>
    </div>

</template>
<script>
    import TableExt from '../../iview2.0/components/table';
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    export default {
        components: {
            ICol,
            TableExt },
        data () {
            return {
                modal1: false,
                url:'http://192.168.56.1:1000/demo/page',
          //      pageNumber:1,
                searchData:{

                },
                dataValue:'',
                dataKey:'module',
                noDataText:'<div class="example-case"><div><div class="ivu-spin"><div class="ivu-spin-main"><span class="ivu-spin-dot"></span> <div class="ivu-spin-text"></div></div></div></div></div>',
              //  height:document.documentElement.clientHeight,
                columns: [
                    {type:'expand',width:100,align:'left',halign:'center',render:(h, params) => {
                        return h('div', {
                            props: {
                                row: params.row
                            }
                        },'cs:'+params.row.id);
                    }},
                    {key:'module',width:100,align:'left',halign:'center',title:'业务模块'},
                    {key:'operator',width:100,align:'center',halign:'center',title:'操作'},
                    {key:'operator_url',width1:200,align:'left',halign:'center',title:'请求URL'},
                    {key:'operator_method',width:100,align:'left',halign:'center',title:'操作方法'},
                    {key:'operator_user_name',width:100,align:'left',halign:'center',title:'操作人'},
                    {key:'operator_time',width:140,align:'center',halign:'center',title:'操作时间'},
                    {key:'operator_ip',width:100,align:'left',halign:'center',title:'操作IP'}
                ],
                data:[],
                data6: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        },
        watch:{
            searchData:function (val, oldVal) {
                console.log(val);
                console.log(oldVal);
            }
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            },
            delChecked(){
                console.log(1);
               console.log( this.$refs.table.getChecked());
            },
            show (row) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${row.name}<br>年龄：${row.id}<br>地址：${row.create_time}`
                })
            },
            remove (index) {
                this.data.splice(index, 1);
            },
            handleSubmit(name){
                var keyName='like_'+this.dataKey;
                this.searchData={

                };
                this.searchData[keyName]=this.dataValue;
                this.$refs[name].load();
            },
            reset(){
                this.$refs['searchData'].resetFields();
            }
        }
    }
</script>
