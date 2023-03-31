
<template>
  <header>
    <div class="wrapper">
      <AppTopBar></AppTopBar>
      <AppVisualLayout></AppVisualLayout>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

import AppTopBar from "./components/top-bar/AppTopBar.vue"
import AppVisualLayout from "./components/generics/visual-layout/AppVisualLayout.vue"

export default {
  name: "App",
  components:{
    AppTopBar,
    AppVisualLayout
  }, 
  setup(){

  

    return {
    }
  }
}

</script>

<style></style>
