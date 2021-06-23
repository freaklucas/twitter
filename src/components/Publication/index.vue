<template>
    <div>
        <slot>
            <div class="px-4 py-3 border-b-8 border-lighter flex">
                <div>
                    <img src="../../../src/assets/images/profile.png" 
                        class="w-12 h-12 rounded-full border border-lighter" 
                    /> 
                </div>
                <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative">
                    <textarea v-model="tweet.content" placeholder="O que está acontecendo?" 
                        class="mt-3 pb-3 w-full focus:outline-none"
                    />
                    <div class="flex items-center">
                        <i class="text-lg text-blue mx-6 far fa-image"></i>
                        <i class="text-lg text-blue mx-6 fas fa-film"></i>
                        <i class="text-lg text-blue mx-6 far fa-chart-bar"></i>
                        <i class="text-lg text-blue mx-6 far fa-smile"></i>
                    </div>
                    <button type="submit"
                        class="h-7 px-3 text-white font-semibold bg-blue hover:bg-darkblue 
                        focus:outline-none rounded-full absolute bottom-0 right-0"
                        >
                        Tweetar
                    </button>
                </form>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tweet: [
                { content: ''}
            ]
        }
    },
    methods: {
        addNewTweet() {
            let newTweet = {
                content: this.tweet.content
            };
            this.tweets.push(newTweet)
        }
    }
}
</script>