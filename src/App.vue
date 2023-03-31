
<template>
  <header>
    <div class="wrapper">
      <AppTopBar></AppTopBar>
      <AppVisualLayout></AppVisualLayout>
      <AppSectionTittle></AppSectionTittle>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

import AppTopBar from "./components/top-bar/AppTopBar.vue"
import AppVisualLayout from "./components/generics/visual-layout/AppVisualLayout.vue"
import AppSectionTittle from "./components/generics/section-tittle/AppSectionTittle.vue"

export default {
  name: "App",
  components:{
    AppTopBar,
    AppVisualLayout,
    AppSectionTittle
  }, 
  setup(){

  

    return {
    }
  }
}

</script>

<style></style>
