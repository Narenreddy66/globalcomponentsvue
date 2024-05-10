<template>
  <div class="mt-4">
    <table class="table table-hover table-striped">
      <tr>
        <th scope="col">S.No</th>
        <th scope="col">Employee Id</th>
        <th scope="col">Employee Name</th>
        <th scope="col">From_Date</th>
        <th scope="col">To_Date</th>
        <th scope="col">Reason</th>

        <th scope="col">Status</th>
      </tr>
      <tbody>
        <tr v-for="(employee, index) in AttendenceData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ employee.employee }}</td>
          <td>{{ employee.employee_name }}</td>
          <td>{{ employee.to_date }}</td>
          <td>{{ employee.from_date }}</td>
          <td>{{ employee.reason }}</td>
          <td
            v-if="employee.workflow_state === 'Approved'"
            class="text-success"
          >
            {{ employee.workflow_state }}
          </td>
          <td v-if="employee.workflow_state !== 'Approved'" class="text-danger">
            {{ employee.workflow_state }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosInstance from "../shared/apiInterceptor";
import { apiUrls, Doctypes } from "../shared/apiUrls";
const AttendenceData = ref([]);
onMounted(() => {
  fetchData();
});
function fetchData() {
  axiosInstance
    .get(apiUrls.resource + "/" + Doctypes.attendencerequest, {})
    .then((res) => {
      console.log(res);
      AttendenceData.value = res.data;
    })
    .catch((error) => {
      console.error(error);
    });
}
</script>