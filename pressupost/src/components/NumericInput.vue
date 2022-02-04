<template>
  <div>
    <label> {{ labelText }}: </label>
    <button class="plus" @click="incrementValue">+</button>
    {{ value }}
    <button class="minus" @click="decrementValue">-</button>
    
  </div>
</template>

<script>
export default {
  name: "NumericInput",
  props: {
    value: Number,
    labelText: String,
  },
  methods: {
    incrementValue() {
      this.$emit("onchange", (this.value ?? 1) + 1);
    },
    decrementValue() {
      const value = this.value ?? 1;
      this.$emit("onchange", value > 1 ? value - 1 : value);
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
button {
  background-color: rgba(39, 174, 96,1.0);
  text-align: center;
  border: none;
  border-radius: 10%;
  color: white;
  width: 40px;
  height: 40px;
  padding: 2px 8px;
  margin: 5px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}
.plus:hover {
  background-color: rgba(39, 174, 96,0.5);
}
.minus:hover {
  background-color: rgba(39, 174, 96,0.5);
}
/* input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input {
  width: 20px;
  border: none;
  text-align: center;
  padding: 10px;
} */
</style>