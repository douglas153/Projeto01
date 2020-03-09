import Vue from 'vue' 
import Vuex from 'vuex' 
import jsonList from './modules/teste/jsonList'

Vue.use(Vuex) 

export default new Vuex.Store ({
    modules: {
     jsonList: jsonList,
    }
})