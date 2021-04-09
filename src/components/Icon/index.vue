<template>
  <component :is="name" v-bind="$props" />
</template>

<script>

import TwitterBrand from './TwitterBrand'
import TwitterHome from './TwitterHome'
import TwitterBusca from './TwitterBusca'

export default {
    components: {
        TwitterBrand,
        TwitterHome,
        TwitterBusca
    },
    props: {
        name: { type: String, required: true }
    }
}
</script>

<style>

</style>