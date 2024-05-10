<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container">
      <h1 class="navbar-brand fs-3" href="#">Navbar</h1>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-flex justify-content-end"
        id="collapsibleNavId"
      >
        <form class="my-2 my-lg-0 d-flex justify-content-end">
          <button @click="logOut" class="btn my-2 my-sm-0" type="button">
            Logout
          </button>
        </form>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-light h-100">
        <tabs-component></tabs-component>
      </div>
      <div class="col-10">
        <router-view></router-view>
      </div>
    </div>
    <footer class="naren"></footer>
  </div>
</template>

<script setup>
import { toast } from "vue3-toastify";
import TabsComponent from "@/BasicComponents/TabsComponent.vue";

import router from "@/router";

// import { ref } from "vue";
function logOut() {
  localStorage.removeItem("user");
  toast.success("Logout Successful", {
    position: "top-right",
  });
  router.push({ name: "LoginPage" });
}
</script>


