<template>

    <v-container>
        <v-card class="mx-auto mt-5" max-width="70%">

            <v-form @submit.prevent="signup">

                <v-card-text>
                    <small class="red--text" v-if="errors.name">{{ this.errors.name[0] }}</small>

                    <v-text-field
                    type="text"
                    v-model="form.name"
                    label="Full Name"
                    required
                    >
                    </v-text-field>

                    <small class="red--text" v-if="errors.email">{{ this.errors.email[0] }}</small>

                    <v-text-field
                    type="email"
                    v-model="form.email"
                    label="E-mail"
                    required
                    >
                    </v-text-field>

                    <small class="red--text" v-if="errors.password">{{ this.errors.password[0] }}</small>

                    <v-text-field
                    type="password"
                    v-model="form.password"
                    label="Password"
                    required
                    ></v-text-field>

                    <v-text-field
                    type="password"
                    v-model="form.password_confirmation"
                    label="Confirm Password"
                    required
                    ></v-text-field>
                </v-card-text>

                <v-card-actions>
        
                    <v-btn
                    type="submit"
                    color="green"
                    >Sign Up</v-btn>

                    <div class="ml-2">
                        <router-link to="/login">
                        <v-btn color="primary" >Login</v-btn>
                        </router-link>
                    </div>

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
                name: null,
                email:null,
                password:null,
                password_confirmation:null
            },
            errors: {}
        }
    },

    methods:{
        signup() {
        //    User.signup(this.form)
         axios.post('api/auth/signup', this.form)
            .then(res => {
                User.responseAfterLogin(res)
               
                })
            .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>

<style>

</style>