<template>
  <div class="top-bar c-Header">
    <div class="top-bar-left c-Header_LeftBar">
      <ul class="menu c-Header_Menu">
        <li class="menu-text c-Header_MenuText">Image Storage</li>
      </ul>
    </div>
    <div class="top-bar-right c-Header_RightBar">
      <ul class="menu c-Header_Menu">
        <router-link to="/" tag="li" active-class="is-active" exact>
          <a>Home</a>
        </router-link>
        <template v-if="isLoggedIn">
          <router-link to="/upload" tag="li" active-class="is-active" exact>
            <a>Upload</a>
          </router-link>
          <li><a @click="logout">Logout</a></li>
        </template>
        <template v-else>
          <li><a @click="login">Login to Upload</a></li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ComponentHeader',
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
