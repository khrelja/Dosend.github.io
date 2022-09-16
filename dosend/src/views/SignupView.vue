<template>
  <div id="card" style="width: 11rem">
    <img src="@/assets/shop.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">Nikada ne zaboravite što kupiti!</p>
    </div>
  </div>

  <div class="about">
    <h1>Sign up page</h1>
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
              <label for="exampleInputPassword1">Lozinka</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Lozinka"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="exampleInputPassword1">Ponovi Lozinku</label>
              <input
                type="password"
                v-model="passwordRepeat"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Lozinka"
              />
            </div>
            <br />
            <button type="button" @click="signup" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(function () {
          console.log("Registracija je uspijela");
        })
        .catch(function (error) {
          console.error("Kriva lozinka/email", error);
        });
      console.log("Continue");
    },
  },
};
</script>

