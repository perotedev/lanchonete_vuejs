<template>
  <div class="bg-project">
    <SliderTop />

    <div class="row mt-4">
      <div class="col"></div>
      
      <div class="col-12 col-lg-1">
        <LeftBar />
      </div>

      <div class="col-12 col-lg-9">
        <ProductList />
      </div>

      <div class="col"></div>

    </div>

    <AppFooter class="mt-4"/>
  </div>
</template>

<script>
  import SliderTop from "@/components/shared/SliderTop.vue";
  import ProductList from '@/components/ProductList'
  import LeftBar from '@/components/left-bar/LeftBar'
  import AppFooter from '@/components/shared/footer/AppFooter'

  export default {
    name: "App",
    components: {
      SliderTop,
      ProductList,
      LeftBar,
      AppFooter
    },
    methods: {}
  };
</script>