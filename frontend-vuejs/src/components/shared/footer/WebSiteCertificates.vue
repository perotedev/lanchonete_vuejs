<template>
  <div>
    <div class="row align-items-center">     
      <div class="col-2"></div>
      <div class="col-12 col-lg-8 d-flex mt-4">
        <img id="website-armored" :src="imgArmoredSiteRef" alt="Site Blindado">
        <img id="certificates" class="ms-1" :src="imgCertificatesRef" alt="Certificados de Segurança">
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
      imgCertificatesRef: "../../img/footer/site-seguro@2x.png",
      imgArmoredSiteRef: "../../img/footer/site-blindado@2x.png"
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
#website-armored {
  max-height: 48px;
  max-width: 200px;
  width: 100%;
}

#certificates {
  max-height: 48px;
  max-width: 200px;
  width: 100%;
}
</style>