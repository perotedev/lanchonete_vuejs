<template>
  <div class="mb-3 rad-12 bg-card-product product-card d-flex justify-content-between">
    <div class="row ps-2 align-items-center product-description">
      <div class="col-4">
        <img class="img-card" :src="product.imgProduct" :alt="product.titleProduct"/>
      </div>

      <div class="col-8 text-start dis-text-select">
        <p class="f-title">{{ product.titleProduct }}</p>
        <p class="mt-1 text-description">{{ product.descriptionProduct }}</p>
        <PriceProduct  :price="product.price" :promotion="product.promotion"/>
      </div>
    </div>
    <ProductSelector :productName="product.titleProduct" :productId="product.id"/>
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
  data() {
    return {};
  },
  props: {
    product: {
      id: String,
      imgProduct: String,
      titleProduct: String,
      descriptionProduct: String,
      price: Number,
      promotion: Boolean
    }
  },
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