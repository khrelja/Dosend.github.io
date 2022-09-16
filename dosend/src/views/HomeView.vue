<template>
  <div class="row">
    <div class="cols">
      <Naslovnacard />
    </div>
    <div class="col">
      <h2>KATEGORIJE HRANE</h2>
      <Kategorijecard />
    </div>
  </div>
</template>



<script>
// @ is an alias to /src
import Naslovnacard from "@/components/Naslovnacard.vue";
import Kategorijecard from "@/components/Kategorijecard.vue";

export default {
  path: "Homeiew",
  data: function(){
    return{

    };
  },
  methods:{
    
  },
  components: {
    Naslovnacard,
    Kategorijecard,
  },
};
</script>

<style scoped>
body {
  background-color: lightblue;
}
</style>