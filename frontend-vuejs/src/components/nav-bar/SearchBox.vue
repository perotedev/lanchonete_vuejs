<template>
  <div>
    <div class="d-flex">
      <div class="text-start title-search me-3"> 
        <p><span class="f-title">Você pode pesquisar</span> <br>todos os produtos </p>
      </div>
      <div id="box-search" class="text-end" @click="clickSearch()">
        <i class="bi bi-search icon-search"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  created() {},
  data() {
    return {
      isActive: false
    };
  },
  props: {},
  methods: {
    clickSearch(){
      this.isActive = !this.isActive;
    }
  },
};
</script>

<style scoped>
.icon-search {
  margin-right: 6px;
}

#box-search {
  cursor: pointer;
  padding-top: 2px;
  border: 1px solid white;
  border-radius: 14px;
  width: 28px;
  height: 28px;
}

#box-search:hover {
  color: #FFBC00;
  border: 1px solid #FFBC00;
  transition-duration: 200ms;
}

#box-serach:active {
  width: 200px;
  transition-duration: 200ms;
}

.title-search {
  position: relative;
  top: -4px;
}

</style>