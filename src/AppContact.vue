<template>
<div id="AppContact">
    <app-hero-contact></app-hero-contact>
    <app-form-contact></app-form-contact>
    <a-p-i></a-p-i>
</div>
</template>

<script>
import AppHeroContact from './components/Contact/AppHeroContact'
import AppFormContact from './components/Contact/AppFormContact'
import API from './components/Reusable/API'
export default {
    name: 'AppContact',
    components: {
        AppHeroContact,
        AppFormContact,
        API
    },
    data: () => ({
        gradient: 'to top right, rgba(49,81,181, .3), rgba(25,32,72, .7)'
    })
}
</script>
