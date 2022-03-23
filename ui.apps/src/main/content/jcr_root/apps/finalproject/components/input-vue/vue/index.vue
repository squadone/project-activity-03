<template>
  <div class="input-vue">
      <label :for="field">{{field}}</label>
      <input type="text" :name="field" :placeholder="field">
  </div>
</template>

<script>
export default {
  name: 'input-vue',
  props: {
    field: {
      type: String,
      default: 'Full Name',
    },
  },
};
</script>