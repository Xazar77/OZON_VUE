<template>
  <div class="cart-block-wrapper">
    <template v-if="!cards.length">
      <div id="cart-empty">Ваша корзина пока пуста</div>
    </template>

    <template v-else>
      <div
        class="card"
        v-for="(card, index) in cards"
        :key="card.id"
        :data-set="card.id"
      >
        <div class="card-sale">🔥Hot Sale🔥</div>
        <div class="card-img-wrapper">
          <span
            class="card-img-top"
            :style="`background-image: url(${card.img})`"
          ></span>
        </div>
        <div class="card-body justify-content-between">
          <div class="card-price">{{ card.price }} ₽</div>
          <h5 class="card-title">{{ card.title }}</h5>
          <button @click="onDeletCard(index)" class="btn btn-primary">
            Удалить
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				isCartVisible: false,
			};
		},

		computed: {
			cards() {
				// console.log(this.$store.getters["getCards"])
				return this.$store.getters["getCards"];
			},
		},
		methods: {
			onDeletCard(index) {

				this.$store.dispatch("setCardsDecr", index);
			},
		},

	};
</script>

<style scoped lang="scss">
	.cart-block-wrapper{
		display: flex;
		flex-wrap: wrap
	}
</style>