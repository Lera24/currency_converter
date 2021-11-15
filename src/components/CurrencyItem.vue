<template>
    <tr class="item" v-bind:class="{activeItem: activeCurrencies.find(item => item === currency.r030)}">
        <td class="number">{{index + 1}}</td>
        <td class="name">{{currency.txt}} (<span>{{currency.cc}}</span>)</td>
        <td class="course">{{currency.rate}}</td>
        <td >
            <button class="button" v-on:click="selectCur(currency.r030)">
                <svg class="icon" width="12" height="12" viewBox="0 0 32 32">
                    <path d="M17 0l-3 3 3 3-7 8h-7l5.5 5.5-8.5 11.269v1.231h1.231l11.269-8.5 5.5 5.5v-7l8-7 3 3 3-3-15-15zM14 17l-2-2 7-7 2 2-7 7z"></path>
                </svg>
            </button>
        </td>
    </tr>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props: {
        currency: {
            type: Object,
            required: true,
        },
        index: Number,
        activeCurrencies: Array,
    },
        methods: {
            ...mapMutations(["selectCurrency"]),
            selectCur(id) {
                this.selectCurrency(id)
            }
    }
}
</script>

<style scoped>
.item {
    margin-bottom: 10px;
    padding: 15px;
}

.item:hover,
.item:focus, {
    background-color: var(--background-blue-color);
    transform: scale(1.03);
    transition: all 0.3s ease;
}

.button {
    display:inline-flex;
    align-items:center;
    cursor:pointer;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    background-color: inherit;
}

.activeItem {
    background-color: var(--background-blue-color);
    border-radius: 10px;
    box-shadow: 0px 3px 6px 1px var(--accent-shadow-color);
    color: inherit;
}

.icon {
    fill: var(--main-color);
}
</style>