<template>
	<div class="search">
		<div class="search-wrapper">
			<input @input="searchItemGoods($event)"
				class="search-wrapper_input"
				type="text"
			/>
		</div>
		<div class="search-btn">
			<button></button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		searchItemGoods(event) {
			fetch("https://ozon-615cf-default-rtdb.firebaseio.com/goods.json")
				.then((res) => res.json())
				.then((data) => {
					this.$store.dispatch(
						"setGoods",
						data.filter((item) =>
							item.title
								.toLowerCase()
								.includes(event.target.value.toLowerCase())
						)
					);
				});
		},
	},
};
</script>