<template>
    <header class="header">
        <router-link class="link" to="/">Курси валют</router-link>
        <router-link class="link" to="/converter">Конвектор валют</router-link>
    </header>
</template>

<style scoped>
.header {
    margin: 15px 0;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    box-shadow: 0px 3px 6px 1px var(--accent-shadow-color);
    font-size: 20px;
    font-weight: normal;
    color: var(--main-color);
    background-color: var(--background-blue-color);
}

.link {
    color: var(--main-color);
}

.link:hover,
.link:focus {
    color: var(--link-header-color);
    transition: all 0.3s ease;
}

.router-link-exact-active {
    border-bottom: 2px solid var(--link-header-border-color);
}
</style>