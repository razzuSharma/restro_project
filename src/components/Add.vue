<template>
  <HeaderVue />
  <h1>This is a add restaurant page</h1>
  <form>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" v-model="restro.name" />
    <label for="address">Address</label>
    <input type="text" id="address" name="address" v-model="restro.address" />
    <label for="contact">Contact</label>
    <input type="text" id="contact" name="contact" v-model="restro.contact" />
    <button class="button" type="button" v-on:click="submitForm">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';
import HeaderVue  from './Header.vue';
// import HomeVue from './Home.vue';
export default {
  name: "AddVue",
  components: {HeaderVue},
  data() {
    return {
      restro: {
      name: '',
      address: "",
      contact: ""
      }

    }
  },
  methods: {
    async submitForm()
    {
      const resultData = await axios.post("http://localhost:3000/restro" , {
        name: this.restro.name,
        address: this.restro.address,
        contact: this.restro.contact,
      });
      if (resultData.status == 201) {
        this.$router.push({name:'HomeVue'});
      } else 
    {
      console.warn('Error in server')
    }
    }
  }

};
</script>
<style>
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 4px;
}
</style>
