<template>
  <div class="mb-3 rad-10 bg-card-product product-card d-flex">
    <div class="row ps-2 align-items-center">
      <div class="col-3">
        <img class="img-card" :src="imgProduct" :alt="titleProduct"/>
      </div>

      <div class="col-8 text-start">
        <p class="p-0 m-0 f-title">{{ titleProduct }}</p>
        <p class="p-0 m-0 mt-1">{{ descriptionProduct }}</p>
        <PriceProduct  :price="price" :promotion="promotion"/>
      </div>

      <div class="col"></div>
    </div>
    <div class="align-self-end p-0 m-0">
      <div class="btn-yellow btn-select">
        <i class="fi bi-plus"></i>
      </div>
    </div>
  </div>
</template>

<script>
import PriceProduct from '@/components/card-product/PriceProduct'

export default {
  name: "CardView",
  components: {
    PriceProduct
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
  methods: {
    message() {
      console.log("Hello Card List")
    }
  },
};
</script>

<style scoped>
.product-card {
  height: 125px;
}

.img-card {
  width: 100px;
  height: auto;
} 

.btn-select {
  width: 30px;
  height: 25px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  cursor: pointer;
}
</style>