<template>
  <div class="mb-3 rad-12 bg-card-product product-card d-flex justify-content-between">
    <div class="row ps-2 align-items-center product-description">
      <div class="col-4">
        <img class="img-card" :src="imgProduct" :alt="titleProduct"/>
      </div>

      <div class="col-8 text-start">
        <p class="p-0 m-0 f-title">{{ titleProduct }}</p>
        <p class="p-0 m-0 mt-1 text-description">{{ descriptionProduct }}</p>
        <PriceProduct  :price="price" :promotion="promotion"/>
      </div>
    </div>
    <div class="align-self-end">
      <div v-if="showBtnMinus" class="d-flex">
        <div class="btn-yellow btn-select-minus">
          <p class="p-0 m-0 fs-2 btn-minus">-</p>
        </div>
        <div class="btn-yellow btn-select-plus2">
          <p class="p-0 m-0 fs-4 btn-plus">+</p>
        </div>
      </div>
      <div v-else class="btn-yellow btn-select-plus">
          <p class="p-0 m-0 fs-4 btn-plus">+</p>
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
      promotion: false,
      showBtnMinus: false
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

.btn-minus {
  color: #232227;
  position: relative;
  top: -15px;
}

.btn-plus {
  color: #232227;
  position: relative;
  top: -9px;
}

.btn-select-minus {
  width: 25px;
  height: 25px;
  border-top-left-radius: 12px;
  border-right: solid 1px #F9A332;
  cursor: pointer;
}

.btn-select-plus {
  width: 25px;
  height: 25px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  cursor: pointer;
}

.btn-select-plus2 {
  width: 25px;
  height: 25px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
}
</style>