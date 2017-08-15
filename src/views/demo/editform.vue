<template>
<div>{{text}}</div>
</template>
<script>

    export default {
        created:function(){

        },
        data: function () {
            return {
                text:'ccc',
                fields: [
                    {key: 'module', width: 100, align: 'left', halign: 'center', title: '业务模块', fastSearch: false},
                    {key: 'operator', width: 100, align: 'center', halign: 'center', title: '操作', fastSearch: false},
                    {key: 'operator_url', width1: 200, align: 'left', halign: 'center', title: '请求URL'},
                    {key: 'operator_method', width: 100, align: 'left', halign: 'center', title: '操作方法'},
                    {key: 'operator_user_name', width: 100, align: 'left', halign: 'center', title: '操作人'},
                    {key: 'operator_time', width: 140, align: 'center', halign: 'center', title: '操作时间'},
                    {key: 'operator_ip', width: 100, align: 'left', halign: 'center', title: '操作IP'}
                ]
            };
        },
        render:function(){
            alert(1);
            return null;
        }
    };
</script>
