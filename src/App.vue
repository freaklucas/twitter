<template>
  <div id="app" class="flex container h-screen w-full">
    <side-bar/>
    <div class="w-1/2 h-full overflow-y-scrool">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Página inicial</h1>
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

