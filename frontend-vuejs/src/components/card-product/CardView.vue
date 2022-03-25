<template>
  <div class="px-2 mb-3">
    <div class="row rad-10 bg-card-product product-card align-items-center">
      <div class="col-3">
        <img class="img-card" :src="imgProduct" :alt="titleProduct"/>
      </div>

      <div class="col-8 text-start">
        <p class="p-0 m-0 f-title">{{ titleProduct }}</p>
        <p class="p-0 m-0 mt-1">{{ descriptionProduct }}</p>
      </div>

      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardView",
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
      descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
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
  height: 120px;
}

.img-card {
  width: 100px;
  height: auto;
} 
</style>