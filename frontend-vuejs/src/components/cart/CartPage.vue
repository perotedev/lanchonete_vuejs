<template>
  <div>
    <div v-if="haveProduct" class="row cart-products">
      <div class="col-12 col-md-6 col-xxl-4" v-for="(product, index) in list" :key="index">
        <CardCartProduct class="fade-in" />
      </div>
    </div>
    <div v-else class="cart-products pt-5">
      <div class="fs-2">
        <p><i class="bi bi-emoji-neutral me-2"></i> Ops! No momento não há itens no carrinho</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col-12 col-lg-6 mt-3 pt-3 text-start ps-5">
        <btn v-show="haveProduct" class="btn-exclude-all rad-10 f-title px-3 py-2">
          Limpar Carrinho
        </btn>
      </div>

      <div class="col-12 mt-3 mb-3 col-lg-6 d-flex f-title justify-content-end"> 
        <p class="fs-2"> Total:</p>
        <div class="total-box mx-3 px-3 rad-12 text-center">
          <p class="fs-2">R$ {{ totalCompras }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCartProduct from '@/components/cart/card-cart/CardCartProduct'

export default {
  name: "CartPage",
  components: {
    CardCartProduct
  },
  created() {},
  mounted() {
    this.haveProduct = this.list.length > 0;
  },
  data() {
    return {
      list: [1,2,3,4],
      totalCompras: 22.45,
      haveProduct: Boolean
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.total-box {
  background-color: white;
  color: #232227;
}

.cart-products {
  min-height: 312px;
}

.btn-exclude-all {
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: #F12446;
}

.btn-exclude-all:hover {
  background-color: #F5435C;
  transition-duration: 200ms;
} 
</style>