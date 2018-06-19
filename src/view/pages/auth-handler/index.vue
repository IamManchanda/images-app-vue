<template>
  <div class="p-AuthHandler">
    Please wait...
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PageAuthHandler',
  methods: {
    ...mapActions(['finalizelogin']),
  },
  created() {
    this.finalizelogin(window.location.hash);
  },
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->

