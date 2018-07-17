<template>
  <main-layout :selected-id="activeIndex" :selected-page="activePage">
    <div>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from '@/layout/MainNoSideBar'
export default {
  name: 'About',
  components: {
    MainLayout
  },
  data () {
    return {
      activeIndex: '4',
      activePage: 'About'
    }
  }
}
</script>
