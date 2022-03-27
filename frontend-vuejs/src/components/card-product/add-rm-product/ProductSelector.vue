<template>
  <div>
    <div class="d-flex flex-column align-items-end h-100 justify-content-between">
      <CartQtd class="mt-3 me-3" :qtdAdd="qtdAdd"/>

      <div class="">
        <div v-if="showBtnMinus" class="d-flex">
          <div @click="showToast(actionRm)" class="btn-yellow btn-select-minus d-flex justify-content-center align-items-center" :title="rm">
            <p class="fs-4 btn-minus dis-text-select">-</p>
          </div>
          <div @click="showToast(actionAdd)" class="btn-yellow btn-select-plus2 d-flex justify-content-center align-items-center" :title="add">
            <p class="fs-5 btn-plus dis-text-select">+</p>
          </div>
        </div>
        <div v-else @click="showToast(actionAdd)" class="btn-yellow btn-select-plus d-flex justify-content-center align-items-center" :title="add">
          <p class="fs-5 btn-plus dis-text-select">+</p>
        </div>
      </div>
    </div>

    <ToastMessage ref="appToast"/>
  </div>
</template>

<script>
import CartQtd from '@/components/card-product/add-rm-product/CartQtd'
import ToastMessage from '@/components/shared/ToastMessage'

export default {
  name: "ProductSelector",
  components: {
    CartQtd,
    ToastMessage
  },
  created() {},
  data() {
    return {
      showBtnMinus: false,
      qtdAdd: "02",
      add: "Adicionar",
      rm: "Remover",
      actionAdd: "adicionou ao",
      actionRm: "removeu do"
    };
  },
  props: {
    productName: String
  },
  methods: {
    showToast(action){
      this.$refs.appToast.setToastMessage(
        "Olá, tudo bem?",
        "Você "+action+" carrinho o produto \""+this.productName+"\"!"
      );
      this.$refs.appToast.showToast();
    }
  },
};
</script>

<style scoped>
.btn-minus {
  color: #232227;
  position: relative;
  bottom: 2px;
}

.btn-plus {
  color: #232227;
  position: relative;
  top: -2px;
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