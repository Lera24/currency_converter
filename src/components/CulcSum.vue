<template>
    <div class="wrap">
        <span class="text">{{getConvertSumm}}</span>
    </div>
</template>

<script>
export default {
    props: {
        getConvertSumm: String
    }
}
</script>

<style scoped>
.wrap {
    margin-top: 15px;
    padding: 15px;
    background-color: var(--background-blue-color);
}
.text {
    padding: 5px;
    border: 1px solid var(--main-color);
    border-radius: 5px;
}
</style>