<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-center align-items-center">
      <div class="">
        <form @submit.prevent="submitForm">
          <InputComponent
            v-model="formData.usr"
            type="text"
            label=" email"
            name="usr"
          ></InputComponent>
          <InputComponent
            v-model="formData.pwd"
            label=" password"
            type="password"
            name="pwd"
          ></InputComponent>

          <button-component type="submit" :btn="btnname"></button-component>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonComponent from "@/BasicComponents/ButtonComponent.vue";
import InputComponent from "@/BasicComponents/InputComponent.vue";
import axiosInstance from "./shared/apiInterceptor";
import { apiUrls } from "./shared/apiUrls";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  components: {
    ButtonComponent,
    InputComponent,
  },
  data() {
    return {
      btnname: "Login",
      formData: { usr: "", pwd: "" },
    };
  },
  mounted() {},
  methods: {
    submitForm() {
      console.log(this.formData);

      axiosInstance
        .post(apiUrls.login, this.formData)
        .then((response) => {
          console.log(response.data, "response");

          localStorage.setItem("user", JSON.stringify(this.formData));
          toast.success("Login Successful", {
            position: "top-right",
          });
          setTimeout(() => {
            this.$router.push({ name: "HomePage" });
          }, 1000);
        })
        .catch((error) => {
          console.error(error);
          toast.error("An error occurred. Please try again later.");
        });
    },
  },
};
</script>
