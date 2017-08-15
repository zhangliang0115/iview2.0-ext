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
    },
    {
        path: '/editform',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/demo/editform.vue'], resolve)
    }
    ,
    {
        path: '/tool',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/demo/tool.vue'], resolve)
    },
    {
        path: '/radiogroup',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/demo/radiogroup.vue'], resolve)
    },
    {
        path: '/select',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/demo/select.vue'], resolve)
    },
    {
        path: '/checkbox',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/demo/checkbosgroup.vue'], resolve)
    },
    {
        path: '/tree',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/demo/tree.vue'], resolve)
    }
];
export default routers;