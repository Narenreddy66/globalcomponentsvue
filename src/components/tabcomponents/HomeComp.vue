<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <input-component
          type="Date"
          :label="enterdate"
          v-model="selectedDate"
          :max="maxDate"
          name="Date"
        ></input-component>
      </div>
    </div>
  </div>
</template>
<script setup>
import InputComponent from "@/BasicComponents/InputComponent.vue";
</script>