<template>
  <div>
    <div class="d-flex flex-column align-items-end h-100 justify-content-between">
      <CartQtd class="mt-3 me-3" :qtdAdd="qtdAdd"/>

      <div class="">
        <div v-if="showBtnMinus" class="d-flex">
          <div class="btn-yellow btn-select-minus">
            <p class="fs-2 btn-minus">-</p>
          </div>
          <div class="btn-yellow btn-select-plus2">
            <p class="fs-4 btn-plus">+</p>
          </div>
        </div>
        <div v-else class="btn-yellow btn-select-plus">
            <p class="fs-4 btn-plus">+</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartQtd from '@/components/card-product/add-rm-product/CartQtd'

export default {
  name: "ProductSelector",
  components: {
    CartQtd
  },
  created() {},
  data() {
    return {
      showBtnMinus: true,
      qtdAdd: "02"
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.btn-minus {
  color: #232227;
  position: relative;
  top: -15px;
}

.btn-plus {
  color: #232227;
  position: relative;
  top: -9px;
}

.btn-select-minus {
  width: 25px;
  height: 25px;
  border-top-left-radius: 12px;
  border-right: solid 1px #F9A332;
  cursor: pointer;
}

.btn-select-plus {
  width: 25px;
  height: 25px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  cursor: pointer;
}

.btn-select-plus2 {
  width: 25px;
  height: 25px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
}
</style>