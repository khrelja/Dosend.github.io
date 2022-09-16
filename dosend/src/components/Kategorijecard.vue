<template>
  <div class="list-group">
    <router-link :to="{ path: 'items' }"><button type="button" class="list-group-item list-group-item-action"><h2>Ugljikohidrati</h2></button></router-link>
    <router-link :to="{ path: 'items' }"><button type="button" class="list-group-item list-group-item-action"><h2>Meso</h2></button></router-link>
    <router-link :to="{ path: 'items' }"><button type="button" class="list-group-item list-group-item-action"><h2>Sirevi</h2></button></router-link>
    <router-link :to="{ path: 'items' }"><button type="button" class="list-group-item list-group-item-action"><h2>Riba</h2></button></router-link>
    <router-link :to="{ path: 'items' }"><button type="button" class="list-group-item list-group-item-action"><h2>Voce</h2></button></router-link>
  </div>
</template>

<script>
export default {
  name: "Kategorije.card",
};
</script>


<style scoped>
button:hover {
  background-color: lightskyblue;
}

a{
    text-decoration: none;
}


button{
    background-color: lightcyan;
}
</style>
