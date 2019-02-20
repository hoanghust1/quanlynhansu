<template>
  <div class="my-component">
    {{ message }}
    <router-link :to="{name:'demo'}">Danh sách Users</router-link>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      message: 'This is my first component using binding data'
    }
  }
}
</script>
