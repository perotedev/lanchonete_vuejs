<template>
  <div>
    <ProductList v-if="productPageId==1" :productPageId="productPageId"/>
    <ProductList v-else :productPageId="productPageId"/>
  </div>
</template>

<script>
import ProductList from '@/components/shared/ProductList'
// import { watchEffect } from "vue";

export default {
  name: "ProductsView",
  components: {
    ProductList
  },
  created() {
    this.setProductId(this.$route.query.type);
  },
  data() {
    return {
      productPageId: Number
    };
  },
  watch: {
    $route (value) {
      this.setProductId(value.query.type);
    }  
  },
  props: {},
  methods: {
    setProductId(queryParam){
      if (queryParam == "food"){
        this.productPageId = 0;
      } else if (queryParam == "drink"){
        this.productPageId = 1
      } else {
        this.productPageId = 0;
      }
    }
  },
};
</script>

<style scoped>

</style>