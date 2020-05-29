<template>

    <div>
        <toolbar></toolbar>
       <router-view></router-view>
        <app-footer></app-footer>
    </div>
    
</template>

<script>

import Toolbar from "./Toolbar";
import AppFooter from "./AppFooter";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

export default {
    components:{Toolbar, AppFooter, Login, SignUp}
}
</script>

<style>

</style>