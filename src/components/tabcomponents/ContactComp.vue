<template>
  <div class="card p-3 w-25">
    <form @submit.prevent="submitForm">
      <Input-component-vue
        type="text"
        label="employeename:"
        class="w-100"
        v-model="formData.employee_name"
      ></Input-component-vue>
      <Input-component-vue
        type="text"
        class="w-100"
        label="companyname:"
        v-model="formData.company"
      ></Input-component-vue>
      <Input-component-vue
        class="w-100"
        type="Date"
        label="from date:"
        v-model="formData.from_date"
      ></Input-component-vue>
      <Input-component-vue
        class="w-100"
        type="Date"
        label="to date:"
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
</template>
<script>
import InputComponentVue from "@/BasicComponents/InputComponent.vue";
import ButtonComponent from "@/BasicComponents/ButtonComponent.vue";
import axiosInstance from "../shared/apiInterceptor";
import { apiUrls, Doctypes } from "../shared/apiUrls";

export default {
  data() {
    return {
      formData: {
        to_date: "",
        from_date: "",
        employee_name: "",
        reason: "",
        company: "",
      },
    };
  },
  components: {
    InputComponentVue,
    ButtonComponent,
  },
  methods: {
    submitForm() {
      console.log(this.formData, "formftatdery");
      axiosInstance
        .post(
          apiUrls.resource + "/" + Doctypes.attendencerequest,
          this.formData
        )
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>