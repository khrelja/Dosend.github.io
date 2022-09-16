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
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Treba mi..."
            aria-label="Search"
          />
        </form>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

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
}
</style>
