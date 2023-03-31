<template src="./Home.html"></template>

<script>
import AppCardInfo from '../../components/generics/card-info/AppCardInfo.vue'

export default {
    name: 'Home',
    components:{
        AppCardInfo
    },
    emits:[],
    setup(){


        const dataToCardInfoObj= {
            imgUrl: 'src/assets/Images/Batman.jpg',
            title: 'Batman Returns',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis, beatae facere quos corrupti quia veritatis tempora molestias ut asperiores iure omnis voluptatem laborum. Quam soluta qui iste ducimus delectus.'
        }


        return{
            dataToCardInfoObj
        }
    }
}
</script>

<style lang="scss" src="./Home.scss"></style>