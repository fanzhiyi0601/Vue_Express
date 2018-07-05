<template>
  <main-layout :selected-id="activeIndex">
    <div>
      chat room
    </div>
  </main-layout>
</template>
<script>
import MainLayout from '@/layout/Main'
export default {
  name: 'ChatRoom',
  components: {
    MainLayout
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex: '2-2'
    }
  }
}
</script>

<style scoped>

</style>
