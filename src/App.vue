<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style>
body{
  background: #f5f6fa;
}
body *,
body * *,
body * * *{
  transition: all 0.7s ease-out;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.flex{
  display: flex;
}
.center{
  align-items: center;
}
.start{
  align-items: flex-start;
}
.space-between{
  justify-content: space-between;
}
.row{
  flex-direction: row;
}
.column{
  flex-direction: column;
}
.button{
  white-space: nowrap;
}
</style>
