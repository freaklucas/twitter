<template>
    <div class="flex flex-col w-64">
        <button class="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue px-11">
            <icon name="twitter-brand" />
        </button>
        <div class="w-1/5 px-8 py-2">
            <button :class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3`">
                <icon name="twitter-home" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-1">Home</p>
            </button>
            <button class="focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3">
                <icon name="twitter-search" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-1">Explorar</p>
            </button>
            <button class="focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3">
                <icon name="twitter-notification" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-1">Notificações</p>
            </button>
            <button class="focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3">
                <icon name="twitter-message" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-2">Mensagens</p>
            </button>
            <button class="focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 mr-1">
                <icon name="twitter-save" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-2" >Itens Salvos</p>
            </button>
            <button class="focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3">
                <icon name="twitter-list" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-1">Listas</p>
            </button>
            <button class="focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3">
                <icon name="twitter-profile" />
                <p class="text-lg font-semibold text-left hidden lg:block ml-1">Perfil</p>
            </button>
            <button class="focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3">
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