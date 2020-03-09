<template>
  <div class="home">
    <br />
    <br />
    <v-btn right depressed class="my-3 blue white--text" v-on:click="cpf = !cpf">
      <v-icon left>mdi-face</v-icon>
      <span>Novo Cadastro</span>
    </v-btn>

 
<component v-bind:is="component" :cpf="cpfCd"> </component>

<v-btn v-on:click="component = 'home-one'">Show home one</v-btn> 
<v-btn v-on:click="component =  'home-two'">Show home two</v-btn> 

    <div id="app">
      <v-app id="inspire">
        <v-data-table :headers="headers" :items="banks" :items-per-page="5" class="elevation-1" ></v-data-table>
      </v-app>
    </div>
  </div>
</template>


<script>
import produtosService from "../services/produtos";

import homeOne from '@/components/homeOne'
import homeTwo from '@/components/homeTwo'

export default {

  created() {
    produtosService
      .listar()
      .then(response => {
        // JSON responses are automatically parsed.
        this.banks = response.data;
      })
      .catch(e => {
        e;
      });
  },
  components: {
   'home-one':homeOne,
    'home-two':homeTwo,
  },
  data() {
    return {
      rout: "/about",
      component: 'home-one',
      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "ID"
        },

        { text: "Nome", value: "nome" },
        { text: "Sigla", value: "Sigla" },
        { text: "Data_Atual", value: "Data_Atual" },
        { text: "Açoes", value: "Açoes" }
      ],

      banks: [
        {
          ID: "", 
          nome: "",
          Sigla: "",
          Data_Atual: "",
          Açoes: "",
    
        },
      ],
      



      cpfCd: false, 
    };
  }
};
</script>

