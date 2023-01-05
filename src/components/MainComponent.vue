<template>
	<main>
		<div class="container">
			<div class="row">
				<div class="col-3 col-xl-2 d-none d-lg-block">
					<filter-component/>
				</div>
				<div class="col-12 col-lg-9 col-xl-10">
					<div class="container">
						<div class="row no-gutters goods">
							<goods-item-card-component
							v-for="card in goods" 
                            :key="card.id"
                            :card="card"
							/>

						</div>
					</div>

				</div>
			</div>
		</div>
	</main>
</template>

<script>
import GoodsItemCardComponent from '@/components/GoodsItemCardComponent.vue'
import FilterComponent from '@/components/FilterComponent.vue'

export default {

	components: {GoodsItemCardComponent, FilterComponent},
	computed: {
		goods() {
			return this.$store.getters["getGoods"]
			
		}
	},
	mounted() {
		fetch('https://ozon-615cf-default-rtdb.firebaseio.com/goods.json')
		.then(res => res.json())
		.then(data => {
			// data.forEach(item => console.log(item))
			this.$store.dispatch("setGoods", data);
			
		})
		
	}
}

</script>