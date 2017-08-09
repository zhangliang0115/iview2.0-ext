const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/table',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/demo/table.vue'], resolve)
    },
    {
        path: '/datagrid',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/demo/datagrid.vue'], resolve)
    }
];
export default routers;