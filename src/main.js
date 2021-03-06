import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
console.log("start");
if(store.getters.loggedIn){
    store.dispatch('getCurrentUserInfo')
    store.dispatch('getGroupName')
    store.dispatch('getCurrentGroupTasks')
}
