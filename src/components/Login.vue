<template>
  <h1 class="font-bold">This is login page</h1>
  <div>
    <div>
      <h1 class="text-red-600">{{ errorMessage }}</h1>
    </div>
    <form @submit.prevent="submitLogin">
      <div>
        <label for="email">Email: </label>
        <input type="email" placeholder="enter email" v-model="email" />
      </div>
      <div>
        <label for="password">Password: </label>
        <input
          type="password"
          placeholder="enter password"
          v-model="password"
        />
      </div>
      <div>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginVue",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async submitLogin() {
      let loginData = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (loginData.status == 200 && loginData.data.length > 0) {
        localStorage.setItem("signupAccount", JSON.stringify(loginData.data[0]));
        this.$router.push({name: "Home"})
      } else {
        alert("Error in server to upload credentials");
      }
    },
  },
  mounted() {
    const userStatus = localStorage.getItem("signUpAccount");
    if (userStatus) {
      this.$router.push({name: "Home"})
    }
  },
};
</script>
