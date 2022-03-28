<template>
  <div class="mb-3 rad-12 bg-card-product product-card d-flex justify-content-between">
    <div class="row ps-2 align-items-center product-description">
      <div class="col-4">
        <img class="img-card" :src="product.imgProduct" :alt="product.titleProduct"/>
      </div>

      <div class="col-8 text-start dis-text-select">
        <p class="f-title">{{ product.titleProduct }}</p>
        <p class="mt-1 text-description">{{ product.descriptionProduct }}</p>
        <PriceProduct  :price="product.price" :promotion="product.promotion"/>
      </div>
    </div>
    <ProductSelector 
      :productName="product.titleProduct" 
      :productId="product.id"
      :qtdAdd="qtdAdd"
      @add-item="addItemToCart"
      @rm-item="removeItemInCart"
    />
  </div>
</template>

<script>
import PriceProduct from '@/components/card-product/PriceProduct'
import ProductSelector from '@/components/card-product/add-rm-product/ProductSelector'
import jsCookie from 'js-cookie'

export default {
  mounted() {
    this.checkCountInCart();
  },
  name: "CardView",
  components: {
    PriceProduct,
    ProductSelector
  },
  data() {
    return {
      qtdAdd:Number
    };
  },
  props: {
    product: {
      id: String,
      imgProduct: String,
      titleProduct: String,
      descriptionProduct: String,
      price: Number,
      promotion: Boolean
    }
  },
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
  height: 125px;
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

.img-card {
  max-height: 100px;
  max-width: 95%;
}
</style>