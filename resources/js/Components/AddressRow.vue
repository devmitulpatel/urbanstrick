<template>
    <td class="text-left" style="text-align: left">
        {{props.dataKey+1}}
    </td>
    <td class="text-left" style="text-align: left">
        <div>
            <small>
            {{props.address.line_1}},
        <br>
        {{props.address.line_2}},
        <br>
        {{props.address.line_3}},
        <br>
                <strong>{{[props.address.city?.name,[props.address.state?.name,props.address?.pincode].join('-')].join()}}</strong>
            </small>
        </div>
    </td>

</template>

<script>
export default {
    name: "AddressRow"
}
</script>

<script setup>

const props=defineProps(
    {
        address:[Array,Object],
        dataKey :Number
    })

</script>

<style scoped>

</style>
