<template>
  <div
    class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-back bg-opacity-50"
  >
    <div class="fixed inset-0 transition-opacity">
      <div
        class="absolute inset-0 bg-gray-500 opacity-75"
      ></div>
    </div>
    <div
      class="z-10 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div class="bg-white px-4 pt-4 pb-4 sm:p-5 sm:pb-5">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div class="flex items-center justify-between mb-4">
              <h2 class="">Teste de modal :)</h2>
              <hr />
              <button @click.prevent="handleClose" type="submit">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="open-modal">
                <slot>
                  <publication />
                </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Publication from '../Publication'

export default {
  components: {
    Publication
  },
  methods: {
    handleClose() {
      this.$emit("close")
    }
  }
}
</script>