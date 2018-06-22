<template>
  <div class="p-Upload o-Dropper">
    <input
      type="file"
      @change="uploadImages($event.target.files)"
      multiple
      accept="image/*"
    />
    <span>Upload or Drag Files here...</span>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'PageUpload',
  methods: {
    ...mapActions(['uploadImages']),
  },
};
</script>
<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
