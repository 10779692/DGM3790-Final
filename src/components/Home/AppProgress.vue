<template>
<div class="progress-bar">
    <div class="text-xs-center">
        <div class="display-2">
            <h4>{{ headertext }}</h4>
        </div>
        <v-progress-circular :rotate="-90" :size="200" :width="30" :value="value" color="primary">
            {{ value }}
            <div>
                <h4>{{ progressbar1 }}</h4>
            </div>
        </v-progress-circular>

        <v-progress-circular :rotate="90" :size="200" :width="30" :value="value" color="red">
            {{ value }}
            <div>
                <h4>{{ progressbar2 }}</h4>
            </div>
        </v-progress-circular>

        <v-progress-circular :rotate="180" :size="200" :width="30" :value="value" color="pink">
            {{ value }}
            <div>
                <h4>{{ progressbar3 }}</h4>
            </div>
        </v-progress-circular>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            interval: {},
            value: 90,
            headertext: 'J Reed Web Design',
            progressbar1: 'Satisfaction',
            progressbar2: 'Success',
            progressbar3: 'Web Design'
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.value === 100) {
                return (this.value = 0)
            }
            this.value += 10
        }, 1000)
    }
}
</script>

<style>
.progress-bar {
    padding-top: 100px;
    padding-bottom: 100px;
}

.display-2 h4 {
    padding-bottom: 50px;
}
</style>
