const cart = {
    state: {
        cards: [],
        count: 0
    },
    mutations: {
        setCardsIncr(state, card) {
            state.cards.push(card)
            state.count++
            // console.log(state.cards)
            localStorage.setItem('cards', JSON.stringify(state.cards))


        },
        setCardsDecr(state, index) {
            state.cards.splice(index, 1)
            state.count--
            localStorage.setItem('cards', JSON.stringify(state.cards))
            if(state.count === 0) {
                localStorage.removeItem('cards')
            }

        },
        setCardsLocalStorage(state, cards) {
            state.cards = cards
            
        }
  
    },
    actions: {
        setCardsIncr({commit}, card) {
            commit('setCardsIncr', card)
        },
        setCardsDecr({commit}, card){
            commit('setCardsDecr', card)
        },
        setCardsLocalStorage({commit}, card){
            commit('setCardsLocalStorage', card)
        },

    },
    getters: {
        getCards(state) {
                return state.cards

        },
        getCount(state) {
                return state.count
        }
    }
}
export default cart