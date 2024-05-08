<template>
  <button :type="type" class="btn btn-danger text-white mt-4 m-auto">
    {{ btn }}
  </button>
  <!-- <button class="btn btn-danger text-white">Login</button> -->
</template>
<script>
export default {
  props: {
    btn: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "submit",
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>