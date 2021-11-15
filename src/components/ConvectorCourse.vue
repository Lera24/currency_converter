<template>
    <form @submit.prevent="onSubmit" class="form">
        <label class='wrap'>Введіть суму у гривні<input v-model="summ" type="number" name="number" class="field" placeholder="Сума"/></label>
        <label class='wrap'>Виберіть валюту
            <select name="currency" v-model="currency" class="field" placeholder="Сума">
                <CurrencyValue 
                v-for="currency of allCurrencies"
                v-on:select-cur="selectCur"
                v-bind:currency="currency"
                :key="currency.r030"/>
            </select>
        </label>
        <div>
            <button class="button" type="submit">Ок</button>
        </div>
    </form>
</template>

<script>
import {  mapMutations, mapGetters } from 'vuex'
import CurrencyValue from '@/components/CurrencyValue'
export default {
    data() {
        return {
            summ: '',
            currency: '',
        }
    },
    computed: mapGetters(['allCurrencies']),
    
    methods: {
        ...mapMutations(["updateConvertSumm"]),
        onSubmit() {
            this.updateConvertSumm([this.summ, this.currency]) 
            this.summ = '';
            this.currency = '';
            },
        selectCur(id) {
            this.currency = id;
        }
        },
    components: {
        CurrencyValue
    }
    }
</script>

<style scoped>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-white-color);
    padding: 15px;
}

.wrap {
    margin-right: 15px;
}

.field {
    margin-left: 15px;
    padding: 4px;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    color: var(--main-color);
}

.button {
    height: 25px;
    cursor:pointer;
    background-color: var(--background-white-color);
    border: 1px solid var(--main-color);
    border-radius: 5px; 
    }

</style>