<template>
  <div class="p-Home grid-x grid-margin-x">
    <div
      class="p-Home_Images cell small-12 medium-4 large-3"
      v-for="image in allImages"
      :key="image.link">
      <div class="radius bordered card o-Card">
        <img
          :src="image.link"
        />
        <div class="card-divider o-Card_Divider">
          This is a divider
        </div>
        <div class="card-section o-Card_Section">
          <h4>This is a card.</h4>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PageHome',
  computed: {
    ...mapGetters(['allImages']),
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
