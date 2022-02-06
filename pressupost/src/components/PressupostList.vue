<template>
    <div class="list"  >
        <div>
            <b-form-input id="search" 
            type="search" 
            placeholder="Buscar presupuesto..."
            v-model="searchText"><label></label></b-form-input>
                <b-button class="btn btn-success btn-orden" @click="orderBy='orderByPreu'">Ordenar por costo</b-button>
                <b-button class="btn btn-success btn-orden" @click="orderBy='orderByAlph'">Ordenar A-Z</b-button>
                <b-button class="btn btn-success btn-orden" @click="orderBy=null, searchText=''">Reiniciar</b-button>
        </div>
        <div :key="index" v-for="(presu, index) in computedList">
            <hr>
            <ul class="listElem">
                <li>Nombre del presupuesto: {{presu.name}}</li>
                <li>Cliente: {{presu.client}}</li>
                <li>Costo: {{presu.costo}}</li>
            </ul>
            <hr>
            <b-button pill variant="danger" @click="$emit('delete', presu)">Eliminar</b-button>
        </div>
    </div>
</template>
<script>
export default {
  name: "PressupostList",
  props:{
      presupostArr:Array,
  },
  data(){
      return{
          orderBy:null,
          searchText:"",
      }
  },
  computed:{
    computedList: function(){
      const presupostArrOrd = this.presupostArr.slice();
      if(this.orderBy==="orderByPreu"){
        presupostArrOrd.sort((a,b)=>(a.costo > b.costo) ? 1:-1)
      } else if(this.orderBy==="orderByAlph"){
        presupostArrOrd.sort((a,b)=>(a.name > b.name)? 1: -1)
      }
      return presupostArrOrd.filter(presu => presu.name.toLowerCase().includes(this.searchText.toLowerCase())
      || presu.client.toLowerCase().includes(this.searchText.toLowerCase())
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
    background-color: rgb(242, 243, 205);
    padding:10px;
    border-radius:10px;
}

.listElem{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none
}

.form-control{
    margin-bottom:10px;
}
.btn-orden{
    margin: 0px 5px
}
</style>