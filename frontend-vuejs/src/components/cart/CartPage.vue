<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6 col-xxl-4" v-for="(product, index) in list" :key="index">
        <CardCartProduct class="fade-in" />
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-lg-6">
        <btn>
          
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
  data() {
    return {
      list: ["1", "2", "3", "4"],
      totalCompras: 22.45
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
</style>