<template>
  <div class="top-bar c-Header">
    <div class="top-bar-left c-Header_LeftBar">
      <ul class="menu c-Header_Menu">
        <li class="menu-text c-Header_MenuText">Image Storage</li>
      </ul>
    </div>
    <div class="top-bar-right c-Header_RightBar">
      <ul class="menu c-Header_Menu">
        <li><a @click="login">Login</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ComponentHeader',
  methods: {
    ...mapActions(['login']),
  },
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
