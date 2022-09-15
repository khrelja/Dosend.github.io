<template>
  <div class="card text-bg-dark">
    <img src="@/assets/home1.jpg" class="card-img" alt="..." />
    <div class="card-img-overlay">
      <h1 class="card-title">
        NASLOVNA<br />
        STRANICA
      </h1>
      <button type="button" class="btn btn-outline-primary">KLIKNI ME!</button>
    </div>
  </div>
  <div class="btn-2">
    <button type="button" class="btn btn-primary">+ NOVA LISTA</button>
  </div>
  <br />
</template>

<script>
export default {
  name: "Naslovnacard",
};
</script>

<style scoped>
h1 {
  text-align: left;
  padding-top: 180px;
}
button {
  width: 200px;
  margin-top: 170px;
}

.btn-primary {
  font-size: 50px;
  width: 100%;
  background-color: lightskyblue;
  margin-top: 40px;
}

.btn-group-vertical {
  width: 450px;
}

h2 {
  margin-top: 40px;
}
</style>