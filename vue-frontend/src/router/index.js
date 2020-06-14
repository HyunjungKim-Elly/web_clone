import Vue from 'vue';
import Router from 'vue-router';
import Signup from '../components/Signup.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Login from '../components/Login.vue';
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'Helloworld',
            component: HelloWorld,
        },
        {
            path: '/HelloWorld',
            name: 'Helloworld',
            component: HelloWorld,
        }, {
            path: '/signup',
            name: 'Signup',
            component: Signup,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        }
    ],
});