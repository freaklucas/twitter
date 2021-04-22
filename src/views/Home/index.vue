<template>
  <div class="flex container h-screen w-full">
    <side-bar/>
    <div class="w-1/2 h-full overflow-y-scrool">
      <timeline />
    </div>
    <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
      <trending-topic />  
      <who-follow />
    </div>
  </div>
</template>

<script>



import SideBar from '../../components/SideBar'
import TrendingTopic from '../../components/TrendingTopic'
import WhoFollow from '../../components/WhoFollow'
import Timeline from '../../components/Timeline'


export default {
  components: { SideBar, TrendingTopic, WhoFollow, Timeline },
  
}
</script>

