<template>
  <div class="showblog container">
    <Alert v-if="alert" :message="alert"></Alert>
    <h1>博客总览</h1>
    <input type="search" class="form-control" placeholder="搜索标题" v-model="filterInput" >
    <h2 v-if="show">暂没有博客</h2>
    <div v-for="(blog, index) in filterBy(blogs, filterInput)" :key="index" class="single-blog">
      <router-link :to="`/sigleblog/${blog.id}`">
        <h2 v-Blogtitle>{{blog.title}}</h2>
      </router-link>
      <article>
        {{blog.content}}
      </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from './Alert'
export default {
  name: 'showblog',
  components: {
    Alert
  },
  data () {
    return {
      blogs: [],
      show: false,
      filterInput: '',
      alert: ''
    }
  },
  created () {
    axios.get('http://localhost:3000/posts')
      .then(data => {
        // console.log(data)
        this.blogs = data.data.slice(0)
        // console.log(this.blogs)
        if (this.blogs.length === 0) {
          this.show = true
        }
      })
  },
  methods: {
    filterBy (blogs, value) {
      return blogs.filter(blog => {
        return blog.title.match(value)
      })
    }
  },
  updated () {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
    // 重新获取数据
    axios.get('http://localhost:3000/posts')
      .then(data => {
        // console.log(data)
        this.blogs = data.data.slice(0, 10)
        // console.log(this.blogs)
        if (this.blogs.length === 0) {
          this.show = true
        }
      })
  }
}
</script>

<style scoped>
.showblog {
  margin: 0 auto;
  max-width: 800px;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eeeeee;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}

</style>
