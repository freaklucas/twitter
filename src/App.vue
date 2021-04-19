<template>
  <div id="app" class="flex container h-screen w-full">
    <side-bar/>
    <div class="w-1/2 h-full overflow-y-scrool">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Página inicial</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="px-5 py-3 border-b-8 border-lighter flex">
        <div>
          <img src="../src/assets/images/profile.png" 
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
      <div class="w-full p-4 border-b hover:bg-lighter flex">
        <div class="flex-none mr-4">
          <img src="" class="h-12 w-12 rounded-full flex-none"/>
        </div>
      </div>
    </div>
    <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
      <trending-topic />  
      <who-follow />
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import TrendingTopic from './components/TrendingTopic'
import WhoFollow from './components/WhoFollow'

export default {
  name: 'App',
  components: { SideBar, TrendingTopic, WhoFollow },
  data() {
    return {
      following: [
        { src: 'fausto.png', name: 'Fausto Silva', handle: '@faustosilva', time: '20s', tweet: 'Oloco meu!!!', coments: '1.000', retweets: '400', like: '9.000' },
        { src: 'supla.png', name: 'Supla', handle: '@Sulpla', time: '70s', tweet: 'Yeah, its is amazing cara!', coments: '700', retweets: '1.400', like: '1.000' },
        { src: 'tiririca.png', name: 'Tiririca sem sobrenome', handle: '@tiririca', time: '20 min', tweet: 'Queria fazer piada, mas piada não posso fazer, pois quem faz piada não faz lei e lei eu preciso de vc!', coments: '500', retweets: '100', like: '3.000' }
      ]
    }
  }
}
</script>

