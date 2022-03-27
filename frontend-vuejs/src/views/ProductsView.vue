<template>
  <div>
    <ProductList :productPageId="productPageId"/>
  </div>
</template>

<script>
import ProductList from '@/components/shared/ProductList'

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

<style lang="scss" scoped></style>