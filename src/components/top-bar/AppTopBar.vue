<template src="./AppTopBar.html"></template>

<script>
import { ref } from 'vue'

export default {
    
    name: 'AppTopBar',
    props:{
        topBarConfigProp:{
            type: Object,
            required: true
        }
    },
    emits:[],
    setup(){ 

        const mobileMenuOpen = ref(false)

        const onClickMobileMenuIcon = () => {
            mobileMenuOpen.value = !mobileMenuOpen.value
        }

        return{
            mobileMenuOpen,

            onClickMobileMenuIcon
        }
    }
}
</script>

<style lang="scss" src="./AppTopBar.scss"></style>