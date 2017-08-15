<template>

    <Tree url="http://localhost:1000/demo/menu" show-checkbox textField="name" @on-load-success="onLoadSuccess"></Tree>

</template>
<script>
    import Tree from  '../../iview2.0/components/tree';

    export default {
        components:{
            Tree
        },
        methods:{
            onLoadSuccess:function(datas){
                datas.forEach(data=>{
                    data.expand=true;
                });
            }
        },
        data(){
            return {
                phone:[1,2],
                animal:'金斑蝶',
                data:[],
                url:''
            };
        }
    };
</script>
