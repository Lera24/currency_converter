export default {
    actions:{
        async fetchCurrencies(ctx) {
            const res = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            const currencies = await res.json()

            ctx.commit('updateCurrencies', currencies)
        }
    },
    mutations:{
        updateCurrencies(state, currencies) {
            state.currencies = currencies
        },
        selectCurrency(state, id){
            const currentElem = state.currencies.find(currency => currency.r030 === id)

            if(state.activeCurrencies.find(item => item === id)) {
                state.activeCurrencies.splice(state.activeCurrencies.indexOf(id),1)
                state.currencies.splice(state.currencies.indexOf(currentElem),1)
                state.currencies.push(currentElem)
            } else {
                state.currencies = state.currencies.filter(currency => currency.r030 !== id)
                state.currencies.unshift(currentElem)
                state.activeCurrencies.push(currentElem.r030)
    }
        },
        updateConvertSumm(state, [summ, currency]) {
            state.convertSumm = ''
            if(summ) {
                const findSelectCurrency = state.currencies.find(elem => elem.txt === currency)
                state.convertSumm = `${Math.round(findSelectCurrency.rate * Number(summ))} ${findSelectCurrency.cc}`
            }
    },
},
    state:{
        currencies: [],
        activeCurrencies: [],
        convertSumm: '',
    },
    getters:{
        allCurrencies(state) {
            return state.currencies
        },
        allActiveCurrencies(state) {
            return state.activeCurrencies
        },
        quantityCurrencies(state) {
            return state.currencies.length
        },
        getConvertSumm(state) {
            return state.convertSumm
        }

    }
}