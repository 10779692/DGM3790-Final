<template>
    <div id="AppAbout">
        <app-hero-about></app-hero-about>
        <app-paragraphs></app-paragraphs>
        <app-all-services></app-all-services>
        <app-c-t-a></app-c-t-a>
    </div>
</template>

<script>
import AppHeroAbout from './components/About/AppHeroAbout'
import AppParagraphs from './components/Reusable/AppParagraphs'
import AppAllServices from './components/Reusable/AppAllServices'
import AppCTA from './components/Reusable/AppCTA'
  export default {
      name: 'AppAbout',
      components: {AppParagraphs,AppHeroAbout,AppAllServices,AppCTA},
    data: () => ({
      gradient: 'to top right, rgba(49,81,181, .3), rgba(25,32,72, .7)'
    })
  }
</script>