<template>
  <div id="app" class="flex container h-screen w-full">
    <div class=" w-1/5 border-r border-lighter px-8 py-2">
      <button class="focus:outline-none h-12 w-12 hover:bg-lightblue text-3xl  rounded-full text-blue">
        <i class="fab fa-twitter"></i>
      </button>
      <div>
        <button v-for="tab in tabs" @click="id = tab.id" 
          :class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 
          hover:bg-lightblue rounded-full mr-auto mb-3 ${ id === tab.id ? 'text-blue' : ''}`"
        >
          <i :class="`${tab.icon}  text-2xl mr-4 text-left `"></i>
          <p class="text-lg font-semibold text-left">{{ tab.title }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
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
      id: 'home'
    }
  },
}
</script>

