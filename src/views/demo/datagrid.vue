<template>
    <data-grid ref="ccc" :url="url" :columns="columns" :buttons="buttons"  ></data-grid>
</template>
<script>
    import DataGrid from '../../iview2.0/components/data-grid';
    export default {
        components: {
            DataGrid
        },
        data: function () {
            return {
                buttons: [
                    {
                        type: 'info', icon: 'plus', text: '创建', click: function (table) {
                            table.load();
                        }
                    },
                    {type: 'primary', icon: 'ios-compose-outline', text: '编辑', click: this.edit},
                    {type: 'error', icon: 'close', text: '删除', click: 'cancel'}
                ],
                url: 'http://192.168.56.1:1000/demo/page',
                columns: [
                    {key: 'module', width: 100, align: 'left', halign: 'center', title: '业务模块', fastSearch: false},
                    {key: 'operator', width: 100, align: 'center', halign: 'center', title: '操作', fastSearch: false},
                    {key: 'operator_url', width1: 200, align: 'left', halign: 'center', title: '请求URL'},
                    {key: 'operator_method', width: 100, align: 'left', halign: 'center', title: '操作方法'},
                    {key: 'operator_user_name', width: 100, align: 'left', halign: 'center', title: '操作人'},
                    {key: 'operator_time', width: 140, align: 'center', halign: 'center', title: '操作时间'},
                    {key: 'operator_ip', width: 100, align: 'left', halign: 'center', title: '操作IP'}
                ]
            };
        }
    };
</script>
