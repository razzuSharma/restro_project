<template>
  <HeaderVue />
  <h1 class="font-weight-bold">User: {{userName}}</h1>
<p class="justify-items-end items-start">This is the list of the tables</p>
<div class="overflow-x-auto relative mt-8">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    S.N.
                </th>
                <th scope="col" class="py-3 px-6">
                    Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Address
                </th>
                <th scope="col" class="py-3 px-6">
                    Contact
                </th>
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="item in lists" :key="item.id">
                <td class="py-4 px-6">{{item.id}}</td>
                <td class="py-4 px-6 font-bold">{{item.name}}</td>
                <td class="py-4 px-6">{{item.address}}</td>
                <td class="py-4 px-6">{{item.contact}}</td>
                <td>
                  <button type="button" class="text-white bg-green-700 
                  hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 
                  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 
                  dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>

                  <button type="button" class=" text-white bg-red-700 
                  hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 
                  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 
                  dark:hover:bg-green-700 dark:focus:ring-green-800">Delete</button>


                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>
import axios from "axios";
import HeaderVue from "./Header.vue";
export default {
  name: "HomeVue",
  components: { HeaderVue },
  data() {
    return {
      userName: "",
      lists: [],
      errors: [],
    };
  },

  async mounted() {
    let apiData = await axios.get("http://localhost:3000/restro");
    this.lists = apiData.data;

    let userStatus = localStorage.getItem("signupAccount");
    this.userName = JSON.parse(userStatus).name;

    if (!userStatus) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style></style>
