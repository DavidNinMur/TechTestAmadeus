
<template>
  <header>
    <AppTopBar></AppTopBar>
  </header>
  <body>
    <RouterView />
  </body>
  
  <AppFooter></AppFooter>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

import AppTopBar from "./components/top-bar/AppTopBar.vue"
import AppFooter from "./components/footer/AppFooter.vue"

export default {
  name: "App",
  components:{
    AppTopBar,
    AppFooter
  }, 
  setup(){

  

    return {
    }
  }
}

</script>

<style></style>
