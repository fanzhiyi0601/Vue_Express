<template>
  <div>
    <m-menu-component></m-menu-component>
    <slot name="left-menu"></slot>
  </div>
</template>
<script>
import MMenuComponent from '@/components/Menu'
export default {
  components: {
    MMenuComponent
  }
}
</script>
<style scoped>

</style>
