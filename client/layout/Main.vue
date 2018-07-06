<template>
  <el-container>
    <el-header>
      <m-menu-component v-bind:active-index="selectedId"></m-menu-component>
    </el-header>
      <el-container>
        <neon-effect :options="options">
        </neon-effect>
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
  props: ['selectedId'],
  data () {
    return {
      options: {
        len: 20, // 五边形的单边长度
        count: 50, // 多少线重叠
        rate: 20, // 速度 越小越快
        dieChance: 0.05, // 单次绘画失败进行重绘的几率
        sparkChance: 0.1, // [0,1] 越大画出的五边形越多重
        sparkDist: 10, // 闪烁点的距离
        sparkSize: 2, // 闪烁点的大小
        contentLight: 60, // [0,100] 色块的亮度
        shadowToTimePropMult: 6, // 五边形的内环阴影大小
        bgColorArr: [0, 0, 0] // 背景色数组
      }
    }
  }
}
</script>
<style scoped>
  canvas {
    display: inline-block;
    z-index: -1;
  }
</style>
