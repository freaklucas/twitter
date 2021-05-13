<template>
    <div class="lg:w-1/5 border-r border-lighter lpx-2 lg:px-8 py-2 flex flex-col justify-between">
      <div>
        <button class="focus:outline-none h-12 w-12 hover:bg-lightblue text-3xl  rounded-full text-blue">
          <i class="fab fa-twitter"></i>
        </button>
        <div>
          <button v-for="tab in tabs" @click="id = tab.id" :key="tab.id"
            :class="`focus:outline-none hover:text-blue flex items-center py-2 px-3
            hover:bg-lightblue rounded-full mr-auto mb-3 ${ id === tab.id ? 'text-blue' : ''}`"
          >
            <i :class="`${tab.icon}  text-2xl mr-1 text-left `"></i>
            <p class="text-lg font-semibold text-left hidden lg:block whitespace-nowrap">{{ tab.title }}</p>
          </button>
          <button class="text-white bg-blue rounded-full font-semibold 
              focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3
             hover:bg-darkblue mb-8"
             
          >
            <p class="hidden lg:block" @click="openModal">Tweetar</p>
            <modal-factory v-model="modalOpen" />
            
            <i class="fas fa-plus lg:hidden"></i>
          </button>
        </div>
      </div>
      <div class="lg:w-full relative">
        <button @click="dropdown = true"  class="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none">
          <img src="../../assets/images/profile.png" class="w-12 h-12 rounded-full border-lighter"/>
          <div class="hidden lg:block ml-4">
            <p class="text-sm font-bold leading-tight">William Bonner</p>
            <p class="text-sm leading-tight">@williambonner</p>
          </div>
          <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
        </button>
        <div v-if="dropdown === true" class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-12">
          <button @click="dropdown = false"  class="p-3 flex items-center w-full hover:bg-lightest  p-2 focus:outline-none">
          <img src="../../assets/images/profile.png" class="w-12 h-12 rounded-full border-lighter"/>
          <div class="ml-4">
            <p class="text-sm font-bold leading-tight">William Bonner</p>
            <p class="text-sm leading-tight">@williambonner</p>
          </div>
          <i class="fas fa-check ml-auto test-blue"></i>
        </button>
        <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
          Adicionar uma conta existente
        </button>
        <button  @click="()=> this.$router.push({name: 'Login'})" 
          class="w-full text-left hover:bg-lightest border-t
           border-lighter p-3 test-sm focus:outline-none"
        >
          Sair de @williambonner
        </button>
        </div>
      </div>
    </div>
</template>

<script>
import ModalFactory from '../ModalFactory'
export default {  
  components: {ModalFactory},
    data() {
    return {
      tabs: [
        { icon: 'fas fa-home', title: 'Página inicial', id: 'home' },
        { icon: 'fas fa-hashtag', title: 'Explorar', id: 'explore' },
        { icon: 'fas fa-bell', title: 'Notificações', id: 'notifications' },
        { icon: 'fas fa-envelope', title: 'Mensagens', id: 'messages' },
        { icon: 'fas fa-bookmark', title: 'Itens salvos', id: 'bookmarks' },
        { icon: 'fas fa-clipboard-list', title: 'Listas', id: 'lists' },
        { icon: 'fas fa-user', title: 'Perfil', id: 'profile' },
        { icon: 'fas fa-ellipsis-h', title: 'Mais', id: 'more' },
      ],
      id: 'home',
      dropdown: false,
      modalOpen: false
    }
  },
  methods: {
    openModal() {
      this.openModal = !this.openModal
    }
  }
}
</script>

<style>
</style>