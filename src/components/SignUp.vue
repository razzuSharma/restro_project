<template>
  <div>
    <h1 class="font-bold">Sign Up Form</h1>
  </div>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Name :</label>
      <input type="text" v-model="name" required />
      <label>Email :</label>
      <input type="email" v-model="email" required />

      <label>Password :</label>
      <input type="password" v-model="password" required />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>
      <div>
        <input type="checkbox" v-model="terms" required />
        <label>Please accept terms and conditions</label>
      </div>
      <div class="button">
        <button
          class="submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign up here
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      terms: false,
      passwordError: "",
    };
  },
  methods: {
    async handleSubmit() {
      const apiData = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,  
        password: this.password,
        terms: this.terms,
        passwordError: this.passwordError,
      });
      localStorage.setItem('signupAccount', JSON.stringify(apiData.data));
      this.$router.push({ name: "Login" });
    },
  },

  mounted() {
    const userStatus = localStorage.getItem('signupAccount');
    if (userStatus) {
      this.$router.push({ name: 'Home' });
    }
  },
};
</script>

<style>
form {
  max-width: 600px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: bordre-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  background: #eee;
}

button {
  background: rgb(7, 24, 7);
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0000;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
