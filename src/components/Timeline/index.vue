<template>
    <span>
        <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
            <h1 class="text-xl font-bold">Página inicial</h1>
            <i class="far fa-star text-xl text-blue"></i>
        </div>
        <div class="px-5 py-3 border-b-8 border-lighter flex">
            <div>
                <img src="../../../src/assets/images/profile.png" 
                    class="w-12 h-12 rounded-full border border-lighter" 
                /> 
            </div>
            <form class="w-full px-4 relative">
                <textarea placeholder="O que está acontecendo?" 
                    class="mt-3 pb-3 w-full focus:outline-none"
                />
                <div class="flex items-center">
                    <i class="text-lg text-blue mx-6 far fa-image"></i>
                    <i class="text-lg text-blue mx-6 fas fa-film"></i>
                    <i class="text-lg text-blue mx-6 far fa-chart-bar"></i>
                    <i class="text-lg text-blue mx-6 far fa-smile"></i>
                </div>
                <button 
                    class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue 
                    focus:outline-none rounded-full absolute bottom-0 right-0"
                    >
                    Tweetar
                </button>
            </form>
        </div>
        <div v-for="follow in following" v-bind:key="follow" class="w-full p-4 border-b hover:bg-lighter flex">
            <div class="flex-none mr-4">
                <img :src="require(`../../../src/assets/images/${follow.src}`)" class="h-12 w-12 rounded-full flex-none"/>
            </div>
            <div class="w-full ">
                <div class="flex items-center w-full ">
                    <p class="font-semibold">{{ follow.name }}</p>
                    <p class="text-sm text-dark ml-2">{{ follow.handle }}</p>
                    <p class="text-sm text-dark ml-2">{{ follow.time }}</p>
                    <i class="fas fa-angle-down text-dark ml-auto"></i>
                </div>
                <p class="py-2">{{ follow.tweet }}</p>
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center text-sm text-dark">
                        <i class="far fa-comment mr-3"></i>
                        <p>{{ follow.coments }}</p>
                    </div>
                    <div class="flex items-center text-sm text-dark">
                        <i class=" fas fa-retweet mr-3"></i>
                        <p>{{ follow.retweets }}</p>
                    </div>
                    <div class="flex items-center text-sm text-dark">
                        <i class=" far fa-heart mr-3"></i>
                        <p>{{ follow.like }}</p>
                    </div>
                    <div class="flex items-center text-sm text-dark">
                        <i class=" far fa-share-square mr-3"></i>
                    </div>
                </div>
            </div>
        </div>
    </span>
</template>

<script>

export default {
  data() {
    return {
        following: [
        { src: 'fausto.png', name: 'Fausto Silva', handle: '@faustosilva', time: '20s', tweet: 'Oloco meu!!!', coments: '1.000', retweets: '400', like: '9.000' },
        { src: 'supla.png', name: 'Supla', handle: '@Sulpla', time: '70s', tweet: 'Yeah, its is amazing cara!', coments: '700', retweets: '1.400', like: '1.000' },
        { src: 'tiririca.png', name: 'Tiririca sem sobrenome', handle: '@tiririca', time: '20 min', tweet: 'Queria fazer piada, mas piada não posso fazer, pois quem faz piada não faz lei e lei eu preciso de vc!', coments: '500', retweets: '100', like: '3.000' }
      ],
        trending: [
        { top: 'Tecnologia - Assunto do momento', title: 'Até o Twitter', bottom: '83,7 mil Tweets' },
        { top: 'Programas de ficção científica & fantasia', title: 'Falcão', bottom: '19,4 mil Tweets' },
        { top: 'Covid-19 . AO VIVO', title: 'Goiás: as últimas notícias sobre a pandemia', bottom: '' },
        { top: 'Paulista, Serie A1 AO VIVO', title: 'Palmeiras x São Paulo', bottom: 'Assuntos do Momento: Daniel Alves' },
        { top: 'Big Brother Brasil . Assunto do momento', title: 'Juliette e Camila', bottom: '14,1 mil Tweets' },
      ],
      friends : [
        { src: 'fausto.png', name: 'Fausto Silva', handle: '@faustosilva' },
        { src: 'supla.png', name: 'Supla', handle: '@Sulpla' },
        { src: 'tiririca.png', name: 'Tiririca sem sobrenome', handle: '@tiririca' },
      ],
    }
  }
}
</script>
