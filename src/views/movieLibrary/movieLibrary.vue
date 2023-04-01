<template src="./movieLibrary.html"></template>

<script>
import { ref, onBeforeMount } from 'vue'
import {useStore} from 'vuex'

import AppVisualLayout from "../../components/generics/visual-layout/AppVisualLayout.vue"
import AppSectionTittle from "../../components/generics/section-tittle/AppSectionTittle.vue"
import AppWidgetFormContact from "../../components/widgets/widget-form-contact/AppWidgetFormContact.vue"
import AppWidgetMap from "../../components/widgets/widget-map/AppWidgetMap.vue"
import AppSearchBox from "../../components/generics/search-box/AppSearchBox.vue"
import AppCardInfo from "../../components/generics/card-info/AppCardInfo.vue";

export default {
    name: 'movieLibrary',
    components:{
        AppVisualLayout,
        AppSectionTittle,
        AppWidgetFormContact,
        AppWidgetMap,
        AppSearchBox,
        AppCardInfo
    },
    emits:[],
    setup(){
        const store = useStore();
        const videoToShowRefStr = ref('src/assets/Videos/Header Video.mp4')
        const sectionDataRefObj = ref({
            titleSectionStr: 'MOVIE LIBRARY',
            descriptionSectionStr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, atque commodi. Officia, odio nam in aut fugiat iusto recusandae voluptate eaque eligendi obcaecati illum, autem labore totam, minus veritatis amet?'
        })
        const dataToRendererRefList = ref();

        const dataToCardInfoObj= {
            imgUrl: 'src/assets/Images/Batman.jpg',
            title: 'Batman Returns',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis, beatae facere quos corrupti quia veritatis tempora molestias ut asperiores iure omnis voluptatem laborum. Quam soluta qui iste ducimus delectus.'
        }

        onBeforeMount(() => {
            getDataToRender()
        })


        const getDataToRender = () => {
            dataToRendererRefList.value = store.state.filmsToShow;
        };


        const onQueryChange = async (searchStr) => {
            await store.dispatch("search", searchStr);
            store.commit("setQueryOfUser", searchStr);
            getDataToRender();
        };

        const onCleaningSearch = () => {
            store.commit("setQueryOfUser", "");
        };

        return {
            videoToShowRefStr,
            sectionDataRefObj,
            dataToCardInfoObj,
            dataToRendererRefList,

            onQueryChange,
            onCleaningSearch
        }
    }
}
</script>

<style lang="scss" src="./movieLibrary.scss"></style>