<template>
  <div class="bg-project">
    <SliderTop />

    <router-view/>    

    <AppFooter class="mt-4"/>
  </div>
</template>

<script>
  import SliderTop from "@/components/shared/SliderTop.vue";
  import AppFooter from '@/components/shared/footer/AppFooter'

  export default {
    created() {
      document.title = "Hamburgueria Luc Lanches"
    },
    name: "App",
    components: {
      SliderTop,
      AppFooter
    },
    data() {
      return {}
    },
    methods: {},
  };
</script>