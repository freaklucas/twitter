<template>
    <div class="flex flex-col w-64">
        <button class="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue px-11">
            <icon name="twitter-brand" />
        </button>
        <div class="w-1/5 px-8 py-2">
            <button class="flex space-x-2 items-center text-white-600 p-2 hover:bg-blue-200 rounded-lg hover:text-blue-900 focus:outline-none mb-2">
                <icon name="twitter-home" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-1">Home</p>
            </button>
            <button class="flex space-x-2 items-center text-white-600 p-2 hover:bg-blue-200 rounded-lg hover:text-blue-900 focus:outline-none mb-2">
                <icon name="twitter-search" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-1">Explorar</p>
            </button>
            <button class="flex space-x-2 items-center text-white-600 p-2 hover:bg-blue-200 rounded-lg hover:text-blue-900 focus:outline-none mb-2">
                <icon name="twitter-notification" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-1">Notificações</p>
            </button>
            <button class="flex space-x-2 items-center text-white-600 p-2 hover:bg-blue-200 rounded-lg hover:text-blue-900 focus:outline-none mb-2">
                <icon name="twitter-message" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-2">Mensagens</p>
            </button>
            <button class="flex space-x-2 items-center text-white-600 p-2 hover:bg-blue-200 rounded-lg hover:text-blue-900 focus:outline-none mb-2">
                <icon name="twitter-save" />
                <p class="text-lg font-semibold whitespace-nowrap text-left hidden lg:block ml-1" >Itens Salvos</p>
            </button>
            <button class="flex space-x-2 items-center text-white-600 p-2 hover:bg-blue-200 rounded-lg hover:text-blue-900 focus:outline-none mb-2">
                <icon name="twitter-list" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-1">Listas</p>
            </button>
            <button class="flex space-x-2 items-center text-white-600 p-2 hover:bg-blue-200 rounded-lg hover:text-blue-900 focus:outline-none mb-2">
                <icon name="twitter-profile" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-1">Perfil</p>
            </button>
            <button class="flex space-x-2 items-center text-white-600 p-2 hover:bg-blue-200 rounded-lg hover:text-blue-900 focus:outline-none mb-2">
                <icon name="twitter-more" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-1">Mais</p>
            </button>
      </div>
    </div>
</template>

<script>
import Icon from '../Icon/index'

export default {
  components: {
    Icon
  }
}
</script>

<style>
</style>