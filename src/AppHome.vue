<template>
  <div id="AppHome">
    <app-hero></app-hero>
    <app-progress></app-progress>
    <app-paralax></app-paralax>
    <app-paragraphs></app-paragraphs>
    <app-portfolio-grid1></app-portfolio-grid1>
    <app-portfolio-grid2></app-portfolio-grid2>
    <app-portfolio-grid3></app-portfolio-grid3>
    <app-portfolio-grid4></app-portfolio-grid4>
    <app-c-t-a></app-c-t-a>
  </div>
</template>

<script>
import AppHero from './components/Home/AppHero'
import AppProgress from './components/Home/AppProgress'
import AppParalax from './components/Home/AppParalax'
import AppParagraphs from './components/Reusable/AppParagraphs'
import AppPortfolioGrid1 from './components/Home/AppPortfolioGrid1'
import AppPortfolioGrid2 from './components/Home/AppPortfolioGrid2'
import AppPortfolioGrid3 from './components/Home/AppPortfolioGrid3'
import AppPortfolioGrid4 from './components/Home/AppPortfolioGrid4'
import AppCTA from './components/Reusable/AppCTA'
export default {
  name: 'AppHome',
  components:{AppHero,AppProgress,AppParalax,AppParagraphs,AppPortfolioGrid1,AppPortfolioGrid2,AppPortfolioGrid3,AppPortfolioGrid4,AppCTA}
}
</script>
