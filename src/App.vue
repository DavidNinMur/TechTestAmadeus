
<template>
  <header>
    <div class="wrapper">
      <AppTopBar></AppTopBar>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

import AppTopBar from "./components/top-bar/AppTopBar.vue"

export default {
  name: "App",
  components:{
    AppTopBar
  }, 
  setup(){

  

    return {
    }
  }
}

</script>

<style></style>
