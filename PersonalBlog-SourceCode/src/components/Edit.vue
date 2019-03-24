<template>
  <div class="addblog container">
    <h1 class="page-header">添加博客</h1>
    <form @submit.prevent="addBlog">
      <div class="well">
        <div class="form-group">
          <label for="blogtitle">博客标题</label>
          <input class="form-control" type="text" placeholder="博客标题" id="blogtitle" v-model="blog.title" required>
        </div>
        <div class="form-group">
          <label for="blogcontent">博客内容</label>
          <textarea class="form-control" placeholder="博客内容" cols="30" rows="10" id="blogcontent" v-model="blog.content" required></textarea>
        </div>
        <div class="form-group">
          <div class="checkboxes">
            <label>标签:</label>
            <template v-for="(category, index) in categorys">
              <input type="checkbox" id="blogcategory" :value="category" v-model="blog.category" :key="index">
             <label for="blogcategory" :key="index+'label'">{{category}}</label>
           </template>
          </div>
        </div>
        <div class="form-group">
          <label for="blogautor">作者:</label>
          <input class="form-control" type="text" placeholder="作者" id="blogautor" v-model="blog.autor" required>
        </div>
        <input type="submit" value="提交" class="btn btn-primary">
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'addblog',
  data () {
    return {
      blog: {},
      categorys: ['Vue.js', 'HTML5', 'ECMAScript6', 'Other']
    }
  },
  created () {
    axios.get(`http://localhost:3000/posts/${this.$route.params.id}`)
      .then(data => {
        this.blog = data.data
      })
  },
  methods: {
    addBlog () {
      let newBlog = {
        title: this.blog.title,
        content: this.blog.content,
        category: this.blog.category,
        autor: this.blog.autor
      }
      axios.put(`http://localhost:3000/posts/${this.$route.params.id}`, newBlog)
        .then(data => {
          this.$router.push({path: '/', query: {alert: '用户信息编辑成功!'}})
        })
    }
  }
}
</script>

<style scoped>
.checkboxes label{
  display: inline-block;
}
.checkboxes input {
  display: inline-block;
  margin-left: 50px;
}
.addblog {
  max-width: 800px;
}
</style>
