<template src="./AppSearchBox.html"></template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from "vue";
import {useStore} from 'vuex'

import { userHaveDoneASearch } from "../../../computation/utils.js";

export default defineComponent({
  name: "AppSearchBox",
  props: {},
  setup(props, { emit }) {
    const store = useStore();

    const searchByUserRefStr = ref("");

    onBeforeMount(() => {
      if (userHaveDoneASearch({ store })) {
        searchByUserRefStr.value = store.state.queryOfUser;
      }
    });

    const onQueryChange = () => {
      if (searchByUserRefStr.value !== "") {
        emit("onQueryChange", searchByUserRefStr.value);
      } else {
        emit("onCleaningSearch");
      }
    };

    return {
      searchByUserRefStr,

      onQueryChange,
    };
  },
});
</script>

<style lang="scss" src="./AppSearchBox.scss"></style>
