<template>
  <div class="cart">
    <div class="cart-body">
      <div class="cart-title">Корзина</div>
      <div class="cart-total">
        Общая сумма: <span>{{ TotalPrice(cards) }}</span> руб
      </div>
      <div class="cart-wrapper">
        <card-in-cart-component />
      </div>
      <button @click.prevent="onSubmitCard(cards)" class="btn btn-primary cart-confirm">Оформить заказ</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CardInCartComponent from "@/components/CardInCartComponent.vue";
import { doc, setDoc } from "firebase/firestore"

export default {
	data() {
		return {
			timer: null
		}
	},
  components: { CardInCartComponent },
  computed: {
    cards() {
        return this.$store.getters["getCards"];
      
    },
  },
  methods: {
    TotalPrice(cards) {
        return cards.reduce((res, cur) => {
          return res + cur.price;
        }, 0);
      
    },
    onSubmitCard(cards) {
	
		localStorage.removeItem('cards')
		this.$store.dispatch("setCardsLocalStorage", [])
		this.timer = setTimeout(() => {
			alert("Спасибо, данные отправлены! Наш менеджер свяжется с вами")
		},1000)
		
    }
  },
  destroyed() {
	clearTimeout(this.timer)
  }
};
</script>
