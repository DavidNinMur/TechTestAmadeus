
<template>
  <header>
    <AppTopBar :topBarConfigProp="topBarConfigRefObj" ></AppTopBar>
  </header>
  <body>
    <RouterView />
  </body>
  
  <AppFooter></AppFooter>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { RouterView } from 'vue-router'

import AppTopBar from "./components/top-bar/AppTopBar.vue"
import AppFooter from "./components/footer/AppFooter.vue"

export default {
  name: "App",
  components:{
    AppTopBar,
    AppFooter
  }, 
  setup(props, { emit }) {

    const topBarConfigRefObj = ref({});

    const topBarMenuOptionsList = [
      { label: 'HOME', title: 'Home', linkTo: '/'},
      { label: 'OUR SCREENS', title: 'Our Screens', linkTo: '/our-screens'},
      { label: 'SCHEDULE', title: 'Schedule', linkTo: '/schedule'},
      { label: 'MOVIE LIBRARY', title: 'Movide Library', linkTo: '/movie-library'},
      { label: 'LOCATION & CONTACT', title: 'Location & contact', linkTo: '/contact'},
    ]

    const topBarCompanyDataObj = {
      companyName: 'Amadeus',
      companyImg: 'src/assets/Logos/Logo White.svg'
    }

    onBeforeMount(() => {
      topBarConfigRefObj.value = { 
          menuOptionsList: topBarMenuOptionsList,
          companyDataObj: topBarCompanyDataObj
      }
    });

    return {
      topBarConfigRefObj
    }
  }
}

</script>

<style></style>
