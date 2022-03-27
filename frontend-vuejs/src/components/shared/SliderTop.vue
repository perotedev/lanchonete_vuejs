<template>
  <section>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="source1" class="d-block w-100" alt="Bem Vindo à Sua Nova Hamburgueria">
        </div>
        <div class="carousel-item">
          <img :src="source2" class="d-block w-100" alt="Drink Michigan Beer">
        </div>
        <div class="carousel-item">
          <img :src="source3" class="d-block w-100" alt="Conheça a Trajetória da Duc Lanches">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SliderTop",
  created() {},
  mounted() {},
  data() {
    return {
      source1: "../img/banners/grupo-mascara-7.png",
      source2: "../img/banners/grupo-mascara-9.png",
      source3: "../img/banners/grupo-mascara-10.png"
    };
  },
  props: {},
  methods: {},
};
</script>