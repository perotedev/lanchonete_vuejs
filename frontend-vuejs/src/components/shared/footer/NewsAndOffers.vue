<template>
  <div>
    <div class="row">
      <div class="col-12 col-lg-6 font-bold mb-3">
        <div class="row align-items-center pt-3">
          <div class="col"></div>

          <div class="col-12 col-lg-4 text-start">
            <p>Novidades, ofertas e mais </p>
          </div>

          <div class="col-12 col-lg-4">
            <img class="w-100" :src="imgSocialMediaRef" alt="Mídias Sociais">
          </div>
          
          <div class="col"></div>
        </div>

      </div>

      <div class="col-12 col-lg-6">
        <div class="row align-items-center">
          <div class="col-12 col-lg-4 text-start font-bold">
            <p>Ofertas exclusivas para você </p>
          </div>
          
          <div class="col-12 col-lg-6">
            <form>
              <div class="input-group mb-3 pt-3">
                <input type="text" class="form-control" :placeholder="emailPlaceHolder">
                <button @click="sumbitForm($event)" class="btn btn-outline-secondary btn-yellow font-bold">ok</button>
              </div>
            </form>
          </div>
          
          <div class="col"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewAndOffers",
  created() {},
  data() {
    return {
      imgSocialMediaRef: "../../img/footer/social-media@2x.png",
      emailPlaceHolder: "Digite seu email"
    };
  },
  props: {},
  methods: {
    sumbitForm(e){
      e.preventDefault();
      console.log("Enviou o email");
    }
  },
};
</script>

<style scoped>
button {
  color: white;
  border: solid 1px #FFBC00;
  height: 35px;
}

button:hover{
  border: solid 1px #F9A332;
  transition-duration: 200ms;
}

img {
  cursor: pointer;
}

.form-control {
  height: 35px; 
  border: solid 1px #FFBC00;
}

.form-control:focus {
  outline: none;
  box-shadow: none;
  border: solid 1px #FFBC00;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>