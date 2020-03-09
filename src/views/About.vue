<template>
  <div class="about">

<h3 class="display-1">Novo Banco</h3>
    
<v-card flat class="pa2">
        <v-layout row wrap >
          <v-flex xs12 md4>
            <div class="title black--text" >Nome:</div>
             <v-text-field outlined v-model="blog.nome"></v-text-field>
             <div class="title	 black--text">Sigla:</div>
             <v-text-field outlined v-model="blog.sigla"></v-text-field>
             </v-flex>
          </v-layout>

       <v-container row>
     <div class="mt-4">Algo: </div>
      <v-checkbox v-model="blog.categories" value="John" ></v-checkbox>
      <div class="mt-4">segmented: </div>
      <v-checkbox v-model="blog.categories" value="Jacob" ></v-checkbox>
    </v-container>

<p>nome: {{blog.nome}}</p>

<p>sigla: {{blog.sigla}}</p>

<p v-for="category in blog.categories" :key="category">{{ category }}</p>


      </v-card>

<h3 class="display-1">Produtos</h3>
<v-container class="display-1" fluid>
  <v-card  class="pa5" height="400" color=" black--text" >
       <div color=" black--text" >
      <v-checkbox class="font-weight-black  red--text" v-model="checkbox1" :label="`CGI: ${checkbox1.toString()}`"></v-checkbox><br></div> 
      <v-checkbox class="font-weight-black"  v-model="checkbox2" :label="`CGV: ${checkbox2.toString()}`"></v-checkbox><br>
      <v-checkbox class="font-weight-black" v-model="checkbox3" :label="`Regulaçao Fundiaria: ${checkbox3.toString()}`"></v-checkbox><br>
      <v-checkbox class="font-weight-black" v-model="checkbox4" :label="`Financiamento Imovel: ${checkbox4.toString()}`"></v-checkbox><br>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  data () {
        return {
          checkbox1: true,
          checkbox2: true,
          checkbox3: true,
          checkbox4: true,
      radioGroup: 1,
      switch1:true,
     blog: {
     nome: "",
     sigla: "",
     categories: []
     }
      }
  }
}


</script>