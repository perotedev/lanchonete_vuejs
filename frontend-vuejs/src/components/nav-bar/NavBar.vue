<template>
  <div>
    <div class="row w-100">
      <div class="col-12 col-lg-1"></div>
      <div class="col-12 col-lg-3 mb-3">
        <SearchBox />
      </div>
      
      <div class="col-12 col-lg-7">
        <NavBarMenu :menuItems="menuBurger[typeProduct]"/>
      </div>
      <div class="col-12 col-lg-1"></div>
    </div>
  </div>
</template>

<script>
import NavBarMenu from '@/components/nav-bar/NavBarMenu'
import SearchBox from '@/components/nav-bar/SearchBox'
import { ProductCategories } from '@/data/fake-categories.js'

export default {
  name: "NavBar",
  components: {
    NavBarMenu,
    SearchBox
  },
  created() {},
  data() {
    return {
      menuBurger: ProductCategories.getCategories()
    };
  },
  props: {
    typeProduct: Number
  },
  methods: {},
};
</script>

<style scoped>

</style>