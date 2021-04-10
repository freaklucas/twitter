<template>
  <component :is="name" v-bind="$props" />
</template>

<script>

import TwitterBrand from './TwitterBrand'
import TwitterHome from './TwitterHome'
import TwitterSearch from './TwitterSearch'
import TwitterNotification from './TwitterNotification'
import TwitterProfile from './TwitterProfile'
import TwitterSave from './TwitterSave'
import TwitterMore from './TwitterMore'
import TwitterMessage from './TwitterMessage'
import TwitterList from './TwitterList'

export default {
    components: {
        TwitterBrand,
        TwitterHome,
        TwitterSearch,
        TwitterNotification,
        TwitterProfile,
        TwitterSave,
        TwitterMore,
        TwitterMessage,
        TwitterList
    },
    props: {
        name: { type: String, required: true }
    }
}
</script>

<style>

</style>