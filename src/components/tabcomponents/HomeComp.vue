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
    <h1>hello world</h1>
  </div>
</template>
<script setup>
import InputComponent from "@/BasicComponents/InputComponent.vue";
</script>
<style scoped>
h1 {
  font-size: 100px;
  background-image: url("https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg");
  /* background-clip:; */
  background-size: contain;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>