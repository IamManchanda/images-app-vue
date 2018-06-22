<template>
  <div>
    <div class="p-Home" v-if="isLoggedIn">
      <div
        class="p-Home_ImageContent"
        v-for="image in allImages"
        :key="image.link">
        <img
          :src="image.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PageHome',
  computed: {
    ...mapGetters(['allImages', 'isLoggedIn']),
  },
  methods: {
    ...mapActions(['fetchImages']),
  },
  created() {
    this.fetchImages();
  },
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
