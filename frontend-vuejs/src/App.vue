<template>
  <div class="bg-project">
    <SliderTop />

    <NavBar class="pt-3" :typeProduct="pageSelected"/>

    <div class="row mt-4">
      <div class="col"></div>
      
      <div class="col-12 col-lg-1">
        <LeftBar @change-page="selectNewPage" :pageSelected="pageSelected"/>
      </div>

      <div class="col-12 col-lg-9">
        <ProductList :productPageId="pageSelected"/>
      </div>

      <div class="col"></div>

    </div>

    <AppFooter class="mt-4"/>

    <ToastMessage ref="appToast"/>
  </div>
</template>

<script>
  import SliderTop from "@/components/shared/SliderTop.vue";
  import ProductList from '@/components/ProductList'
  import LeftBar from '@/components/left-bar/LeftBar'
  import AppFooter from '@/components/shared/footer/AppFooter'
  import NavBar from '@/components/nav-bar/NavBar'
  import ToastMessage from '@/components/shared/ToastMessage'

  export default {
    created() {
      document.title = "Hamburgueria Luc Lanches"
    },
    name: "App",
    components: {
      SliderTop,
      ProductList,
      LeftBar,
      AppFooter,
      NavBar,
      ToastMessage
    },
    data() {
      return {
        pageSelected: 0
      }
    },
    methods: {
      selectNewPage(value){
        this.pageSelected = value;
      },
      showToast: function (title, message) {
        this.$refs.appToast.setToastMessage(title, message);
        this.$refs.appToast.showToast();
      }
    },
  };
</script>