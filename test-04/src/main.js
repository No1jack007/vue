import Vue from 'vue'

const app=new Vue({
    el:'#app',
    data:{
        message:'Hello Webpack'
    }
})

import App2 from './vue/app.js'

const app2=new Vue({
    el:'#app2',
    template:'<App2/>',
    components:{
        App2
    }
})

import App3 from './vue/app3.vue'

const app3=new Vue({
    el:'#app3',
    template:'<App3/>',
    components:{
        App3
    }
})
