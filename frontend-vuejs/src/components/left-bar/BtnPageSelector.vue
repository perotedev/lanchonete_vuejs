<template>
  <div>
    <div v-if="selected" class="btn-yellow-selected btn-page-selected rounded-circle" :title="iconName">
      <img class="img-selected" :src="iconRef" :alt="iconName">
    </div>
    <div v-else class="btn-yellow btn-page rounded-circle" :title="iconName">
      <img :src="iconRef" :alt="iconName">
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnPageSelector",
  created() {},
  data() {
    return {};
  },
  props: {
    iconRef: String,
    iconName: String,
    selected: Boolean
  },
  methods: {},
};
</script>

<style scoped>
img {
  height: 25px;
  width: auto;
}

.img-selected {
  filter: invert(42%) sepia(95%) saturate(1175%) hue-rotate(2deg) brightness(109%) contrast(104%);
  height: 32px;
  width: auto;
}

.btn-page {
  margin-top: 8px;
  padding-top: 10px;
  width: 45px;
  height: 45px;
  cursor: pointer;
}

.btn-page-selected {
  padding-top: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

</style>