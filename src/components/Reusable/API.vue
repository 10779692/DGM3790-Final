<template>
<div class="joke_generator">
    <div class="headline text-xs-center">Care For a Joke Before You Leave?</div><br>
    <div v-if="currentJoke">
        {{currentJoke.joke}}
    </div>
    <br>
    <v-btn @click="fetchRandomJoke()">Generate Joke</v-btn>
</div>
</template>
<script>
import axios from 'axios'
const API_RANDOM_JOKE_ENDPOINT = 'https://api.icndb.com/jokes/random'
export default {
    name: 'ChuckNorris',
    mounted() {
        this.fetchRandomJoke()
    },
    data: function() {
        return {
            currentJoke: null
        }
    },
    methods: {
        fetchRandomJoke() {
            axios.get(API_RANDOM_JOKE_ENDPOINT)
                .then(({ data }) => this.currentJoke = data.value)
        }
    }
}
</script>
<style scoped>
.joke_generator {
    background-color: #f3f3f3;
    padding-top: 40px;
    padding-bottom: 100px;
}
</style>