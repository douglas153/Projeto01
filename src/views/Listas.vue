<template>
  <div>
    <list-product /> 
      



   
  </div>
</template>

<script>


import listTest from "../components/test/listTest"
export default {
  components: {

   "list-product": listTest,
    
  },
  data() {
    return {
      cont: "flawless sqn kappa ",
      
    };
  },
  computed: {

  },
  methods: {},
  created() {}
};

</script>

<style>