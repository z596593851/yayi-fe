import Vue from "vue";
import Router from "vue-router";
// import Index from "@/views/Index.vue"
import Index from "../views/Index.vue"
import Details from "../views/Details.vue"

Vue.use(Router);

export default new Router({
    mode:'hash',
    // base:'/yayi/',
    routes: [
        {
            path: '/details',
            name: 'details',
            component: Details
        },
        {
            path: '/',
            name: 'index',
            component: Index
        },
    ]
});