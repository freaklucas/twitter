<template>
  <div id="app" class="flex container h-screen w-full">
    <!--side nav -->  
    <div clas="w-1/5 border-r border-lighter px-8 py-2">
      <button class="h-12 w-12 px-20 hover:bg-lightblue text-3xl rounded-full text-blue">
        <icon name="twitter-brand" />
      </button>
      <div>
        <button class="flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto">
          <icon name="twitter-home" />
        </button>
      </div>
      <div>
        <button class="flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto">
          <icon name="twitter-busca" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './components/Icon'


export default {
  name: 'App',
  components: {
    Icon
  },
  data() {
    return {

    }
  },
}
</script>

<style>
</style>
