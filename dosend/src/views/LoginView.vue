<template>
  <div id="card" style="width: 18rem">
    <img src="@/assets/piggybank.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        Planirajte i držite se svog popisa za kupovinu kako biste uštedjeli
        novac
      </p>
    </div>
  </div>

  <div class="about">
    <h1>Login page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <br />
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                v-model="username"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Upisi 
email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <br />
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Lozinka"
              />
            </div>
            <br />
            <button type="button" @click="login()" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
  <!-- -->
</template>

<style>
body {
  background-color: lightblue;
}
</style>

<script>
import { firebase } from "@/firebase";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.username);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((result) => {
          console.log("Prijava je uspijela!", result);
          this.$router.replace({path: '/'});
        })
        .catch(function (error) {
          console.error("Greska pri upisivanju lozinke/emaila", error);
        });
    },
  },
};
</script>
