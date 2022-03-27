<template>
  <div>
    <div class="row align-items-center">     
      <div class="col-2"></div>
      <div class="col-12 col-lg-8 d-flex mt-4">
        <img class="w-100" :src="imgCertificatesRef" alt="Formas de Pagamento">
        <img class="ms-1" :src="imgArmoredSiteRef" alt="Código de Barras">
      </div>
      
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebSiteCertificates",
  created() {},
  data() {
    return {
      imgCertificatesRef: "../../img/footer/site-blindado@2x.png",
      imgArmoredSiteRef: "../../img/footer/site-seguro@2x.png"
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
img {
  max-height: 48px;
}
</style>