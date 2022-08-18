<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <router-link to="/contact">Contact us</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",
};
</script>

<style>
.nav {
  background-color: teal;
  overflow-x: hidden;
  position: fixed;
  left: 0;
  margin-left: auto;
  font-size: medium;
  left: 0;
  top: 10px;
  width: 100%;
}

.nav a {
  float: left;
  color: aliceblue;
  text-align: center;
  padding: 10px 14px;
  text-decoration: none;
  font-size: 12px;
  margin-left: 20px;
}

.nav a:hover {
  background-color: #3a5555;
  opacity: 1;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out 0.1s;
   }
</style>
