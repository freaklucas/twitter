<template>
  <portal to="SideBar">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h2>Cabeçalho default do modal</h2>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <h2>default body</h2>
            </slot>
          </div>
        <div class="modal-footer">
          <slot name="footer">
            <h2>default footer</h2>
            <button class="modal-default-button" @click="$emit('close')">
              OK
            </button>
          </slot>
        </div>
        </div>
      </div>
    </div>
  </portal>
</template>

<script>

export default {
  
}
</script>