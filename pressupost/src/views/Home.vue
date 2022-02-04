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
            <Panell
              v-if="index === 0 && checked.includes(0)"
              @onchangepages="updatePages"
              @onchangelanguages="updateLanguages"
              :service-index="index"
              :pages="pages"
              :languages="languages"
            />
          </div>
          <div>
            <h3 class="total">Total: {{ getTotal() }}</h3>
          </div>
        </div>
      </form>
  </div>
</template>

<script>

import Panell from "../components/Panell.vue";


export default {
  name: "Home",
  components: {
    Panell
  },

  data() {
    return {
      opciones: [
        { txt: "Una página web", preu: 500 },
        { txt: "Una consultoría SEO", preu: 300 },
        { txt: "Una campaña de Google Ads", preu: 100 },
      ],
      checked: [],
      pages: 1,
      languages: 1,
    };
  },
  
  methods: {
    getTotal() {
      let total = 0;
      this.checked.forEach((opcionIndex) => {
        total += this.opciones[opcionIndex].preu;
      });
      if (this.checked.includes(0)) {
        return (total += this.pages * this.languages * 30);
      }
      return total;
    },
    updatePages(value) {
      this.pages = value;
    },
    updateLanguages(value) {
      this.languages = value;
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



