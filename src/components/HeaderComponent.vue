<template>
  <header>
    <nav>
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="navbar-wrapper d-flex justify-content-between align-items-center"
            >
              <a class="logo" href="/"></a>
              <div class="d-flex control-wrapper">
                <div class="catalog-button" @click="catalogOpen">
                  <button>
                    <span class="catalog-button_burger"></span
                    ><span class="catalog-button_text">Каталог</span>
                  </button>
                  <div class="catalog">
                    <ul
                      @click="runCatalogItem($event)"
                      v-if="isCatalogOpen"
                      class="catalog-list"
                    >
                      <li>Игровая приставка</li>
                      <li>Периферия для ПК</li>
                      <li>Игры и софт</li>
                    </ul>
                  </div>
                </div>
                <search-component />
              </div>
              <slot name="cartOpen"></slot>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import SearchComponent from "@/components/SearchComponent.vue";

export default {
  data() {
    return {
      isCatalogOpen: false,
    };
  },
  components: { SearchComponent },
  methods: {
    catalogOpen() {
      this.isCatalogOpen = !this.isCatalogOpen;
    },
    runCatalogItem(event) {
      fetch("https://ozon-615cf-default-rtdb.firebaseio.com/goods.json")
        .then((res) => res.json())
        .then((data) => {
          this.$store.dispatch(
            "setGoods",
            data.filter((item) =>
              item.category.includes(event.target.textContent)
            )
          );
        });
    },
  },
};
</script>
