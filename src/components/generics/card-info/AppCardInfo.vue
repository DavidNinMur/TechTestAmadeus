<template src="./AppCardInfo.html"></template>

<script>
export default {
    name: 'AppCardInfo',
    props:{
        dataToCardInfoProp:{
            type: Object,
            required: true
        }
    },
    emits:['onClickCardInfo'],
    setup(props, { emit }) {


        const onClickCardInfo = () => {
            emit('onClickCardInfo')
        }

        return {
            onClickCardInfo
        }
    }
}
</script>

<style lang="scss" src="./AppCardInfo.scss"></style>