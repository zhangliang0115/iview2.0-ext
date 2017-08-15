<template>
    <div style="width:880px">
    <Input v-model="fields" type="textarea" :rows="8" placeholder="请输入..."></Input>
       <div style="height: 20px;"><Input v-model="entity.name" ></Input></div>
    <Input v-model="fs" type="textarea" :rows="8" placeholder="请输入..."></Input>
        <div>{{tt}}</div>
        <i-form :model="entity" :rules="rules" :label-width="80">
            <Row v-for="item in items">
                <i-col :span="24/col*(i.span||1)" v-for="i in item">
                <Form-item :label="i.title" >
                    <Input v-if="!i.type || i.type=='text'" v-model="entity[i.key]"  :placeholder="'请输入'+i.title"></Input>
                    <Radio-group v-else-if="i.type=='radio'" v-model="entity[i.key]">
                        <Radio label="1">是</Radio>
                        <Radio label="0">否</Radio>
                    </Radio-group>
                    <Input-number v-else-if="i.type=='number'"  v-model="entity[i.key]"></Input-number>
                    <Input v-else-if="i.type=='textarea'" v-model="entity[i.key]" type="textarea"  :placeholder="'请输入'+i.title"></Input>

                    <Checkbox-group v-else-if="i.type=='checkbox'" v-model="entity[i.key]">
                        <Checkbox label="香蕉"></Checkbox>
                        <Checkbox label="苹果"></Checkbox>
                        <Checkbox label="西瓜"></Checkbox>
                    </Checkbox-group>

                    <i-switch v-else-if="i.type=='switch'" v-model="entity[i.key]" ></i-switch>

                    <Select v-else-if="i.type=='select'" v-model="entity[i.key]" >
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai" disabled>上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                    </Select>

                    <Slider v-else-if="i.type=='slider'" v-model="entity[i.key]"></Slider>

                    <Date-picker v-else-if="i.type=='date'"  :value="entity[i.key]" type="date" :placeholder="'请选择'+i.title" @on-change="showDate" ></Date-picker>
                    <Date-picker v-else-if="i.type=='daterange'"  :value="entity[i.key]" type="daterange" :placeholder="'请选择'+i.title" @on-change="showDate" ></Date-picker>
                    <Date-picker v-else-if="i.type=='datetime'"  :value="entity[i.key]" type="datetime" :placeholder="'请选择'+i.title" @on-change="showDate" ></Date-picker>
                    <Date-picker v-else-if="i.type=='datetimerange'"  :value="entity[i.key]" type="datetimerange" :placeholder="'请选择'+i.title" @on-change="showDate" ></Date-picker>
                    <Date-picker v-else-if="i.type=='year'"  :value="entity[i.key]" type="year" :placeholder="'请选择'+i.title" @on-change="showDate" ></Date-picker>
                    <Date-picker v-else-if="i.type=='month'"  :value="entity[i.key]" type="month" :placeholder="'请选择'+i.title" @on-change="showDate" ></Date-picker>

                    <Time-picker v-else-if="i.type=='time'" type="time" v-model="entity[i.key]" placeholder="选择时间" :placeholder="'请选择'+i.title"></Time-picker>


                </Form-item>
                </i-col>
            </Row>
        </i-form>
    </div>
</template>
<script>
    export default{
        methods:{
            showDate:function(a){
                this.$set(this.entity,'remark',a);
            }
        },
        mounted(){
            console.log("----");
        },
        data(){
            return {
                entity:{name:100,is_use:1},rules:[],
                col:3,
                fields:'[{title:"名称",key:"name"},{title:"排序编号",key:"sort",type:"number"},{title:"是否启用",key:"is_use",type:"radio"},{title:"备注",key:"remark",type:"textarea"}]',
                fs:'',items:[],tt:''
            };
        },
        watch:{
            entity:{
                handler:function(val){
                    this.tt= JSON.stringify(val);
                },
                deep:true
            },
            fields:function(){
                var all=eval(this.fields);
                var calc=[];
                var t=[];
                var col=3;
                var t_span=0;
                for(var i in all){
                    var a=all[i];
                    if(a=='|'){
                        if(t.length>0){
                            calc.push(t);
                            t=[];
                            t.length=0;
                        }
                    }else{
                        if(t.length>=col ||t_span>=24){
                            calc.push(t);
                            t=[];
                            t.length=0;
                            t_span=0;
                        }
                        t.push(a);
                        t_span=t_span+(a.span||1)*(24/this.col);

                    }
                }
                if(t.length>0){
                    calc.push(t);
                }
                this.items=calc;

                this.fs=JSON.stringify(calc);
            }
        }
    };
</script>