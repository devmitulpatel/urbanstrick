<template>

    <div style="max-height: 15px;max-width: 15px;" v-if="props.form.processing" class="spinner-border" role="status"></div>
    <div v-else  role="status">{{ props.text }}</div>

</template>

<script setup>
const props=defineProps({
    form:Object,
    text:String
});
</script>

<script>
export default {
    name: "loadingText"
}
</script>

<style scoped>

</style>
