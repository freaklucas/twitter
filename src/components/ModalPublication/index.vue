<template>
    <div class="flex justify-between">
       <hr>
    </div>
    <div class="mt-16">
        <button @click="close" class="text-4xl text-gray-600 focus:outline-none">
            &times; 
        </button>
        <div class="font-serif">
            <textarea placeholder="O que está acontecendo?" />
        </div>
        <button 
            @click="() => emit('login')"
            class="font-bold bg-blue ">
            Enviar
            
        </button>
    </div>
</template>

<script>



</script>

<style scoped>

</style>