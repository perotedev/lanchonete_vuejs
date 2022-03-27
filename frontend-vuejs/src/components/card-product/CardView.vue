<template>
  <div class="mb-3 rad-12 bg-card-product product-card d-flex justify-content-between">
    <div class="row ps-2 align-items-center product-description">
      <div class="col-4">
        <img class="img-card" :src="imgProduct" :alt="titleProduct"/>
      </div>

      <div class="col-8 text-start dis-text-select">
        <p class="f-title">{{ titleProduct }}</p>
        <p class="mt-1 text-description">{{ descriptionProduct }}</p>
        <PriceProduct  :price="price" :promotion="promotion"/>
      </div>
    </div>
    <ProductSelector :productName="titleProduct"/>
  </div>
</template>

<script>
import PriceProduct from '@/components/card-product/PriceProduct'
import ProductSelector from '@/components/card-product/add-rm-product/ProductSelector'

export default {
  name: "CardView",
  components: {
    PriceProduct,
    ProductSelector
  },
  created() {},
  mounted() {
    setTimeout(() => {
      console.log("Time Out")
    }, 1000);
  },
  data() {
    return {
      imgProduct: "../img/burgers/burger.png",
      titleProduct: "Hamburguer Artesanal",
      descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      price: 12.57,
      promotion: false
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.product-card {
  height: 125px;
}

.product-description {
  max-width: 92%;
}

.text-description {
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
}

.img-card {
  max-height: 100px;
  max-width: 95%;
}
</style>