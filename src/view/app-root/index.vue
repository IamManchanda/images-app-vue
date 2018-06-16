<template>
  <div id="app" class="app-Root">
    <div class="app-Root_ComponentHeader">
      <component-header />
    </div>
    <div class="grid-container fluid app-Root_RouterView">
      <router-view/>
    </div>
  </div>
</template>

<script>
import ComponentHeader from '@/view/components/header/index.vue';

export default {
  name: 'AppRoot',
  components: {
    ComponentHeader,
  },
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->

