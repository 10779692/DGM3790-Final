<template>
<v-jumbotron :gradient="gradient" dark src="https://jreedwebdesign.com/wp-content/uploads/2017/11/glenn-carstens-peters-203007.jpg">
    <v-container fill-height>
        <v-layout align-center>
            <v-flex text-xs-center>
                <h3 v-rainbow class="display-3">{{title}}</h3>
            </v-flex>
        </v-layout>
    </v-container>
</v-jumbotron>
</template>

<script>
export default {
    data: () => ({
        gradient: 'to top right, rgba(49,81,181, .3), rgba(25,32,72, .7)',
        title: 'Services',
    })
}
</script>
