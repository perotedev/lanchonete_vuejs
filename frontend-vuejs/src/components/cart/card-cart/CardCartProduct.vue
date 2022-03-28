<template>
  <div class="px-4 pb-2">
    <div class="mb-2 bg-card-cart product-card d-flex justify-content-between">
      <div class="row ps-2 align-items-center product-description">
        <div class="col-2">
          <AddRmSelector 
            :qtdAdd="qtdAdd"
            @add-item="addItemToCart"
            @rm-item="removeItemInCart"
          />
        </div>
        <div class="col-4">
          <img class="img-card" :src="product.imgProduct" :alt="'Nome do Produto'"/>
        </div>

        <div class="col-6 text-start dis-text-select">
          <p class="f-title">{{ product.titleProduct }}</p>
          <p class="mt-1 text-description">{{ product.descriptionProduct }}</p>
          <PriceProduct  :price="product.price" :promotion="product.promotion"/>
        </div>
      </div>
      <div>
        <button @click="removeAll()" class="btn-exclude rad-8 d-flex justify-content-center" :title="'Remover Todos os '+product.titleProduct">
          <i class="icon-x bi bi-x fs-5 align-self-center"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PriceProduct from '@/components/card-product/PriceProduct'
import AddRmSelector from '@/components/cart/card-cart/AddRmSelector'
import jsCookie from 'js-cookie'

export default {
  name: "CardCartProduct",
  components: {
    PriceProduct,
    AddRmSelector
  },
  created() {
    this.checkCountInCart();
  },
  watch: {
    qtdAdd(){
      this.$emit('total-change');
    }
  },
  updated() {
    this.checkCountInCart();
  },
  data() {
    return {
      qtdAdd: Number
     };
  },
  props: {
    product: {
      id: String,
      imgProduct: String,
      titleProduct: String,
      descriptionProduct: String,
      price: Number,
      promotion: Boolean,
      count: Number
    }
  },
  emits: ['total-change'],
  methods: {
    addItemToCart(){
      let product = this.product;
      product.count = 1;
      let array = jsCookie.get('appCart');
      if (array == undefined || array == null || array.length == 0){
        jsCookie.set('appCart', JSON.stringify([product]));
        this.qtdAdd = 1;
        console.log(JSON.parse(jsCookie.get('appCart')))
      } else {
        this.addCookieItem(product);
      }
    },

    addCookieItem(newItem){
      let array = JSON.parse(jsCookie.get('appCart'));
      let isInCart = false;
      for (let i=0; i < array.length; i++){
        if(array[i].id == newItem.id){
          isInCart = true;
          array[i].count++;
          this.qtdAdd = array[i].count;
          break;
        }
      }

      if (!isInCart){
        array.push(newItem);
        this.qtdAdd = 1;
      }
      console.log(array);
      jsCookie.set('appCart', JSON.stringify(array));
    },

    removeItemInCart(){
      // jsCookie.remove('appCart');
      let array = JSON.parse(jsCookie.get('appCart'));

      for (let i=0; i < array.length; i++){
        if(array[i].id == this.product.id){
          if (array[i].count == 1){
            array.splice(i, 1);
            this.qtdAdd = 0;
          } else {
            array[i].count --;
            this.qtdAdd = array[i].count;
          }
          break;
        }
      }
      console.log(array);
      jsCookie.set('appCart', JSON.stringify(array));
    },

    removeAll(){
      let array = JSON.parse(jsCookie.get('appCart'));

      for (let i=0; i < array.length; i++){
        if(array[i].id == this.product.id){
          array.splice(i, 1);
          this.qtdAdd = 0;
          break;
        }
      }
      console.log(array);
      jsCookie.set('appCart', JSON.stringify(array));
      window.scrollTo(0, 133);
    },

    checkCountInCart(){
      let array = JSON.parse(jsCookie.get('appCart'));
      let isInCart = false;
      for (let i=0; i < array.length; i++){
        if(array[i].id == this.product.id){
          isInCart = true;
          this.qtdAdd = array[i].count;
          break;
        }
      }
      if (!isInCart){
        this.qtdAdd = 0;
      }
    }
  },
};
</script>

<style scoped>
.product-card {
  height: 140px;
}

.product-description {
  max-width: 92%;
}

.text-description {
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
}

.btn-exclude {
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: #F12446;
  height: 25px;
  width: 25px;
  margin-top: 20px;
  margin-right: 12px;
  padding-top: 6px;
}

.btn-exclude:hover {
  background-color: #F5435C;
  transition-duration: 200ms;
} 

.icon-x {
  position: relative;
  top: -3px;
  left: -1px;
}

.img-card {
  max-height: 100px;
  max-width: 95%;
}</style>