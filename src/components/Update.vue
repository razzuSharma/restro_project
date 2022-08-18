<template>
  <HeaderVue />
  <h1>This is a update restaurante page</h1>
  <form>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" v-model="restro.name" />
    <label for="address">Address</label>
    <input type="text" id="address" name="address" v-model="restro.address" />
    <label for="contact">Contact</label>
    <input type="text" id="contact" name="contact" v-model="restro.contact" />
    <button class="button" type="button" v-on:click="updateForm">Update</button>
  </form>
</template>

<script>
import HeaderVue from "./Header.vue";
export default {
  name: "UpdateVue",
  components: { HeaderVue },
  data() {
    return {
      restro: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods:{
    updateForm() {
      
    }
  }
};
</script>

<style></style>
