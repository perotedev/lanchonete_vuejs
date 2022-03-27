<template>
  <div id="footer">
    <NewsAndOffers class="px-3 dis-text-select"/>

    <div class="row pt-4">
      <div class="col-12 col-lg-6">
        <PaymentMethods class="px-3 dis-text-select"/>
      </div>

      <div class="col-12 col-lg-6">
        <WebSiteCertificates class="px-3"/>
      </div>
    </div>
    
    <p class="px-3 pt-4 dis-text-select">
      Company Name / CNPJ: 00000000/0000-00/ State Registration: 000.000.000.000 / 
      Address: Street Name, Number - State - 00000-000 customer service@empresa.com - Site Map
    </p>

  </div>
</template>

<script>
import NewsAndOffers from '@/components/shared/footer/NewsAndOffers'
import PaymentMethods from '@/components/shared/footer/PaymentMethods'
import WebSiteCertificates from '@/components/shared/footer/WebSiteCertificates'

export default {
  name: "AppFooter",
  components: {
    NewsAndOffers,
    PaymentMethods,
    WebSiteCertificates
  },
  created() {},
  mounted() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>

#footer {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
  color: #555555;
}
</style>