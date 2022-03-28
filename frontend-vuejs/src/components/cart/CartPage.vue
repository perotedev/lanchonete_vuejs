<template>
  <div>
    <div v-if="haveProduct" class="row cart-products">
      <div class="col-12 col-md-6 col-xxl-4" v-for="(product, index) in cartList" :key="index">
        <CardCartProduct @total-change="refreshTotalSum" :product="product" class="fade-in" />
      </div>
    </div>
    <div v-else class="cart-products pt-5">
      <div class="fs-2">
        <p><i class="bi bi-emoji-neutral me-2"></i> Ops! No momento não há itens no carrinho</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col-12 col-lg-6 mt-1 pt-3 text-start ps-5 d-flex justify-content-center">
        <btn v-show="haveProduct" class="btn-exclude-all rad-10 f-title px-3 py-2" title="Limpar Carrinho">
          <i class="bi bi-trash me-1"></i> Limpar Carrinho
        </btn>

        <btn v-show="haveProduct" class="btn-buy ms-3 rad-10 f-title px-3 py-2" title="Finalizar Pedido">
          <i class="bi bi-cart me-1"></i> Finalizar Pedido
        </btn>
      </div>

      <div class="col-12 mt-3 mb-3 col-lg-6 d-flex f-title justify-content-end"> 
        <p class="fs-2"> Total:</p>
        <div class="total-box mx-3 px-3 rad-12 text-center">
          <p class="fs-2">R$ {{ totalSum }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCartProduct from '@/components/cart/card-cart/CardCartProduct'
import jsCookie from 'js-cookie'

export default {
  name: "CartPage",
  components: {
    CardCartProduct
  },
  created() {
    this.cartList = this.getItemsCart();
    this.getTotalSum();
  },
  mounted() {
    this.haveProduct = this.cartList.length > 0;
  },
  data() {
    return {
      cartList: [],
      totalSum: "0",
      haveProduct: Boolean
    };
  },
  props: {},
  methods: {
    getItemsCart(){
      return JSON.parse(jsCookie.get('appCart'));
    },

    getTotalSum(){
      let total = 0;
      this.cartList.forEach(element => {
        total += element.price * element.count;
      });
      this.totalSum = (Math.round(total * 100) / 100).toFixed(2).toString();
    },

    refreshTotalSum(){
      this.totalSum = 0;
      this.cartList = this.getItemsCart();
      this.getTotalSum();
      this.haveProduct = this.cartList.length > 0;
    }
  },
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
  max-height: 40px;
}

.btn-exclude-all:hover {
  background-color: #F5435C;
  transition-duration: 200ms;
} 

.btn-buy {
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: #059862;
  max-height: 40px;
}

.btn-buy:hover {
  background-color: #37B08A;
  transition-duration: 200ms;
} 
</style>