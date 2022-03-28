<template>
  <div>
    <NavBar v-show="isNotCart" class="pt-3 fade-out" :typeProduct="pageSelected"/>

    <div class="row mt-4">
      <div class="col"></div>
      
      <div class="col-12 col-lg-1 fade-in">
        <LeftBar id="left-bar" @change-page="selectNewPage" :pageSelected="pageSelected"/>
      </div>

      
      <div class="col-12 col-lg-9">
        <router-view></router-view>
      </div>

      <div class="col"></div>

    </div>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar/NavBar'
import LeftBar from '@/components/left-bar/LeftBar'
import router from '@/routes/index'

export default {
  name: "AppHome",
  components: {
    NavBar,
    LeftBar
  },
  created() {
    router.push({name: 'Products', query: {type: 'food'}})
  },
  data() {
    return {
        pageSelected: 0,
        isNotCart: true
    };
  },
  props: {},
  methods: {
    selectNewPage(value){
      if (value != this.pageSelected){
        this.pageSelected = value;
        this.isNotCart = value != 2;
        if (this.isNotCart){
          window.scrollTo(0,200)
        } else {
          window.scrollTo(0,133)
        }

        switch (value){
          case 0: 
            router.push({name: 'Products', query: {type: 'food'}})
            break;
          case 1: 
            router.push({name: 'Products', query: {type: 'drink'}});
            break;
          case 2:
            router.push({name: 'Cart'});
            break;
          default: 
            router.push({name: 'Home'})
        }
      }
    }
  },
};
</script>

<style scoped>
#left-bar {
  transition-duration: 200ms;
}
</style>