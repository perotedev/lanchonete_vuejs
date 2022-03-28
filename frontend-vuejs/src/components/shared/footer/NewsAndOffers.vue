<template>
  <div>
    <div class="row">
      <div class="col-12 col-lg-6 font-bold mb-3">
        <div class="row align-items-center">
          <div class="col-12 col-lg-2"></div>

          <div class="col-12 col-lg-10 text-start">
            <p>Novidades, ofertas e mais </p>
          </div>

          <div class="col-12 col-lg-2"></div>
          <div class="col-12 col-lg-8 text-start">
            <img :src="imgSocialMediaRef" alt="Mídias Sociais">
          </div>
        </div>

      </div>

      <div class="col-12 col-lg-6">
        <div class="row align-items-center">
          <div class="col-12 col-lg-2"></div>
          <div class="col-12 col-lg-10 text-start font-bold">
            <p>Ofertas exclusivas para você </p>
          </div>
          
          <div class="col-12 col-lg-2"></div>
          <div class="col-12 col-lg-8">
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
    <ToastMessage ref="footerToast" toastId="toastFooter"/>
  </div>
</template>

<script>
import ToastMessage from '@/components/shared/ToastMessage'

export default {
  name: "NewAndOffers",
  components: {
    ToastMessage
  },
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
      this.$refs.footerToast.setToastMessage(
        "Olá, tudo bem?",
        "Seu email foi cadastrado com sucesso para receber ofertas exclusivas."
      );
      this.$refs.footerToast.showToast();
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
  max-height: 48px;
  max-width: 329px;
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