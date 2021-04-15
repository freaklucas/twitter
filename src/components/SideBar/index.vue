<template>
    <div class="flex flex-col w-64" >
        <ul class="flex flex-col mt-3 list-none lg:px-6 py-1 flex mr-auto">
            <li class="flex items-center text-white-600 hover:bg-blue-200 rounded-full hover:text-blue-900 focus:outline-none mb-2">
                <icon name="twitter-brand" />
            </li>
        </ul>
        <ul class="flex flex-col mt-3 list-none lg:px-6 py-1 flex mr-auto mb-3"
            :class="{ 'active': isActive }"
            @click.prevent="toogle"
        >
            <li :class="{ 'bg-blue-200 bg-opacity-50': isActive }"

                        @click.prevent="toogle">
                <a href="#" class="flex space-x-3 items-center text-white-600 p-2 hover:bg-blue-200 rounded-full hover:text-blue-900 focus:outline-none mb-2">
                    <icon name="twitter-home" />
                    <span class="px-3 py-1 text-lg font-semibold text-center hidden lg:block ml-1 px-2">Home</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex space-x-3 items-center text-white-600 p-2 hover:bg-blue-200 rounded-full hover:text-blue-900 focus:outline-none mb-2">
                    <icon name="twitter-search" />
                    <span class="px-3 py-1 text-lg font-semibold text-center hidden lg:block ml-1 px-2">Explorar</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex space-x-3 items-center text-white-600 p-2 hover:bg-blue-200 rounded-full hover:text-blue-900 focus:outline-none mb-2">
                    <icon name="twitter-notification" />
                    <span class="px-3 py-1 text-lg font-semibold text-center hidden lg:block ml-1 px-2">Notificações</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex space-x-3 items-center text-white-600 p-2 hover:bg-blue-200 rounded-full hover:text-blue-900 focus:outline-none mb-2">
                    <icon name="twitter-message" />
                    <span class="px-3 py-1 text-lg font-semibold text-center hidden lg:block ml-1 px-2">Mensagens</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex space-x-3 items-center text-white-600 p-2 hover:bg-blue-200 rounded-full hover:text-blue-900 focus:outline-none mb-2">
                    <icon name="twitter-save" />
                    <span class="px-3 py-1 text-lg font-semibold text-center hidden lg:block ml-1 px-2">Itens salvos</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex space-x-3 items-center text-white-600 p-2 hover:bg-blue-200 rounded-full hover:text-blue-900 focus:outline-none mb-2">
                    <icon name="twitter-list" />
                    <span class="px-3 py-1 text-lg font-semibold text-center hidden lg:block ml-1 px-2">Listas</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex space-x-3 items-center text-white-600 p-2 hover:bg-blue-200 rounded-full hover:text-blue-900 focus:outline-none mb-2">
                    <icon name="twitter-profile" />
                    <span class="px-3 py-1 text-lg font-semibold text-center hidden lg:block ml-1 px-2">Perfil</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex space-x-3 items-center text-white-600 p-2 hover:bg-blue-200 rounded-full hover:text-blue-900 focus:outline-none mb-2">
                    <icon name="twitter-more" />
                    <span class="px-3 py-1 text-lg font-semibold text-center hidden lg:block ml-1 px-2">Mais</span>
                </a>
            </li>
      </ul>
    </div>
</template>

<script>


import Icon from '../Icon/index'

const COLORS = {
    all: {text: 'text-brand-blue', bg: 'bg-brand-blue'}
}

export default {
  components: {
    Icon
  },
  data: () => ({
      isActive: false
  }),
  methods: {
      toogle() {
          this.isActive = !this.active
      }
  }
}
</script>

<style>
</style>