<template>
    <div class="panel">
        <NumericInput
            labelText="Nº de páginas"
            :value="pages"
            @onchange="$emit('onchangepages', $event)"
        />
        <NumericInput 
            labelText="Nº de Idiomas"  
            :value="languages" 
            @onchange="$emit('onchangelanguages', $event)" 
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
    border: 1px solid black;
    border-color:thistle;
}
</style>