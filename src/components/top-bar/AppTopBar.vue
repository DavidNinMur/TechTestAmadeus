<template src="./AppTopBar.html"></template>

<script lang="ts">

import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
    
    name: 'AppTopBar',
    components:{
        Bars3Icon,
        XMarkIcon,
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