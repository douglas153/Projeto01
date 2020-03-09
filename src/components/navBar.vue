<template>

<nav>
    <v-app-bar class="blue" >
        <v-app-bar-nav-icon flat @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
        <span class="font-weight-light">Cadastro</span>
        <span>Banco</span>    
        </v-toolbar-title>
        <v-spacer></v-spacer>
      
        <v-btn depressed right color="white" router :to="rout">
            <span>Log in</span>
            <v-icon right>mdi-face</v-icon>
        </v-btn>
    </v-app-bar>
    

    <v-navigation-drawer v-model="drawer" app class="blue">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-flex class="mt-4 mb-3">
        <Popup /> 
    </v-flex>

<!--<v-layout>
    <v-flex class="mt-4 mb-3">
        <Popup /> 
    </v-flex>
    </v-layout> -->



        <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list>
         

    </v-navigation-drawer>


</nav>

</template>

<script> 
import Popup from './Popup'


export default {
    components: {Popup},
    data () {
        return {
            drawer: false,
            rout: '/about',
            site: 'https://www.aliexpress.com',
            links: [
                {icon: 'mdi-alien' , text: 'Dashboard', route: '/'},
                {icon: 'mdi-email' , text: 'Projects', route: '/projects'},
                {icon: 'mdi-bug' , text: 'About', route: '/about'},
                {icon: 'mdi-briefcase' , text: 'Produtos', route: '/produtos'},
                {icon: 'mdi-cloud' , text: 'Listas', route: '/listas'},
            ]

            
            
        }
    }

     

}
</script>
