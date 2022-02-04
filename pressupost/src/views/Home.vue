<template>
  <div class="container d-flex justify-content-center">
    <form id="form" @submit.prevent>
      <div class="formCont">
        <h2>¿Qué quieres hacer?</h2>
          <div v-for="(opcion, index) in opciones" :key="index">
            <label class="opciones">
              <input class="casillas" type="checkbox" :value="index" v-model="checked"/>
              {{ opcion.txt }}: ({{ opcion.preu }}) €
            </label>
          </div>
          <div>
            <h3 class="total">Total: {{ getTotal() }}</h3>
          </div>
        </div>
      </form>
  </div>
</template>

<script>

export default {
  name: "Home",

  data() {
    return {
      opciones: [
        { txt: "Una página web", preu: 500 },
        { txt: "Una consultoría SEO", preu: 300 },
        { txt: "Una campaña de Google Ads", preu: 100 },
      ],
      checked: []
    };
  },
  
  methods: {
    getTotal() {
      let total = 0;
      this.checked.forEach((opcionIndex) => {
        total += this.opciones[opcionIndex].preu;
      });
      return total;
    },
  },
};


</script>


<style scoped>

  .opciones {
    font-size: 1.5rem;
  }
  .casillas {
    width: 20px;
    height: 20px;
  }

  .total {
    font-size: 1.5rem;
  }

  .formCont {
    border: 1px solid black;
    width: max-content;
    padding: 20px;
  }
</style>



