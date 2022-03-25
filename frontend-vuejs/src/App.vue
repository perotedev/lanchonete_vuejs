<template>
  <div class="bg-project">
    <SliderTop />

    <div class="row mt-4">
      <div class="col-2">

      </div>

      <div class="col-9">
        <ProductList />
      </div>

    <div class="col"></div>
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