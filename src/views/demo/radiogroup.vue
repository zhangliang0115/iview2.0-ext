<template>
    <Rg v-model="phone" url="http://localhost:1000/demo/radio" >

    </Rg>


</template>
<script>
    import Radio from  '../../iview2.0/components/radio';
    const  Rg =Radio.Group;
    export default {
        components:{
            Radio,Rg
        },
        data(){
            return {
                phone:1,
                animal:'金斑蝶',
                data:[],
                url:''
            };
        }
    };
</script>
