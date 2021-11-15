<template>
  <div>
    <Header />
    <div class='wrap'>
        <h1 class='title'>Курси валют в Україні</h1>
        <h2 class='subtitle'>Станом на {{new Date().toLocaleDateString()}} року</h2>
        <p class='desc'>Позначен офіційний курс гривні по відношенню до іноземних валют
          <span>(згідно данних Національного банку України)</span>
        </p>
    </div>
    <Loader v-if="!quantityCurrencies" />
    <CurrencyList 
    v-else-if="quantityCurrencies"
    v-bind:currencies="allCurrencies"
    v-bind:active-currencies="allActiveCurrencies"/>
    <p v-else>Відбулась помилка. Будь ласка, спробуйте пізніше</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CurrencyList from '@/components/CurrencyList'
import Header from '@/components/Header'
import Loader from '@/components/Loader'

export default {
  name: 'App',
  computed: mapGetters(['allCurrencies','allActiveCurrencies','quantityCurrencies']),
  methods: mapActions(["fetchCurrencies"]),
  mounted(){
    this.fetchCurrencies();
  },

  components: {
    CurrencyList,
    Header,
    Loader 
  }
}
</script>

<style scoped>
.wrap {
    background-color: var(--background-white-color);
    margin: 15px 0;
    padding: 15px;
    box-shadow: 0px 10px 27px 17px var(--shadow-color);
}
.title {
    margin-bottom:10px;
    font-size: 30px;
    font-weight: 700;
}
.subtitle {
    font-size: 20px;
    font-weight: 400;
    margin-bottom:10px;
}
.desc {
    font-size: 15px;
    font-weight: 400;
    font-style: italic;
}
</style>