<template>
  <div>
    <div class="row align-items-center">
      <div class="col-12 col-lg-2"></div>
      <div class="col-12 col-lg-10 text-start font-bold">
        <p>Formas de pagamento </p>
      </div>
      
      <div class="col-2"></div>
      <div class="col-12 col-lg-8 d-flex">
        <img id="payment-methods" :src="imgPaymentsRef" alt="Formas de Pagamento">
        <img id="bar-code" :src="imgBarCodeRef" alt="Código de Barras">
      </div>
      
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentMethods",
  data() {
    return {
      imgPaymentsRef: "../../img/footer/pay-methods@2x.png",
      imgBarCodeRef: "../../img/footer/bar-code@2x.png"
    };
  },
  props: {},
  methods: {}
};
</script>

<style scoped>
#payment-methods {
  max-height: 48px;
  max-width: 329px;
  height: 100%;
  width: 100%;
}

#bar-code {
  padding-top: 10px;
  margin-left: 5px;
  max-height: 40px;
}
</style>