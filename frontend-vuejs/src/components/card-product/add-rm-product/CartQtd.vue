<template>
  <div class="qtd-add rounded-circle">
    <p class="fw-bold"> {{ qtdAdd }} </p>
  </div>
</template>

<script>
export default {
  name: "CartQtd",
  created() {},
  data() {
    return {};
  },
  props: {
    qtdAdd: Number
  },
  methods: {},
};
</script>

<style scoped>
.qtd-add {
  width: 25px;
  height: 25px;
  padding-top: 2px;
  background-color: #F12446;
  color: white;
  font-family: 'Segoe UI Bold';
}

</style>