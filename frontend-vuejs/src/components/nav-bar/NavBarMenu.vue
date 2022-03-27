<template>
  <div>
    <div class="max-height mb-3">
      <li class="d-flex justify-content-end">
        <ul v-for="(item, index) in menuItems" :key="index" class="f-title">
          <p v-if="isSelected(index)"> <span class="ul-active">●</span> {{ item }}</p>
          <p v-else>{{ item }}</p>
        </ul>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarMenu",
  created() {},
  data() {
    return {
      selectIndex: 0
    };
  },
  props: {
    menuItems: Array
  },
  methods: {
    isSelected(index){
      return index == this.selectIndex;
    }
  },
};
</script>

<style scoped>
ul {
  cursor: pointer;
}

ul:hover {
  color: #FFBC00;
  transition-duration: 200ms;
}

.max-height {
  max-height: 20px;
}

.ul-active {
  position: relative;
  color: #FFBC00;
  transition-duration: 200ms;
  top: -1px;
}
</style>