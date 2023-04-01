<template src="./movieLibrary.html"></template>

<script>
import { ref } from 'vue'

import AppVisualLayout from "../../components/generics/visual-layout/AppVisualLayout.vue"
import AppSectionTittle from "../../components/generics/section-tittle/AppSectionTittle.vue"
import AppWidgetFormContact from "../../components/widgets/widget-form-contact/AppWidgetFormContact.vue"
import AppWidgetMap from "../../components/widgets/widget-map/AppWidgetMap.vue"

export default {
    name: 'movieLibrary',
    components:{
        AppVisualLayout,
        AppSectionTittle,
        AppWidgetFormContact,
        AppWidgetMap,
    },
    emits:[],
    setup(){

        const videoToShowRefStr = ref('src/assets/Videos/Header Video.mp4')

        const dataToCardInfoObj= {
            imgUrl: 'src/assets/Images/Batman.jpg',
            title: 'Batman Returns',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis, beatae facere quos corrupti quia veritatis tempora molestias ut asperiores iure omnis voluptatem laborum. Quam soluta qui iste ducimus delectus.'
        }

        const sectionDataRefObj = ref({
            titleSectionStr: 'MOVIE LIBRARY',
            descriptionSectionStr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, atque commodi. Officia, odio nam in aut fugiat iusto recusandae voluptate eaque eligendi obcaecati illum, autem labore totam, minus veritatis amet?'
        })


        return {
            videoToShowRefStr,
            sectionDataRefObj,
            dataToCardInfoObj
        }
    }
}
</script>

<style lang="scss" src="./movieLibrary.scss"></style>