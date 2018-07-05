<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router="true">
    <el-menu-item index="1" route="/home">主页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">各类Demo</template>
      <el-menu-item index="2-1" route="/demos/HelloWorld">Hello World</el-menu-item>
      <el-menu-item index="2-2" route="/demos/ChatRoom">聊天室</el-menu-item>
      <el-menu-item index="2-3">unknown</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">unknown</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4" route="/about">关于</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'Menu',
  components: {
  },
  props: {
    activeIndex: {
      default: '0'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>

</style>
