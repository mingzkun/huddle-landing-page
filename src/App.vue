<template>
  <Nav/>
  <Content/>
  <Social/>
</template>

<script>
import Nav from './components/NavBar.vue'
import Content from './components/Content.vue'
import Social from './components/Social.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Content,
    Social,
  }
}
</script>

<style>
@media (min-width: 375px) {
    body {
      background: url("./assets/bg-mobile.svg");
      background-position: top left;
      background-repeat: no-repeat, no-repeat;
    }
  }
  
  @media (min-width: 1024px) {
    body {
      background: url("./assets/bg-desktop.svg");
      background-position: top left;
      background-repeat: no-repeat, no-repeat;
    }
  }
</style>