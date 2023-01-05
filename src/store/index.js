import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import goods from './goods'
import cart from './cart'


const store = new Vuex.Store({
     
    modules: {
        goods,
        cart
    }

})
export default store