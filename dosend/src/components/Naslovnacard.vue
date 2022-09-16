<template><div>
  <div  class ="col-lg-12 ">
  <div class="card text-bg-dark">
    <img src="@/assets/home1.jpg" class="card-img" alt="..." />
    <div class="card-img-overlay">
      <h1 class="card-title">
        NASLOVNA<br />
        STRANICA
      </h1>
      <router-link :to="{ path: 'items' }"><button type="button" class="btn btn-outline-primary">KLIKNI ME!</button></router-link>
    </div>
  </div>
  <div class="btn-2">
    <router-link :to="{ path: '/mojalista' }"><button type="button" class="btn btn-primary">+ NOVA LISTA</button></router-link>
  </div>
  <br />
          </div>
          </div>
</template>

<script>


export default {
  name: "Naslovnacard",
};
</script>

<style scoped>
body {
  background-color: lightblue;
} 
h1 {
  text-align: left;
  padding-top: auto;
}
button {
  width: 200px;
}

.btn-primary {
  font-size: 50px;
  width: 100%;
  background-color: lightskyblue;
  margin-top: 40px;
}

.btn-group-vertical {
  width: auto;
}

h2 {
  margin-top: 40px;
}
</style>