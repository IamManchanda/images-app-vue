<template>
  <div id="app" class="app-Root">
    <div class="app-Root_Header">
      <component-header />
    </div>
    <div class="grid-container fluid app-Root_MainView">
      <div class="grid-x grid-margin-x grid-padding-y">
        <div class="cell">
          <router-view/>
        </div>
      </div>
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

