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
            class="w-full focus:outline-none"
          />
          <div class="flex items-center">
            <i class="text-lg text-blue mx-6 far fa-image"></i>
            <i class="text-lg text-blue mx-6 fas fa-film"></i>
            <i class="text-lg text-blue mx-6 far fa-chart-bar"></i>
            <i class="text-lg text-blue mx-6 far fa-smile"></i>
          </div>
        </form>
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
    return {}
  }
}
</script>

