<template>
	<div class="filter">
		<div class="filter-title">
			<h5>Фильтр</h5>
		</div>
		<div class="filter-price">
			<div class="filter-price_title">
				Цена
			</div>
			<form @input="onPriceFilter">
				<div class="filter-price_range">
					<div class="filter-price_input-wrapper">
						<label
							for="min"
							class="filter-price_label"
						>от</label>
						<input
							id="min"
							class="filter-price_input"
							type="number"
							ref="min"
						>
					</div>
					<div class="filter-price_input-wrapper">
						<label
							for="max"
							class="filter-price_label"
						>до</label>
						<input
							id="max"
							class="filter-price_input"
							type="number"
							ref="max"
						>
					</div>
				</div>
			</form>
		</div>
		<div class="filter-check">
			<label class="filter-check_label">
				<input
					@click="onCheked"
					type="checkbox"
					class="filter-check_checkbox"
					id="discount-checkbox"
				>
				<span
					class="filter-check_checkmark "
					:class="`${isChecked? 'checked' : ''}`"
				></span>
				<span class="filter-check_label-text">Акция</span>
			</label>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isChecked: false,
		};
	},
	methods: {
		onCheked() {
			this.isChecked = !this.isChecked;

			fetch("https://ozon-615cf-default-rtdb.firebaseio.com/goods.json")
				.then((res) => res.json())
				.then((data) => {
					this.$store.dispatch(
						"setGoods",
						data.filter((item) => {
							return item.sale === this.isChecked;
						}).filter((item) => {
							if (this.$refs.max.value !='') {
								if (this.isChecked) {
									return (
										item.price >= this.$refs.min.value &&
										item.price <= this.$refs.max.value &&
										item.sale === this.isChecked
									);
								} else {
									return (
										item.price >= this.$refs.min.value &&
										item.price <= this.$refs.max.value
									);
								}
							} else if(this.isChecked) {
								return +item.price >= +this.$refs.min.value && item.sale == this.isChecked;
							}else {
								return +item.price >= +this.$refs.min.value;
							}
						})
					);
				});
		},
		onPriceFilter() {
			fetch("https://ozon-615cf-default-rtdb.firebaseio.com/goods.json")
				.then((res) => res.json())
				.then((data) => {
					this.$store.dispatch(
						"setGoods",
						data.filter((item) => {
							if (this.$refs.max.value !='') {
								if (this.isChecked) {
									return (
										item.price >= this.$refs.min.value &&
										item.price <= this.$refs.max.value &&
										item.sale === this.isChecked
									);
								} else {
									return (
										item.price >= this.$refs.min.value &&
										item.price <= this.$refs.max.value
									);
								}
							} else if(this.isChecked) {
								return +item.price >= +this.$refs.min.value && item.sale == this.isChecked;
							}else {
								return +item.price >= +this.$refs.min.value;
							}
						})
					);
				});
		},
	},
};
</script>