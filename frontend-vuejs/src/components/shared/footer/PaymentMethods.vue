<template>
  <div>
    <div class="row align-items-center">
      <div class="col-12 col-lg-2"></div>
      <div class="col-12 col-lg-10 text-start font-bold">
        <p>Formas de pagamento </p>
      </div>
      
      <div class="col-2"></div>
      <div class="col-12 col-lg-8 d-flex">
        <img :src="imgPaymentsRef" alt="Formas de Pagamento">
        <img :src="imgBarCodeRef" alt="Código de Barras">
      </div>
      
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentMethods",
  created() {},
  data() {
    return {
      imgPaymentsRef: "../../img/footer/pay-methods@2x.png",
      imgBarCodeRef: "../../img/footer/bar-code@2x.png"
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
img {
  max-height: 48px;
  max-width: 329px;
}
</style>