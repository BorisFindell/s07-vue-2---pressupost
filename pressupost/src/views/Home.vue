<template>
  <div class="container d-flex justify-content-center mt-4 ">
    <router-link to="/" class="btn btn-primary btn-volver">
      <h6>Volver</h6>
    </router-link>
    <form id="form" @submit.prevent>
      <div class="formCont">
        <label>
          Presupuesto:
          <input type="text" v-model="presupesto" />
        </label>
        <label>
          Cliente:
          <input type="text" v-model="client" />
        </label>
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
          <input class="saveButton btn-success" type="submit" value="Guardar" @click="saveList"/>
        </div>
        
      </form>

      <PressupostList 
        v-if="presList.length > 0" 
        :budgetList="presList" 
        @onClickDelete="updateList"
      />
  </div>
</template>

<script>

import Panell from "../components/Panell.vue";
import PressupostList from "../components/PressupostList.vue";

export default {
  name: "Home",
  components: {
    Panell, PressupostList
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
      client:"",
      presupesto:"",
      presList:[],
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
    saveList(){
      this.presList.push({
        name: this.presupesto,
        client: this.client,
        cost: this.getTotal()
      });
      this.client = "";
      this.presupesto = "";
      this.pages = 1;
      this.languages=1;
      this.checked=[];
      
    },
    updateList(budget){
      const newList = this.presList.filter( b =>
        budget !== b
      )
      this.presList = newList
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
    margin-top: 25%;
  }
  .btn-volver {
    height: 30px;
    align-content: center;
    text-align: center;
    margin-right: 20px;
  }

.saveButton {
  font-size: 1rem;
  cursor: pointer;
  border-radius: 10px;
}
  
</style>