<template>
  <h2>Counter</h2>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareValue }}</p>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 5,
    };
  },
  // similares a methods, pero computed se quedan en la cache
  computed: {
    getSquareValue() {
      return Math.pow(this.counter, 2);
    },
  },
};
</script>

<style></style>
