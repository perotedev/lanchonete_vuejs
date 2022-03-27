<template>
  <div>
    <div v-show="!isSmallScreen" class="menu-bar fade-in mb-3 justify-content-end">
      <li class="d-flex justify-content-end">
        <ul v-for="(item, index) in menuItems" :key="index" class="f-title">
          <p v-if="isSelected(index)" class="active-item"> <span class="symbol-active">●</span> {{ item }}</p>
          <p v-else>{{ item }}</p>
        </ul>
      </li>
      <button class="btn-filter ms-4" title="Filtrar Produtos">
          <i class="bi bi-sliders2"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarMenu",
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },
  data() {
    return {
      selectIndex: 0,
      isSmallScreen: false
    };
  },
  props: {
    menuItems: Array
  },
  methods: {
    isSelected(index){
      return index == this.selectIndex;
    },
    checkScreenWidth(){
      this.isSmallScreen = window.innerWidth < 960;
    }
  },
};
</script>

<style scoped>
.active-item {
  min-width: max-content;
}

ul {
  cursor: pointer;
}

ul:hover {
  color: #FFBC00;
  transition-duration: 200ms;
}

.menu-bar {
  display: flex;
  max-height: 20px;
}

.symbol-active {
  position: relative;
  color: #FFBC00;
  transition-duration: 200ms;
  top: -1px;
}

.btn-filter {
  padding-top: 1px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  background-color: transparent;
  color:  white;
  border: solid 1px white;
  border-radius: 10px;

}

.btn-filter:hover {
  color: #FFBC00;
  border: solid 1px #FFBC00;
  transition-duration: 200ms;
}
</style>