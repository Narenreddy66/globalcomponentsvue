<template>
  <div>
    <label>{{ label }}</label>
    <input
      class="form-control"
      :type="type"
      :placeholder="`Enter ${label}`"
      v-model="inputValue"
    /><br />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      inputValue: this.modelValue,
    };
  },
  watch: {
    inputValue(newVal) {
      this.$emit("update:modelValue", newVal);
    },
    modelValue(newVal) {
      this.inputValue = newVal;
    },
  },
};
</script>
