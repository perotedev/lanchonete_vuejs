<template>
  <div>
    <div class="row px-4">
      <div class="col-6" v-for="(element, index) in list" :key="index">
        <CardView />
      </div>
    </div>
  </div>
</template>

<script>
import CardView from '@/components/card-product/CardView'

export default {
  name: "ProductList",
  components: {
    CardView
  },
  created() {},
  data() {
    return {
      list: ["1", "2", "3", "4", "5"]
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
#product-list {
  margin: 0;
  padding: 0;
}
</style>x