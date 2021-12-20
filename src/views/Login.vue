<template>
    <form v-on:submit.prevent="doLogin">
        <label>User ID</label>
        <input type="text" placeholder="customer id" v-model="username" />
        <label>Password</label>
        <input type="password" placeholder="password" v-model="password" />
        <button type="submit">Login</button>
    </form>
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
      console.error(123123123);
    }
  }
};
</script>
