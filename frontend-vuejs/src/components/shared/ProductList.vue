<template>
  <div>
    <div class="row px-4">
      <div class="col-12 col-md-6 col-xxl-4" v-for="(product, index) in productsList[productPageId]" :key="index">
        <CardView class="fade-in" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import CardView from '@/components/card-product/CardView'
import { Beers } from '@/data/fake-beers.js'
import { Burgers } from '@/data/fake-burgers.js'

export default {
  name: "ProductList",
  components: {
    CardView
  },
  data() {
    return {
      productsList: [ Burgers.getProducts(), Beers.getProducts()]
    };
  },
  props: {
    productPageId: Number
  },
  methods: {},
};
</script>

<style scoped>

#product-list {
  margin: 0;
  padding: 0;
}
</style>x