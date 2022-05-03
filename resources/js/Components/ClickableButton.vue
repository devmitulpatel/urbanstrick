<template>
    <button type="submit" value="Save" class="btn btn-primary ce5 btn-lg btn-block w-full">
        <LoadingText :form="props.form" :text="props.text"></LoadingText>
    </button>
</template>

<script setup>
import LoadingText from "@/Components/loadingText";

const props=defineProps({
    form:Object,
    text:String
});

</script>

<script>
export default {
    name: "ClickableButton"
}
</script>

<style scoped>

</style>
