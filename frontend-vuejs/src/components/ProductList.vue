<template>
  <div>
    <div class="row px-4">
      <div class="col-6" v-for="(element, index) in list" :key="index">
        <CardList />
      </div>
    </div>
  </div>
</template>

<script>
import CardList from '@/components/CardList'

export default {
  name: "ProductList",
  components: {
    CardList
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

</style>