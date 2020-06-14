import Vue from 'vue';
import Router from 'vue-router';
import Signup from './src/components/Signup.vue';
import HelloWorld from './src/components/HelloWorld.vue';
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/HelloWorld',
        name: 'Helloworld',
        component: HelloWorld,
    }, {
        path: '/Signup',
        name: 'Signup',
        component: Signup,
    }],
});