<template>
  <div class="registraion">
    <div class="box">
      <form v-on:submit.prevent="doRegistration">
        <h1>Registration </h1>
        <input type="text" placeholder="user name" v-model="username" />
        <input type="email" placeholder="example@todo.com" v-model="email">
        <input type="password" placeholder="password" v-model="password1" />
        <input type="password" placeholder="confirm" v-model="password2" />
        <input type="submit" value="Registation">
      </form>
    </div>  
  </div>
</template>
<script>
export default {
  name: "Registration",
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
      email: ""
    };
  },
  methods: {
    doRegistration() {
      this.$store.dispatch("registration", {
        username: this.username,
        email: this.email,
        password1: this.password1,
        password2: this.password2
      });
      const self = this;
      setTimeout(function(){
        self.$router.push("/login");
      }, 100);
    }
  }
};
</script>

<style>
.registraion {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #34495e;
}

.box {
  width: 320px;
  padding: 40px 40px 10px;
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
.box input[type="text"], .box input[type="password"], .box input[type="email"] {
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

.box input[type="text"]:focus, .box input[type="password"]:focus, .box input[type="email"]:focus {
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
  width: 180px;
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