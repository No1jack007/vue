<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-link v-bind:to="'/user/'+userId">用户</router-link>
    <router-link v-bind:to="{path:'/profile',query:{name:'why',age:18,height:1.88}}">档案</router-link>

    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'lisi'
      }
    },
    methods: {
      homeClick() {
        console.log('homeClick')
        this.$router.push('/home')
      },
      aboutClick() {
        console.log('aboutClick')
        this.$router.push('/about')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
