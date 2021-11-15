<template>
    <div>
        <Header />
        <div class='wrap'>
            <h2 class='title'>Онлайн конвертер суми в гривні у необхідну валюту</h2>
            <h3 class='subtitle'>Станом на {{new Date().toLocaleDateString()}} року</h3>
            <p class='desc'>Будь ласка, введіть необхідну сумму у полі нижче</p>
        </div>
        <ConverterCourse/>
        <CulcSum v-if="getConvertSumm" v-bind:getConvertSumm="getConvertSumm"/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Header from '@/components/Header'
import ConverterCourse from '@/components/ConvectorCourse'
import CulcSum from '@/components/CulcSum'
export default {
    computed: mapGetters(['getConvertSumm']),
    methods: mapActions(["fetchCurrencies"]),
        mounted(){
    this.fetchCurrencies();
  },
    components: {
    Header,
    ConverterCourse,
    CulcSum
    }
}
</script>

<style scoped>
.wrap {
    background-color: var(--background-white-color);
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 15px;
    box-shadow: 0px 10px 27px 17px var(--shadow-color);
}
.title {
    margin-bottom:10px;
    font-size: 25px;
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