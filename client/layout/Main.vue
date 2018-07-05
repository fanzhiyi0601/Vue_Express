<template>
  <el-container>
    <el-header>
      <m-menu-component v-bind:active-index="selectedId"></m-menu-component>
    </el-header>
      <el-container>
        <el-aside>
          <slot name="aside"></slot>
        </el-aside>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    <el-footer>
      <p>Copyright 2018, Csteps Limited</p>
    </el-footer>
  </el-container>
</template>
<script>
import MMenuComponent from '@/components/Menu'
export default {
  components: {
    MMenuComponent
  },
  props: ['selectedId']
}
</script>
<style scoped>

</style>
