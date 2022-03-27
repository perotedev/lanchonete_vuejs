<template>
  <section>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" :data-bs-interval="interval">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="images.source1" class="d-block w-100" alt="Bem Vindo à Sua Nova Hamburgueria">
        </div>
        <div class="carousel-item">
          <img :src="images.source2" class="d-block w-100" alt="Drink Michigan Beer">
        </div>
        <div class="carousel-item">
          <img :src="images.source3" class="d-block w-100" alt="Conheça a Trajetória da Duc Lanches">
        </div>
      </div>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active rounded-circle" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="rounded-circle" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="rounded-circle" aria-label="Slide 3"></button>
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
      images: {
        source1: "../img/banners/grupo-mascara-7.png",
        source2: "../img/banners/grupo-mascara-9.png",
        source3: "../img/banners/grupo-mascara-10.png",
      },
      interval: 4000
    };
  },
  props: {},
  methods: {
  },
};
</script>

<style scoped>
.carousel-indicators {
  margin-top: 12px;
  position: relative;
}
 
.carousel-indicators button {
  width: 10px;
  height: 10px;
  background-color: #232227;
  border: solid 1px #FFBC00;
  margin-left: 10px;
  margin-right: 10px;
}

.carousel-indicators button.active {
  background-color: #FFBC00;
  transition-duration: 200ms;
}

</style>