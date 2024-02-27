<template>
    <div>
        <div class="App">
                <div class="navigation">
                    <router-link to="/">Login</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/showAll">ShowAll</router-link>
                </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<style>
div.App{
    background-color: rgb(53, 39, 39);
    padding: 10px 0;
}
div.App .navigation{
    margin-left: 50%;
    text-align: center;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
}
div.App .navigation a{
    color: white;
    font-weight: bold;
    text-decoration: none;
}
div.App .navigation a:hover{
    transform: scale(1.5);
    color: skyblue;
}
:root{
    padding: 0;
}
</style>
<script>
</script>