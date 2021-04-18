<template>
      <div class="w-full rounded-lg bg-lightest my-4">
        <div class="p-3">
          <p class="text-lg font-bold">Quem seguir</p>
        </div>
        <button v-for="friend in friends" :key="friend"
          class="w-full flex hover:bg-lighter 
            p-3 border-t border-lighter focus:outline-none"
        >
        <img :src="require(`../../../src/assets/images/${friend.src}`)" class="w-12 h-12 rounded-full border-lighter"/>
          <div class="hidden lg:block ml-4">
            <p class="text-sm font-bold leading-tight">{{ friend.name }}</p>
            <p class="text-sm leading-tight">{{ friend.handle }}</p>
          </div>
          <button class="ml-auto text-sm text-blue py-1 mb-6 px-4 rounded-full border-2 border-blue focus:outline-none">
            Seguir
          </button>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue 
          border-t border lighter focus:outline-none"
        >
          Mostrar mais
        </button>
      </div>
</template>

<script>
export default {
      data() {
    return {
      friends : [
        { src: 'fausto.png', name: 'Fausto Silva', handle: '@faustosilva' },
        { src: 'supla.png', name: 'Supla', handle: '@Sulpla' },
        { src: 'tiririca.png', name: 'Tiririca sem sobrenome', handle: '@tiririca' },
      ]
    }
  }
}
</script>