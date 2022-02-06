<template>
    <div class="panel">
        <NumericInput
            labelText="Nº de páginas"
            :value="pages"
            @onchange="$emit('onchangepag', $event)"
            modalId="paginas"
            modalText="Aquí has de escoger el número de PÁGINAS que tendrá tu web"
        />
        <NumericInput 
            labelText="Nº de Idiomas"  
            :value="languages" 
            @onchange="$emit('onchangelang', $event)" 
            modalId="idiomas"
            modalText="Aquí has de escoger el número de IDIOMAS que tendrá tu web"
        />
      
    </div>
</template>
<script>
import NumericInput from './NumericInput'
export default {
    name: 'Panell',
    props:{
        pages: Number,
        languages:Number,
    },
    components:{
        NumericInput
    }
}
</script>
<style scoped>

.panel {
    padding:15px;
    margin-bottom: 5%;
    border: 1px solid black;
    max-width: fit-content;
    margin-right: auto;
    margin-left: auto;
}
</style>