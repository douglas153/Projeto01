<template> 
    <div>
        <slot> 
<p v-if="cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium inventore, u
            llam delectus quasi reiciendis corrupti ex illo impedit quidem obcaecati, non a
            speriores optio dolorem error, eveniet libero? Velit, deleniti numquam.</p>
            
        </slot>

        
        

        
           
        

       

             
    </div>
</template> 

<script>
import { bus } from '../main';



export default {
    props: ['title', 'cpf', 'cont'],
    data () {
        return {
            message: '',
           
            
        

        }
    },
    created(){
            bus.$on('cpfChanged', (data) => {
            this.cont = data;
        });
    },
    

  
    }


 </script> 