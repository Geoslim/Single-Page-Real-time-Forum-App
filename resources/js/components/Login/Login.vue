<template>

    <v-container>
        <v-card class="mx-auto mt-5" max-width="70%">

            <v-form @submit.prevent="login">

                <v-card-text>
                    <v-text-field
                    type="email"
                    v-model="form.email"
                    label="E-mail"
                    required
                    >
                    </v-text-field>

                    <v-text-field
                    type="password"
                    v-model="form.password"
                    label="Password"
                    required
                    ></v-text-field>
                </v-card-text>

                <v-card-actions>
        
                    <v-btn
                    type="submit"
                    color="green"
                    >Login</v-btn>
                </v-card-actions>

            </v-form >

        </v-card>
    </v-container>
 
</template>

<script>
export default {

    data(){
        return{
            form:{
                email:null,
                passwword:null
            }
        }
    },

    methods:{
        login() {
           axios.post('api/auth/login', this.form)
           .then(res =>console.log(res.data))
           .catch(error => console.log(error.response.data))
        }
    }
}
</script>

<style>

</style>