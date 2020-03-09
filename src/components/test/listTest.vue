<template>
    <div>
        <h2>Listas</h2>
        <div>
            <ul v-for="(list, i) in allJsonData" :key="i">
                <li>{{list.title}}</li>
            </ul>
            <span>{{allJsonData}}</span>
        </div>
    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
export default {

    data () {
        return { 
           cont: false,
        }
    },
    computed: 
        mapGetters("jsonList", ['allJsonData']),
    
    methods: {
      ...mapActions("jsonList", ['fetchAllJsonData'])
    },
    created(){
       this.fetchAllJsonData()
   } 
}
</script>

