<template>
  <div>
    <div class="row w-100">
      <div class="col-12 col-lg-1"></div>
      <div class="col-12 col-lg-3 mb-4">
        <SearchBox />
      </div>
      
      <div class="col-12 col-lg-7 d-flex justify-content-end">
        <NavBarMenu :menuItems="menuItems"/>
        <div class="btn-filter ms-4" title="Filtrar Produtos">
          <i class="bi bi-sliders2"></i>
        </div>
      </div>
      <div class="col-12 col-lg-1"></div>
    </div>
  </div>
</template>

<script>
import NavBarMenu from '@/components/nav-bar/NavBarMenu'
import SearchBox from '@/components/nav-bar/SearchBox'

export default {
  name: "NavBar",
  components: {
    NavBarMenu,
    SearchBox
  },
  created() {},
  data() {
    return {
      menuItems: ["Sanduíches", "Pastas", "Saladas", "Sorvetes", "Bolos", "Salgados"]
    };
  },
  props: {
    typeProduct: Number
  },
  methods: {},
};
</script>

<style scoped>

.btn-filter {
  padding-top: 3px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  border: solid 1px white;
  border-radius: 10px;
}

.btn-filter:hover {
  color: #FFBC00;
  border: solid 1px #FFBC00;
  transition-duration: 200ms;
}
</style>