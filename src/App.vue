<template>
	<div class="wrapper">
		<header-component>
			<template v-slot:cartOpen>
				<a
					href="#"
					id="cart"
					@click="onCartOpen"
				><span class="counter">{{Count.length }}</span>
					<span class="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>

							<path
								fill="currentColor"
								fill-rule="nonzero"
								d="M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h5.133L21.82 18.496A4 4 0 0 1 17.85 22H6.149a4 4 0 0 1-3.969-3.504L.867 8H6V6zm6 2a1 1 0 0 1 0 2H3.133l1.03 8.248A2 2 0 0 0 6.149 20h11.704a2 2 0 0 0 1.984-1.752L20.867 10H16V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h4z"
							>
							</path>
						</svg>
					</span>
					<span class="desc">Корзина</span>
				</a>
			</template>
		</header-component>
		<main-view />
		<cart-component v-if="isCartOpen">
			<div
				class="cart-close"
				@click="onCartClose" 
				
			></div>
		</cart-component>
	</div>

</template>

<script>
import MainView from "@/components/MainComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CartComponent from "@/components/CartComponent.vue";

export default {
	data() {
		return {
			isCartOpen: false,
		};
	},
	components: {
		MainView,
		HeaderComponent,
		CartComponent,
	},
	computed: {
		Count() {
			return this.$store.getters["getCards"]
		}
	},
	methods: {
		onCartOpen() {
			this.isCartOpen = true;
		},
		onCartClose() {
			this.isCartOpen = false;
		},
		onCartClosekey() {
			console.log('click')
			this.isCartOpen = false;
		},

	},
	mounted() {
		if(localStorage.getItem('cards')) {
			this.$store.dispatch("setCardsLocalStorage", JSON.parse(localStorage.getItem('cards')))
		} else  {
			localStorage.removeItem('cards')
		}
	}
};
</script>


