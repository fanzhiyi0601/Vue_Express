<template>
  <div id="app">
    <mu-paper :z-depth="1" class="menu-list-wrap">
      <mu-appbar color="teal">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        Menu
      </mu-appbar>
      <mu-list>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="inbox"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Inbox</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="grade"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Stared</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="send"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Sent mail</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="drafts"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Drafts</mu-list-item-title>
        </mu-list-item>
      </mu-list>
      <mu-divider></mu-divider>
      <mu-list>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>All mail</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="info"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>Trash</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="info"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>Spam</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="info"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>Follow up</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="info"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  components: {
  }
}
</script>
<style scoped>
  .menu-list-wrap {
    width: 100%;
    max-width: 360px;
  }
</style>
