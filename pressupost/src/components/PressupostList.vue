<template>
    <div class="list"  >
        <div>
            <b-form-input id="type-search" 
            type="search" 
            placeholder="Buscar presupuesto..."
            v-model="searchText"><label></label></b-form-input>
                <b-button class="btn btn-success btn-orden" @click="sortMode='sortByCost'">Ordenar por Coste</b-button>
                <b-button class="btn btn-success btn-orden" @click="sortMode='sortAlphabetically'">Ordenar A-Z</b-button>
                <b-button class="btn btn-success btn-orden" @click="sortMode=null, searchText=''">Reiniciar</b-button>
        </div>
        <div :key="index" v-for="(budget, index) in computedList">
            <ul class="listElem">
                <li>Nombre del Presupuesto:{{budget.name}}</li>
                <li>Cliente:{{budget.client}}</li>
                <li>Coste:{{budget.cost}}</li>
            </ul>
            <b-button pill variant="danger" @click="$emit('onClickDelete', budget)">Eliminar</b-button>
        </div>
    </div>
</template>
<script>
export default {
  name: "PressupostList",
  props:{
      budgetList:Array,
  },
  data(){
      return{
          sortMode:null,
          searchText:"",
      }
  },
  computed:{
    computedList: function(){
      const budgetListCopy = this.budgetList.slice();
      if(this.sortMode==="sortByCost"){
        budgetListCopy.sort((a,b)=>(a.cost > b.cost) ? 1:-1)
      } else if(this.sortMode==="sortAlphabetically"){
        budgetListCopy.sort((a,b)=>(a.name > b.name)? 1: -1)
      }
      return budgetListCopy.filter((budget) =>
        budget.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
.list{
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: whitesmoke;
    padding:10px;
    border-radius:10px;
}

.listElem{
    display:flex;
    flex-direction: column;
    padding-top:20px;
    list-style-type: none
}

.form-control{
    margin-bottom:10px;
}
.btn-orden{
    margin: 0px 5px
}
</style>