<template>
  <div id="app">
    <input
      v-model="message"
      type="text">
      <h2 class="message">{{ message }}</h2>
      <h3>Some Other Message222223332</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '헬로월드',
    };
  },
};
</script>

<style>
.message {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: blue;
}
</style>