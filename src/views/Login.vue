<template>
  <div class="login">
    <form class="box" v-on:submit.prevent="doLogin">
      <h1>Login</h1>
      <input type="text" placeholder="user name" v-model="username" />
      <input type="password" placeholder="password" v-model="password" />
      <input type="submit" value="Login">
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  methods: {
    doLogin() {
      this.$store.dispatch("login", {
        username: this.username,
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style>
.login {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #34495e;
}

.box {
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #191919;
  text-align: center;
}

.box h1 {
  color: white;
  /* text-transform: uppercase; */
  font-weight: 500;
}
.box input[type="text"], .box input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}

.box input[type="text"]:focus, .box input[type="password"]:focus {
  width: 220px;
  border-color: #2ecc71;
}

.box input[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 10px;
  width: 100px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.box input[type="submit"]:hover {
  background: #2ecc71;
}
</style>