import axios from "axios"

export default {
    namespaced: true, 

    //
    state: {
        jsonData: []
    }, 

    getters: {
        allJsonData: (state) => state.jsonData
    }, 

    mutations: {
        setJsonData: (state, jsonData) => (state.jsonData = jsonData)
    },
    actions: {
        async fetchAllJsonData({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            commit("setJsonData", response.data);
        }
    },
}