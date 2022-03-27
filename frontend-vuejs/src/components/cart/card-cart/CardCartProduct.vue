<template>
  <div class="px-4 pb-2">
    <div class="mb-2 bg-card-cart product-card d-flex justify-content-between">
      <div class="row ps-2 align-items-center product-description">
        <div class="col-2">
          <AddRmSelector />
        </div>
        <div class="col-4">
          <img class="img-card" :src="product.imgProduct" :alt="'Nome do Produto'"/>
        </div>

        <div class="col-6 text-start dis-text-select">
          <p class="f-title">{{ 'Nome do Produto' }}</p>
          <p class="mt-1 text-description">{{ product.descriptionProduct }}</p>
          <PriceProduct  :price="product.price" :promotion="product.promotion"/>
        </div>
      </div>
      <div>
        <button class="btn-exclude rad-8 d-flex justify-content-center">
          <i class="icon-x bi bi-x fs-5 align-self-center"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PriceProduct from '@/components/card-product/PriceProduct'
import AddRmSelector from '@/components/cart/card-cart/AddRmSelector'

export default {
  name: "CardCartProduct",
  components: {
    PriceProduct,
    AddRmSelector
  },
  data() {
    return {
      product: {
        id: "001",
        imgProduct: "../img/burgers/burger.png",
        titleProduct: "Hamburguer Artesanal",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        price: 12.57,
        promotion: false
      }
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.product-card {
  height: 140px;
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

.btn-exclude {
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: #F12446;
  height: 25px;
  width: 25px;
  margin-top: 20px;
  margin-right: 12px;
  padding-top: 6px;
}

.btn-exclude:hover {
  background-color: #F5435C;
  transition-duration: 200ms;
} 

.icon-x {
  position: relative;
  top: -3px;
  left: -1px;
}

.img-card {
  max-height: 100px;
  max-width: 95%;
}</style>