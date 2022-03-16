<template>
  <div class="hello-vue">
    <h1>{{ propH1 }}</h1>
    <p>{{ propP }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hello-vue',
  props: {
    propH1: {
      type: String,
      default: 'Hello Vue!',
    },
    propP: {
      type: String,
      default: 'Parágrafo',
    },
  },
};
</script>