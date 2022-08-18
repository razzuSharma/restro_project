import {createRouter, createWebHistory} from 'vue-router'
import SignUp from './components/SignUp.vue';
import HomeVue from './components/Home.vue';
import LoginVue from './components/Login.vue'
import AddVue from './components/Add.vue'
import UpdateVue from './components/Update.vue'
import ContactVue from './components/Contact.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeVue
    },
    {
        name: 'SignUp',
        path: '/sign-in',
        component: SignUp
    },
    {
        name: 'Login',
        path: '/log-in',
        component: LoginVue
    },
    {
        name: 'Add',
        path: '/add',
        component: AddVue
    },
    {
        name: 'Update',
        path: '/update',
        component: UpdateVue
    },
    {
        name: 'Contact',
        path: '/contact',
        component: ContactVue
    },
    

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
