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
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <form class="d-flex justify-content-end my-2 my-lg-0">
          <input
            class="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            @click="logOut"
            class="btn btn-outline-success my-2 my-sm-0"
            type="button"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <tabs-component></tabs-component>
      </div>
      <div class="col-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import TabsComponent from "@/BasicComponents/TabsComponent.vue";

export default {
  components: { TabsComponent },
  data() {
    return {
      // maxDate: new Date().toISOString().split("T")[0],
    };
  },
  mounted() {
    console.log(this.selectedDate, "selecteddtae");
  },
  methods: {
    logOut() {
      localStorage.removeItem("user");
      toast.success("Logout Successful", {
        position: "top-right",
      });
      this.$router.push({ name: "LoginPage" });
    },
  },
  // dateChange() {
  //   console.log(this.selectedDate);
  // },
};
</script>


