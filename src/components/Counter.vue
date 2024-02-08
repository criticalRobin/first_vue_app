<template>
  <h2>{{ customName }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareValue }}</p>
  <p data-testid="counter">{{ counter }}</p>
  <div class="buttons">
    <button @click="increment()">+1</button>
    <button @click="decrement()">-1</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    start: {
      typeof: Number,
      default: 0,
    },
    validator(value) {
      return value >= 0;
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  // similares a methods, pero computed se quedan en la cache
  computed: {
    getSquareValue() {
      return Math.pow(this.counter, 2);
    },
    customName() {
      return this.name === null || this.name === undefined
        ? "Contador"
        : this.name;
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
