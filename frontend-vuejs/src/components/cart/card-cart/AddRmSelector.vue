<template>
  <div>
    <div class="h-100 d-flex align-items-center flex-column">
      <button @click="$emit('add-item')" class="btn-plus-minus btn-yellow rad-8 mb-1 d-flex align-items-center" title="Adicionar Produto">
        <p class="fs-4 btn-plus w-100 align-self-center dis-text-select">+</p>
      </button>

      <div class="qtd-cart rad-8 mb-1">
        <p class="f-title p-1 dis-text-select">{{ getCountString() }}</p>
      </div>

      <button @click="$emit('rm-item')" class="btn-plus-minus btn-yellow rad-8 d-flex align-items-center" title="Remover Produto">
        <p id="minus-cart" class="fs-3 w-100 btn-minus align-self-center dis-text-select">-</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddRmSelector",
  data() {
    return {
    };
  },
  props: {
    qtdAdd: Number
  },
  methods: {
     getCountString(){
      return this.qtdAdd.toString().padStart(2, "0");
    }
  },
  emits: ['add-item', 'rm-item']
};
</script>

<style scoped>
.btn-plus {
  position: relative;
  top: -3px;
}

.btn-minus {
  position: relative;
  top: -3px;
}

.btn-plus-minus {
  cursor: pointer;
  height: 30px;
  width: 30px;
  color: #232227;
}

.qtd-cart {
  background-color: white;
  height: 30px;
  width: 30px;
  color: #232227;
}


</style>