<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6 col-xxl-4" v-for="(product, index) in list" :key="index">
        <CardCartProduct class="fade-in" />
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
      list: ["1", "2", "3", "4"]
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped></style>