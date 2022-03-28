<template>
  <div class="row mb-3">
    <div v-for="page in pages" :key="page.id" class="col-4 col-lg-12 mb-3 d-flex justify-content-center">
      <BtnPageSelector @click="$emit('change-page', page.id)" :iconRef="page.iconRef" :iconName="page.iconName" :selected="pageSelected == page.id"/>
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
  emits: [
    'change-page'
  ],
  data() {
    return {
      pages: [
        {
          id: 0,
          iconRef: "../img/menu-icons/burger24dp.svg",
          iconName: "Hamburguers"
        },
        {
          id: 1,
          iconRef: "../img/menu-icons/beer24dp.svg",
          iconName: "Bebidas"
        },
        {
          id: 2,
          iconRef: "../img/menu-icons/scart24dp.svg",
          iconName: "Carrinho"
        }
      ]
    };
  },
  props: {
    pageSelected: Number
  },
  methods: {},
};
</script>