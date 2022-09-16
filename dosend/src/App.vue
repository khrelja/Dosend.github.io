<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/logo1.gif"
          alt=""
          height="50"
          class="d-inline-block align-top"
          loading="lazy"
        /> 
        DOSEND
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">Home </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login"> Login</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/signup"> SignUp</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/admin"> Admin</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
        </ul><!--
        <form class="d-flex" role="search">
          
          <input
          v-model="store.searchTerm"
            class="form-control me-2"
            type="search"
            placeholder="Treba mi..."
            aria-label="Search"
          /> 
        </form>-->
      </div>
    </nav>
<!-- {{store.searchTerm}} -->
    <div class="container">
      <router-view />
    </div>
  </div>
<br>
<br>
<br>



<footer>
<MDBContainer class="my-4" style="height: 3000px bg-color=lightskyblue ">
  
    <p>
      <strong
        >Svida ti se Dosend? Preporuci ga prijatelju!</strong>
    </p>
    <hr class="mt-5" />
    <p>
      Napravite popise u nekoliko sekundi i uvijek kupite ono što vam stvarno treba

    </p>
    <p>© </p>
    <br>
    <br>
    
    <MDBFooter
      bg="primary"
      :text="['white', 'center', 'lg-start']"
      class="fixed-bottom"
    >
      
      <MDBContainer class="p-4">
        
        <MDBRow>
          
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          
            
          </div>
          
          <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
            
            
          </MDBCol>
          
          <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
            
            
          </MDBCol>
          <!--Grid column-->
        </MDBRow>
        <!--Grid row-->
      </MDBContainer>
      <!-- Grid container -->
      
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
        <img src="@/assets/dosend.png" alt="">
        
      </div>
      
    </MDBFooter>
    
  </MDBContainer>

</footer>



</template>

<script>
/* import store from "@/store"

export default{
  name: 'app',
  data(){
    return{
    store,
  }
  }
}
*/
import {firebase} from "@/firebase";
firebase.auth().onAuthStateChanged(user => {
  
  if(user){
    //user is signed in
    console.log('***', user.email);
    store.currentUser = user.email;
  }
  else {
    //user is not signed in
    console.log('*** No user');
    store.currentUser = null;
}
});

export default{
  name:'app',
  data(){
    return{

    };
  },
  methods:{
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.push({name: 'login'});
      });
    },
  },
};


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    font-size: 20px;
    color: #2c3e50;
    text-decoration: none;
    /* space izmedu rijeci home login signup */
    margin: 0 16px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  body {
  background-color: lightblue;
}
}
</style>
