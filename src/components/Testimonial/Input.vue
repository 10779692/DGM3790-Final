<template>
<div class="testimonial">
    <h2 class="headline">View Testimonial</h2><br>
    <input style="float:left;" type="text" placeholder="Full Name">
    <input style="float:left;" type="text" :value="msg" @input="changeMessage" onfocus="this.value=''" id="input">
    <p class="message" id="input">"{{message}}"</p>
    <v-btn class="button" onclick="document.getElementById('input').value = ''"><span>Submit Testimonial</span></v-btn>
</div>
</template>

<script>
export default {
    props: ['msg'],
    data() {
        return {
            message: ''
        }
    },
    methods: {
        changeMessage(event) {
            this.message = event.target.value;
            this.$emit('messageChanged', this.message);
        }
    }
}
</script>

<style scoped>
.testimonial {
    padding-top: 70px;
    padding-bottom: 70px;
}

.message {
    font-style: italic;
    font-size: 16px;
}

input {
    width: 100%;
    background-color: #f3f3f3;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 25px;
}
</style>
