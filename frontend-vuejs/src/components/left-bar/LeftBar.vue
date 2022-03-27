<template>
  <div class="row mb-3">
    <div v-for="page in pages" :key="page.id" class="col-4 col-lg-12 mb-3 d-flex justify-content-center">
      <BtnPageSelector :iconRef="page.iconRef" :iconName="page.iconName" :selected="page.selected"/>
    </div>
  </div>
</template>

<script>
import BtnPageSelector from '@/components/left-bar/BtnPageSelector'

export default {
  name: "LeftBar",
  components: {
    BtnPageSelector
  },
  created() {},
  mounted() {},
  data() {
    return {
      pages: [
        {
          id: 0,
          iconRef: "../img/menu-icons/burger24dp.svg",
          iconName: "Hamburguers",
          selected: true
        },
        {
          id: 1,
          iconRef: "../img/menu-icons/beer24dp.svg",
          iconName: "Bebidas",
          selected: false
        },
        {
          id: 2,
          iconRef: "../img/menu-icons/scart24dp.svg",
          iconName: "Carrinho",
          selected: false
        }
      ]
    };
  },
  props: {},
  methods: {},
};
</script>