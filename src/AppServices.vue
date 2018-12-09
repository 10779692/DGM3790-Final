<template>
<div id="AppServices">
    <app-hero-services></app-hero-services>
    <app-all-services></app-all-services>
    <app-c-t-a></app-c-t-a>
</div>
</template>

<script>
import AppHeroServices from './components/Services/AppHeroServices'
import AppAllServices from './components/Reusable/AppAllServices'
import AppCTA from './components/Reusable/AppCTA'
export default {
    name: 'AppServices',
    components: {
        AppHeroServices,
        AppAllServices,
        AppCTA
    },
    data: () => ({
        gradient: 'to top right, rgba(49,81,181, .3), rgba(25,32,72, .7)'
    })
}
</script>
