<template>
    <option v-on:click="$emit('select-cur',currency.cc)" >{{currency.txt}}</option>
</template>

<script>
export default {
    props: {
        currency: Object
    }
}
</script>
