<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
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
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="#" aria-current="page"
              >Home <span class="visually-hidden">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Dropdown</a
            >
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item" href="#">Action 1</a>
              <a class="dropdown-item" href="#">Action 2</a>
            </div>
          </li>
        </ul>
        <form class="d-flex my-2 my-lg-0">
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

  <div class="row">
    <div class="col-3">
      <button
        class="bg-danger text-white rounded-3 border-0 p-2 gap-4"
        v-for="item in tabItems"
        :key="item.title"
        :tab="item.title"
        :to="item.route"
      >
        <component :is="item.icon" class="h-5 w-5" />
        <div>{{ item.title }}</div>
      </button>
      <input-component
        type="Date"
        :label="enterdate"
        v-model="selectedDate"
        :max="maxDate"
        name="Date"
      ></input-component>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import InputComponent from "@/BasicComponents/InputComponent.vue";
import { toast } from "vue3-toastify";

export default {
  components: { InputComponent },
  data() {
    return {
      selectedDate: "",
      tabItems: [
        {
          title: "Home",
          route: "/homecomp",
        },
        {
          title: "About",
          route: "/about",
        },
        {
          title: "Help",
          route: "/help",
        },
        {
          title: "Contact",
          route: "/contact",
        },
      ],
    };
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
  computed: {
    maxDate() {
      const currentDate = new Date();

      const maxYear = currentDate.getFullYear();
      const maxMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
      const maxDay = String(currentDate.getDate()).padStart(2, "0");
      return `${maxYear}-${maxMonth}-${maxDay}`;
    },
  },
};
</script>


