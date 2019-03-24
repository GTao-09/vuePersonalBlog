<template>
  <div class="singleblog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p><b>作者:</b> {{blog.autor}}</p>
    <p><b>分类:</b>
      <ul>
        <li v-for="(category, index) in blog.category" :key="index">
          {{category}}
        </li>
      </ul>
    </p>
    <button class="btn btn-danger" @click="BlogDelete">删除</button>
    <router-link class="btn btn-primary" :to="`/edit/${this.$route.params.id}`">编辑</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'singleblog',
  data () {
    return {
      blog: {}
    }
  },
  created () {
    axios.get(`http://localhost:3000/posts/${this.$route.params.id}`)
      .then(data => {
        this.blog = data.data
        // console.log(data)
      })
  },
  methods: {
    BlogDelete () {
      axios.delete(`http://localhost:3000/posts/${this.$route.params.id}`)
        .then(response => {
          this.$router.push({path: '/', query: {alert: '删除成功'}})
        })
    }
  }
}
</script>

<style scoped>
  .singleblog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
  }
  article {
    margin: 0 0 20px;
  }
  ul {
    list-style: none;
  }
</style>
