<template>
 
    <v-toolbar>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>GI-Forum</v-toolbar-title>

      <v-spacer></v-spacer>

 

      <div class="my-2 mr-2">
        <router-link to="/forum"><v-btn text >Forum</v-btn></router-link>
      </div>

      <div class="my-2 mr-2">
         <router-link to=""><v-btn text >Ask Question</v-btn></router-link>
      </div>
      <div class="my-2 mr-2">
         <router-link to=""><v-btn text >Category</v-btn></router-link>
      </div>
      <div class="my-2 mr-2">
        <router-link to="/login"><v-btn text >Login</v-btn></router-link>
      </div>
      
    </v-toolbar>
 
</template>

<script>
export default {

}
</script>

<style>

</style>