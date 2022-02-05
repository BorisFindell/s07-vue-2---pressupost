<template>
    <div class="benving">
        <h2>¡Bienvenidas/os!</h2>
        <p>Con esta app podrás calcular tus presupuestos de páginas web, consultorías o campañas de Google Ads <br> agregando número de páginas e idiomas y guardando tus presupuestos personalizados</p>
        <router-link to="/Home" class="btn-comenzar">¡Comenzar!</router-link> 
    </div>
</template>
<script>
export default {
    name:'Benvinguda',
}
</script>
<style scoped>
.benving{
    height: 100vh;
    width: max-content;
    background-color: rgb(241, 243, 145);
    padding:40px;
    margin-right: auto;
    margin-left: auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.btn-comenzar{
    padding:10px;
    margin:10px;
    background-color: rgb(131, 158, 245);
    border-radius:10px;
    color:white;
    cursor:pointer;
    font-size: 1rem;
    text-decoration: none;
    
}
</style>