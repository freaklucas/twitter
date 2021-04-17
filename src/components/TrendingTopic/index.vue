<template>
        <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
      <input class="pl-10 rounded-full w-full p-2 bg-lighter text-sm focus:outline-none" placeholder="Buscar no twitter" />
      <i class="fas fa-search absolute left-0 top-0 mt-4 ml-9 text-sm text-light"></i>
      <div class="w-full rounded-lg bg-lightest p-3 mt-4">
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-bold">O que está acontecendo</p>
          <i class="fas fa-cog text-lg text-blue"></i>
        </div>
        <button v-for="trend in trending" :key="trend" 
          class="w-full flex justify-between hover:bg-lighter 
            p-3 border-t border-lighter focus:outline-none"
        >
          <div class="">
            <p class="text-sm text-left leading-tight text-dark rounded-full">{{ trend.top }}</p>
            <p class="font-bold text-left leading-tight">{{ trend.title }}</p>
            <p class="text-left leading-tight text-dark">{{ trend.bottom }}</p>
          </div>
          <i class="fas fa-angle-down text-lg text-dark"></i>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue 
          border-t border lighter focus:outline-none"
        >
          Mostrar mais
        </button> 
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      trending: [
        { top: 'Tecnologia - Assunto do momento', title: 'Até o Twitter', bottom: '83,7 mil Tweets' },
        { top: 'Programas de ficção científica & fantasia', title: 'Falcão', bottom: '19,4 mil Tweets' },
        { top: 'Covid-19 . AO VIVO', title: 'Goiás: as últimas notícias sobre a pandemia', bottom: '' },
        { top: 'Paulista, Serie A1 AO VIVO', title: 'Palmeiras x São Paulo', bottom: 'Assuntos do Momento: Daniel Alves' },
        { top: 'Big Brother Brasil . Assunto do momento', title: 'Juliette e Camila', bottom: '14,1 mil Tweets' },
      ]
    }
  }
}
</script>