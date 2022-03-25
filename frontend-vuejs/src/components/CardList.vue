<template>
  <div class="px-2 mb-3">
    <div class="row rounded-5 bg-card-product">
      <div class="col-4">
        <img :src="imgProduct" :alt="titleProduct"/>
      </div>

      <div class="col-8">
        <p>{{ titleProduct }}</p>
        <p>{{ descriptionProduct }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardList",
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
  #card-list {

  }
</style>