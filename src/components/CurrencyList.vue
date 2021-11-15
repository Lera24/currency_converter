<template>
    <table class='list'>
        <thead>
            <tr>
                <th>№</th>
                <th>Назва валюти</th>
                <th>Поточний курс</th>
                <th>Запам'ятати</th>
            </tr>
        </thead>
        <TodoItem 
        :key="currency.r030"
            v-for="(currency, index) of currencies"
            v-bind:currency="currency"
            v-bind:index="index"
            v-bind:active-currencies="activeCurrencies" />
    </table>
</template>

<script>
    import TodoItem from '@/components/CurrencyItem'
    export default {
        props: ['currencies', 'activeCurrencies'], 
        components: {
            TodoItem
        }
    }
</script>

<style scoped>
.list {
    border-collapse: collapse;
    border: inherit;
    border-width: 1px;
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
}
</style>