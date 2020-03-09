<template>
 <div>
     <h2>home 2</h2>
     
     <p v-if="cpf">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
         Tempore ipsum deleniti perferendis expedita rem atque, earum nesciunt vel, d
         olorem, quam magni. Delectus rerum repellendus, cumque voluptatum amet omnis officiis fugiat.</p>


</div>   
</template>

<script>
export default {
    props: ['cpf'],

    data() {
        return {
            
        }
    }

}
</script>