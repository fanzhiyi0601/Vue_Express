<template>
  <div class="container">
    <menu-component></menu-component>
    <slot></slot>
  </div>
</template>
<script>
import MenuComponent from '@/components/Menu'
export default {
  components: {
    MenuComponent
  }
}
</script>
<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
