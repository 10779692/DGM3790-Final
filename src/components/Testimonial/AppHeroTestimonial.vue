<template>
<v-jumbotron :gradient="gradient" dark src="https://images.unsplash.com/photo-1527153818091-1a9638521e2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80">
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
        title: 'Leave a Testimonial',
    })
}
</script>
