<template>
<div id="AppTestimonial">
    <app-hero></app-hero>
    <div class="container">
        <app-input :msg="message" @messageChanged="message = $event"></app-input>
    </div>
    <app-cta></app-cta>
</div>
</template>

<script>
import Input from './components/Testimonial/Input.vue'
import AppCTA from './components/Reusable/AppCTA'
import AppHeroTestimonial from './components/Testimonial/AppHeroTestimonial.vue';

export default {
    name: 'AppTestimonial',
    data() {
        return {
            message: 'Start Typing'
        }
    },
    components: {
        'app-input': Input,
        'app-hero': AppHeroTestimonial,
        'app-cta': AppCTA
    }
}
</script>
