<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>

:root {
  --main-color: rgb(0,48,104);
  --shadow-color: rgba(9, 25, 37, 0.15);
  --accent-shadow-color: rgba(0, 0, 0, 0.46);
  --background-blue-color: rgb(240,251,254);
  --background-white-color: rgb(255,255,255);
  --link-header-color: rgb(135,200,255);
  --link-header-border-color: rgb(0,3,102);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-color);
  padding: 0 30px;
  margin-left: auto;
  margin-right: auto;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

h1,
h2,
h3,
h4,
p {
    margin: 0 auto;
}

</style>
