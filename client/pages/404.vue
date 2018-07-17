<template>
  <main-layout :selected-page="activePage">
    <h1 style="margin-top: 20%">Page not found</h1>
  </main-layout>
</template>
<script>
import MainLayout from '@/layout/MainNoSideBar'
export default {
  name: '404',
  components: {
    MainLayout
  },
  data () {
    return {
      activeIndex: ' ',
      activePage: 'Page 404'
    }
  }
}
</script>
