<template>
  <div class="checkbox-vue">
      <input type="checkbox" :name="field">
      <label :for="field" >{{field}}</label>
  </div>
</template>

<script>
export default {
  name: 'checkbox-vue',
  props: {
    field: {
      type: String,
      default: 'Full Name',
    },
  },
};
</script>
