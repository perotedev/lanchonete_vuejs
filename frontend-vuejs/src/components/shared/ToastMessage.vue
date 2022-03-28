<template>
  <div>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div :id="toastId" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header border-bottom">
          <img :src="imgIconRef" class="me-2" alt="Ícone Hamburguer">
          <strong class="me-auto f-title">{{ title }}</strong>
          <small><i class="bi bi-clock me-1"></i> {{ timeMessage }} </small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body font-dark text-start border-top">
          {{ textMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap'

export default {
  name: "ToastMessage",
  data() {
    return {
      imgIconRef: "../../img/burgers/burger.png",
      timeMessage: "",
      title: "",
      textMessage: ""
    };
  },
  props: {
    toastId:String
  },
  methods: {
    getNowTime(){
      let time = new Date();
      return time.getHours().toString().padStart(2, "0")+":"+time.getMinutes().toString().padStart(2, "0");
    },
    setToastMessage(title, message){
      this.title = title;
      this.textMessage = message;
      this.timeMessage = this.getNowTime();
    },
    showToast(){
      let toastLiveExample = document.getElementById(this.toastId)
      let toast = new bootstrap.Toast(toastLiveExample);
      toast.show();
    }
  },
};
</script>

<style scoped>
img{
  width: auto;
  height: 20px;
}

.font-dark {
  color: #555555;
}

.btn-close {
  outline: none;
  box-shadow: none;
}

.toast-body {
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>