<template >
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="grey" dark v-on="on">Open Dialog</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add new Project</h2>
      </v-card-title>
      
      <v-card-text >
          <v-form class="px-3" ref="form">
              
      <v-text-field label="title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"  ></v-text-field>

      <v-textarea label="information" v-model="info" prepend-icon="mdi-border-color" :rules="inputRules" ></v-textarea>

        <v-menu> 
             <template v-slot:activator="{ on }">
            <v-text-field v-model="due"  label="due date" prepend-icon="mdi-calendar" v-on="on " :rules="inputRules" ></v-text-field> </template>
            <v-date-picker v-model="due"></v-date-picker>
        </v-menu>



      <v-btn class="green" @click="submit">Add</v-btn>
      </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
        title: '',
        info: '',
        due: new Date().toISOString().substr(0, 10),
        inputRules: [
          v => v.length >= 3 || 'Minimo de 3 caracteres'  
        ]
    };
  },
  methods: {
      submit() {
        if(this.$refs.form.validate()){
          alert(this.title, this.info, this.due)
           }
      }
      
  }

}
</script>