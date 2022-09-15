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
    <h1>This is an login page</h1>
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
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Lozinka"
              />
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Submit</button>
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