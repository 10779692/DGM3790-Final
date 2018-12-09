<template>
  <v-jumbotron
  :gradient="gradient"
  dark
  src="https://jreedwebdesign.com/wp-content/uploads/2018/04/hero-home-page-1024x682.jpg"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3" style="text-align:center">Professional Website Services</h3>

         

          <div class="title mb-3">User Friendly From the Start</div>

          <v-btn
            class="mx-0"
            color="info blue"
            large
          >
            Learn More
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
  export default {
    data: () => ({
      gradient: 'to top right, rgba(49,81,181, .3), rgba(25,32,72, .7)'
    })
  }
</script>