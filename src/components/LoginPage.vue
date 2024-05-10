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
<script setup>
import ButtonComponent from "@/BasicComponents/ButtonComponent.vue";
import InputComponent from "@/BasicComponents/InputComponent.vue";
import axiosInstance from "./shared/apiInterceptor";
import { apiUrls } from "./shared/apiUrls";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { ref } from "vue";
import router from "@/router";
const btnname = ref("Login");
const formData = ref({
  usr: "",
  pwd: "",
});

function submitForm() {
  console.log(formData.value);

  axiosInstance
    .post(apiUrls.login, formData.value)
    .then((response) => {
      console.log(response.data, "response");

      localStorage.setItem("user", JSON.stringify(formData.value));
      toast.success("Login Successful", {
        position: "top-right",
      });
      setTimeout(() => {
        router.push({ name: "HomePage" });
      }, 1000);
    })
    .catch((error) => {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    });
}
</script>
