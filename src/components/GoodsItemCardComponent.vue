<template>
  <div class="col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="card" :data-set="card.id" ref="card" @click="addCard(card.id)">
      <div v-if="card.sale" class="card-sale">🔥Hot Sale🔥</div>
      <div class="card-img-wrapper">
        <span
          class="card-img-top"
          :style="`background-image: url(${card.img})`"
        ></span>
      </div>
      <div class="card-body justify-content-between">
        <div class="card-price">{{ card.price }} ₽</div>
        <h5 class="card-title">{{ card.title }}</h5>
        <button class="btn btn-primary">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addCard(id) {
      fetch("https://ozon-615cf-default-rtdb.firebaseio.com/goods.json")
        .then((res) => res.json())
        .then((data) => {

          const product = data.find((item) => item.id === id)

          const newProduct = {
            img: product.img,
            price: product.price,
            sale: product.sale,
            title: product.title
          }
     

          this.$store.dispatch("setCardsIncr", newProduct)
         
        });
    },
  },
};
</script>
