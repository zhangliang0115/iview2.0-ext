<template>

    <Select v-model="phone" style="width:200px" url="http://localhost:1000/demo/radio">
    </Select>

</template>
<script>
    import { Select, Option, OptionGroup } from  '../../iview2.0/components/select';

    export default {
        components:{
            Select,Option,OptionGroup
        },
        data(){
            return {
                phone:'',
                animal:'金斑蝶',
                data:[],
                url:''
            };
        }
    };
</script>
