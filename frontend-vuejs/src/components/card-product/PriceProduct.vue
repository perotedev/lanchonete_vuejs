<template>
  <div class="price mt-2 rad-12">
    <p v-if="promotion" class="p-0 m-0 f-title text-danger">R$ {{ price }} </p>
    <p v-else class="p-0 m-0 f-title text-warning">R$ {{ price }} </p>

  </div>
</template>

<script>
export default {
  name: "PriceProduct",
  props: {
    price: Number,
    promotion: Boolean
  },
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>