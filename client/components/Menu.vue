<template>
  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    {{activePage}}
    <mu-button flat slot="right">LOGIN</mu-button>
    <mu-menu slot="right">
      <mu-button flat>MENU</mu-button>
      <mu-list slot="content">
        <mu-list-item button>
          <mu-list-item-content>
            <mu-list-item-title>Menu Item 1</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-content>
            <mu-list-item-title>Menu Item 2</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-menu>
  </mu-appbar></template>
<script>
export default {
  name: 'Menu',
  components: {
  },
  props: {
    activeIndex: {
      default: '0'
    },
    activePage: {
      default: ''
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
