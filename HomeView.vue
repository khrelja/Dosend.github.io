<template>
  <div class="row">
    <div class="col-9">
      <Naslovnacard />
    </div>
    <div class="col-3">
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
  name: "HomeView",
  components: {
    Naslovnacard,
    Kategorijecard,
  },
};
</script>
