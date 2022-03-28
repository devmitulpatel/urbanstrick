<template>
    <div v-if="hasError(props.form,props.name)" class="invalid-feedback">
        {{getError(props.form,props.name)}}
    </div>
</template>

<script setup>

const props=defineProps({
    form:Object,
    name:String,
    vModel:Object
});

</script>

<style scoped>

</style>
