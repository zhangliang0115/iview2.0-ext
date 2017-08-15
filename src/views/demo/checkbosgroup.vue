<template>
    <Rg v-model="phone" url="http://localhost:1000/demo/radio" >

    </Rg>


</template>
<script>
    import Checkbox from  '../../iview2.0/components/checkbox';
    const  Rg =Checkbox.Group;
    export default {
        components:{
            Checkbox,Rg
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
