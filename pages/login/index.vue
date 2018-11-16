<template>
  <v-container fluid grid-list-md>
    <v-layout row justify-center>
      <v-flex xs12 sm6 md4>
        <div class="login--head">
          <h1>Entre na sua conta</h1>
        </div>
        <v-card>
          <v-container text-xs-center text-md-center>

            <div class="logo--container">
            </div>
            <form>
              <v-text-field
                v-model="email"
                label="E-mail"
                required>
              </v-text-field>

              <v-text-field
                v-model="password"
                label="Senha"
                type="password"
                required>
              </v-text-field>

              <div class="login--sign">
                <v-btn block color="primary">Entrar
                </v-btn>
              </div>

              <div class="login--register-container">
                <v-label>Não possui conta?</v-label>
                <a>Criar conta</a>
              </div>
            </form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: "Login",
    layout: 'public',
    data: () => ({
      email: '',
      password: '',
      alert: {
        show: false,
        type: 'error',
        msg: ''
      }
    }),
    methods: {
      onSubmit() {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login--head {
    text-align: center;
    margin: 30px;
  }
  .logo--container {
    padding-bottom: 15px;
  }
  .error-block--container {
    padding-top: 8px;
    padding-bottom: 12px;
  }
  .login--sign {
    margin-top: 10px;
  }
  .login--register-container {
    margin-top: 15px;
  }
</style>