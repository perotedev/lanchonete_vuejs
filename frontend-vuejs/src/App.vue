<template>
  <div class="m-0 p-0 bg-project">
    <SliderTop />


    <h1>TESTANDO SCOPED</h1>

    <div class="row">
      <div class="col-3">

      </div>

      <div class="col-9">
        <ProductList />
      </div>

    </div>
  </div>

</template>

<script>
  import SliderTop from "@/components/SliderTop.vue";
  import ProductList from '@/components/ProductList'

  export default {
    name: "App",
    components: {
      SliderTop,
      ProductList
    },
  };
</script>

<style scoped>
h1{
  color: yellow;
}
</style>