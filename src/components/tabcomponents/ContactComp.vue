<template>
  <div class="mt-5">
    <div class="card shadow p-3 w-25">
      <form @submit.prevent="submitForm">
        <Input-component-vue
          type="text"
          label="Employeename:"
          class="w-100"
          v-model="formData.employee"
        ></Input-component-vue>
        <Input-component-vue
          type="text"
          class="w-100"
          label="Companyname:"
          v-model="formData.company"
        ></Input-component-vue>
        <Input-component-vue
          class="w-100"
          type="Date"
          label="From date:"
          v-model="formData.from_date"
        ></Input-component-vue>
        <Input-component-vue
          class="w-100"
          type="Date"
          label="To date:"
          v-model="formData.to_date"
        ></Input-component-vue>
        <Input-component-vue
          class="w-100"
          type="text"
          label="Reason:"
          v-model="formData.reason"
        ></Input-component-vue>
        <button-component btn="Submit" type="submit"></button-component>
      </form>
    </div>
  </div>
</template>
<script setup >
import InputComponentVue from "@/BasicComponents/InputComponent.vue";
import ButtonComponent from "@/BasicComponents/ButtonComponent.vue";
import axiosInstance from "../shared/apiInterceptor";
import { apiUrls, Doctypes } from "../shared/apiUrls";

import { ref } from "vue";
const formData = ref({
  to_date: "",
  from_date: "",
  employee: "",
  reason: "",
  company: "",
});

function submitForm() {
  console.log("Submit button clicked");
  const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

  const headers = {
    "X-CSRFToken": csrfToken,
  };

  axiosInstance
    .post(apiUrls.resource + "/" + Doctypes.attendencerequest, formData.value, {
      headers,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
    });
}
</script>