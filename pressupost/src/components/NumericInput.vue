<template>
  <div>
    <label> {{ labelText }}: </label>
    <button class="btn-style" @click="valueUp">+</button>
    {{ value }}
    <button class="btn-style" @click="valueDown">-</button>
   <b-button class="btn-info" size="sm" variant="primary" v-b-modal="modalId">
       <b-icon icon="exclamation-circle-fill" variant="light"></b-icon>
    </b-button>
    <b-modal :id="modalId" :ok-only="true" :ok-title="'¡Vale!'" :hide-header="true">{{ modalText }}</b-modal>
  </div>


</template>

<script>
export default {
  name: "NumericInput",
  props: {
    value: Number,
    labelText: String,
    modalId: String,
    modalText: String,
  },
  methods: {
    valueUp() {
      this.$emit("onchange", (this.value ?? 1) + 1);
    },
    valueDown() {
      const value = this.value ?? 1;
      this.$emit("onchange", value > 1 ? value - 1 : value);
    },
  },
};
</script>
<style scoped>
.btn-style {
  background-color: rgba(39, 174, 96,1.0);
  text-align: center;
  border: none;
  border-radius: 10%;
  color: white;
  width: 40px;
  height: 40px;
  padding: 2px 8px;
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
}
.btn-style:hover {
  background-color: rgba(39, 174, 96,0.5);
}

.btn-modal-style {
  background-color:rgba(255, 255, 255, 0);
  text-align: center;
  border-radius: 50%;
  color: black;
  border: none;
  width: 30px;
  height: 30px;
  padding: 2px 0px 0px 0px; 
  cursor: pointer;
}

.btn-info {
  margin-left: 15px;
}

</style>