<template>
  <main-layout :selected-id="activeIndex" :selected-page="activePage">
    <div>
      <p>Home page</p>
      <p>Home page</p>
      <p>Home page</p>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from '@/layout/MainNoSideBar'
export default {
  name: 'Home',
  components: {
    MainLayout
  },
  data () {
    return {
      activeIndex: '1',
      activePage: '主页'
    }
  }
}
</script>
<style scoped>

</style>
