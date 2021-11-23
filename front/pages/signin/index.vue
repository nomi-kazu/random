<template>
  <v-app>
    <v-card width="600px" class="mx-auto mt-5">
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            :rules="[rules.required]"
            label="メール"
          />

          <v-text-field
            v-model="password"
            :rules="[rules.required, rules.min]"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            counter
            @click:append="showPassword = !showPassword"
          />

          <v-card-actions>
            <v-btn
              class="info"
              large
              block
              :disabled="disabled"
              @click="login"
            >
              ログイン
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export default {
  data: () => ({
    showPassword: false,
    disabled: true,
    password: '',
    email: '',
    error: [],
    rules: {
      required: (value) => {
        return !!value || '入力してください'
      },
      min: (value) => {
        return value.length >= 8 || '8文字以上入力してください'
      }
    }
  }),

  watch: {
    email (e) {
      if (this.email && this.password && this.password.length >= 8) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    password (e) {
      if (this.email && this.password && this.password.length >= 8) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    }
  },

  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        cookies.set('access-token', this.$store.state.accessToken)
        cookies.set('client', this.$store.state.client)
        cookies.set('uid', this.$store.state.uid)
        this.$router.push(`/user/${this.$store.state.id}`)
      } catch (e) {
        console.log(this.formError)
      }
    }
  }
}
</script>