<template>
    <div >
       <Row>
           <Col span="3">
           <p style="height: 80px">
            <router-link to="/table">Table表格</router-link><br>
           </p>
           </Col>
           <Col span="3"><router-link to="/datagrid">DataGrid</router-link></Col>

       </Row>
        <Button type="primary" @click="modal1 = true">显示对话框</Button>

    </div>
</template>
<script>
    export default {
        data(){
            return {
                modal1:false
            }
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    };
</script>