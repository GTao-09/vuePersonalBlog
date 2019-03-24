<template>
  <div class="addblog container">
    <h1 class="page-header">添加博客</h1>
    <form @submit.prevent="addBlog">
      <div class="well">
        <div class="form-group">
          <label for="blogtitle">博客标题</label>
          <input class="form-control" type="text" placeholder="博客标题" id="blogtitle" v-model="blog.blogtitle" required>
        </div>
        <div class="form-group">
          <label for="blogcontent">博客内容</label>
          <textarea class="form-control" placeholder="博客内容" cols="30" rows="10" id="blogcontent" v-model="blog.blogcontent" required></textarea>
        </div>
        <div class="form-group">
          <div class="checkboxes">
            <label>标签:</label>
            <template v-for="(category, index) in categorys">
              <input type="checkbox" id="blogcategory" :value="category" name="123" v-model="blog.blogcategory" :key="index">
             <label for="blogcategory" :key="index+'label'">{{category}}</label>
           </template>
          </div>
        </div>
        <div class="form-group">
          <label for="blogautor">作者:</label>
          <input class="form-control" type="text" placeholder="作者" id="blogautor" v-model="blog.blogautor" required>
        </div>
        <input type="submit" value="添加博客" class="btn btn-primary">
      </div>
    </form>
    <!-- <hr />
    <div>
      <p>{{blog.blogtitle}}</p>
      <p>{{blog.blogcontent}}</p>
      <p v-for="(blogcategory, index) in blog.blogcategory" :key="index">
        {{blogcategory}}
      </p>
      <p>{{blog.blogautor}}</p>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'addblog',
  data () {
    return {
      blog: {
        blogtitle: '',
        blogcontent: '',
        blogcategory: [],
        blogautor: ''
      },
      categorys: ['Vue.js', 'HTML5', 'ECMAScript6', 'Other']
    }
  },
  methods: {
    addBlog () {
      let newBlog = {
        title: this.blog.blogtitle,
        content: this.blog.blogcontent,
        category: this.blog.blogcategory,
        autor: this.blog.blogautor
      }
      axios.post('http://localhost:3000/posts', newBlog)
        .then(data => {
          this.$router.push({path: '/', query: {alert: '添加成功'}})
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
