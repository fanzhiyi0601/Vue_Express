<template>
  <main-layout :selected-id="activeIndex">
    <div>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from '@/layout/Main'
export default {
  name: 'About',
  components: {
    MainLayout
  },
  data () {
    return {
      activeIndex: '4'
    }
  }
}
</script>
