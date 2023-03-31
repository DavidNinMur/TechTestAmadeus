
<template>
  <header>
    <div class="wrapper">
      <AppTopBar></AppTopBar>
      <AppVisualLayout></AppVisualLayout>
      <AppSectionTittle></AppSectionTittle>
      <div class="block lg:flex">
        <div class="w-full lg:w-1/2">
          <AppWidgetFormContact></AppWidgetFormContact>
        </div>
        <div class="w-full lg:w-1/2">
          <AppWidgetMap></AppWidgetMap>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

import AppTopBar from "./components/top-bar/AppTopBar.vue"
import AppVisualLayout from "./components/generics/visual-layout/AppVisualLayout.vue"
import AppSectionTittle from "./components/generics/section-tittle/AppSectionTittle.vue"
import AppWidgetFormContact from "./components/widgets/widget-form-contact/AppWidgetFormContact.vue"
import AppWidgetMap from "./components/widgets/widget-map/AppWidgetMap.vue"

export default {
  name: "App",
  components:{
    AppTopBar,
    AppVisualLayout,
    AppSectionTittle,
    AppWidgetFormContact,
    AppWidgetMap
  }, 
  setup(){

  

    return {
    }
  }
}

</script>

<style></style>
