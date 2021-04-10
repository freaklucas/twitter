<template>
  <div id="app" class="flex container h-screen w-full border-r border-lighter">
    <div class=" w-1/4 border-r border-lighter px-8 py-2">
    <side-bar />
    </div>
  </div>
</template>

<script>

import SideBar from './components/SideBar'

export default {
  name: 'App',
  components: {
    SideBar
  },
  data() {
    return {

    }
  },
}
</script>

