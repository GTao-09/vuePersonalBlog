<template>
  <div class="Alert">
    <div class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert"></button>
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.Alert {
  margin: 0 auto;
  max-width: 800px;
}
</style>
