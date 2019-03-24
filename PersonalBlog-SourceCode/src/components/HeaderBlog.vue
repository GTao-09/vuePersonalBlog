<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
       <ul class="nav navbar-nav">
         <li :class="{active: show===1}" @click="show1"><router-link :to="{name: 'ShowBlogLink'}">博客</router-link></li>
         <li :class="{active: show===2}" @click="show2"><router-link :to="{name: 'AddBlogLink'}">添加博客</router-link></li>
       </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HeaderBlog',
  data () {
    return {
      show: 1
    }
  },
  methods: {
    show1 () {
      this.show = 1
    },
    show2 () {
      this.show = 2
    }
  }
}
</script>

<style scoped>
.navbar-nav {
  float: none;
  text-align:center;
}
ul.nav.navbar-nav  li {
    float:none;
    display: inline-block;
    margin: 0em;
}
</style>
