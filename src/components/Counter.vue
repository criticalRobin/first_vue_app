<template>
  <h2>Counter</h2>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareValue }}</p>
  <div class="buttons">
    <button @click="increment()">+1</button>
    <button @click="decrement()">-1</button>
  </div>
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
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      if (this.counter === 0) return;
      this.counter--;
    },
  },
};
</script>

<style>
.buttons > button {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  padding: 5px 15px;
  color: white;
  font-weight: bold;
  margin: 0px 5px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
