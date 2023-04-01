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
    setup(props, { emit }) {
        const store = useStore();
        const videoToShowRefStr = ref('src/assets/Videos/Header Video.mp4')
        const sectionDataRefObj = ref({
            titleSectionStr: 'MOVIE LIBRARY',
            descriptionSectionStr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, atque commodi. Officia, odio nam in aut fugiat iusto recusandae voluptate eaque eligendi obcaecati illum, autem labore totam, minus veritatis amet?'
        })
        const dataToRendererRefList = ref();

        onBeforeMount(() => {
            getData()
        })

        const getData = () => {
            if(store.state.queryOfUser !== ''){
                getResultOfSearchedFilms()
            } else {
                getFavouriteFilms()
            }
        }

        const getResultOfSearchedFilms = () => {
            dataToRendererRefList.value = store.state.filmsToShow;
        };

        const getFavouriteFilms = () => {
            dataToRendererRefList.value = store.state.favouriteFilms;
        };

        const onQueryChange = async (searchStr) => {
            await store.dispatch("search", searchStr);
            store.commit("setQueryOfUser", searchStr);
            getResultOfSearchedFilms();
        };

        const onCleaningSearch = () => {
            console.log('searchStr')
            store.commit("setQueryOfUser", "");
            store.commit("setFilms", []);
            getResultOfSearchedFilms();
            getFavouriteFilms()
        };

        const onClickCardInfo = (filmSelectedObj) => {
            const favouriteFilmsByUserList = store.state.favouriteFilms;
            const searchedFilmsByUserList = store.state.filmsToShow;
            let indexToDeleteFromFavouriteList = favouriteFilmsByUserList.findIndex((filmObj) => filmObj.id === filmSelectedObj.id );
            let indexToUpdateFromSearchedList = searchedFilmsByUserList.findIndex((filmObj) => filmObj.title === filmSelectedObj.title );

             if(filmSelectedObj.selected){
                favouriteFilmsByUserList.splice(indexToDeleteFromFavouriteList, 1)
                if(indexToUpdateFromSearchedList > -1){
                    searchedFilmsByUserList[indexToUpdateFromSearchedList].selected = false;
                }
            } else {
                if(indexToDeleteFromFavouriteList === -1){
                    favouriteFilmsByUserList.push(filmSelectedObj);
                }
                if(indexToUpdateFromSearchedList > -1){
                    searchedFilmsByUserList[indexToUpdateFromSearchedList].selected = true;
                }
            }

            store.commit("setNewFavouriteFilms", favouriteFilmsByUserList);
            store.commit("setFilms", searchedFilmsByUserList);

            getData();
        }

        return {
            videoToShowRefStr,
            sectionDataRefObj,
            dataToRendererRefList,

            onQueryChange,
            onCleaningSearch,
            onClickCardInfo
        }
    }
}
</script>

<style lang="scss" src="./movieLibrary.scss"></style>