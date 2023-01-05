


const goods = {
    state: {
        goods: []
    },
    mutations: {
        setGoods(state, goods) {
            state.goods = goods
            
        }
    },
    actions: {
        setGoods({commit}, goods) {
            commit('setGoods', goods)
        }
    },
    getters: {
        getGoods(state) {
            return state.goods
           
        }
    }
}
export default goods