<template>
<div id="AppPortfolio">
    <app-hero-portfolio></app-hero-portfolio>
    <app-three-portfolio></app-three-portfolio>
    <app-c-t-a></app-c-t-a>
</div>
</template>

<script>
import AppHeroPortfolio from './components/Portfolio/AppHeroPortfolio'
import AppThreePortfolio from './components/Portfolio/AppThreePortfolio'
import AppCTA from './components/Reusable/AppCTA'
export default {
    name: 'AppPortfolio',
    components: {
        AppHeroPortfolio,
        AppThreePortfolio,
        AppCTA
    },
    data: () => ({
        gradient: 'to top right, rgba(49,81,181, .3), rgba(25,32,72, .7)'
    })
}
</script>
