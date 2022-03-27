<template>
  <div>
    <div class="d-flex">
      <div v-show="!isActive" id="text-title" class="text-start fade-in"> 
        <p><span class="f-title">Você pode pesquisar</span> <br>todos os produtos </p>
      </div>
      <div id="box-search" class="text-end fade-in d-flex justify-content-between ms-3">
        <form id="formSearch" v-show="isActive" action="">
          <input type="text" class="input-text" size="110" placeholder="Digite um produto...">
        </form>
        <i id="icon-search" class="bi bi-search align-self-end" @click="clickSearch()" title="Pesquisar Produto"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  mounted() {
    this.resizeSearchBox();
    window.addEventListener("resize", this.resizeSearchBox);
  },
  data() {
    return {
      isActive: false
    };
  },
  props: {},
  methods: {
    clickSearch(){
      if(window.innerWidth > 959){
        this.isActive = !this.isActive;
        this.changeBoxSize();
      }
    },
    changeBoxSize(){
      if (this.isActive){
        document.getElementById("box-search").style.width = "100%";
        document.getElementById("icon-search").style.right = "7px";
      } else {
        document.getElementById("box-search").style.width = "28px";
        document.getElementById("icon-search").style.right = "-7px";
      }
    },
    resizeSearchBox(){
      if (window.innerWidth < 960){
        this.isActive = true;
        this.changeBoxSize();
      } else {
        this.isActive = false;
        this.changeBoxSize();
      }
    }
  }
};
</script>

<style scoped>
#text-title {
  max-height: 28px;
}

input {
  width: 100%;
}

#icon-search {
  cursor: pointer;
  position: relative;
  right: -7px;
  top: -5px;
}

#box-search {
  padding-top: 2px;
  border: 1px solid white;
  border-radius: 14px;
  width: 28px;
  height: 28px;
  transition-duration: 200ms;
}

#box-search:hover {
  color: #FFBC00;
  border: 1px solid #FFBC00;
  transition-duration: 200ms;
}

#title-search {
  position: relative;
  top: -4px;
  max-height: 28px;
}

.input-text {
  background-color: transparent;
  border: none;
  color: white;
  margin-left: 7px;
}

.input-text:focus {
  box-shadow: none;
  border: none;
  outline: none;
}
</style>