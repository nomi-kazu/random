<template>
  <v-app>
    <div class="title">
      <h2 class="main-title">
        ユーザ登録
      </h2>
      <p class="sub-title">
        サービスをご利用いただくには、
      </p>
      <p class="sub-title">
        ユーザー登録(無料)をする必要があります。
      </p>
    </div>

    <v-card width="600px" class="mx-auto mt-5">
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="name"
            :rules="[rules.required]"
            label="名前"
          />

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
              @click="signUp"
            >
              新規登録
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
    disabled: true,
    name: '',
    email: '',
    password: '',
    rules: {
      required: (value) => { return !!value || '入力してください' },
      min: (value) => { return value.length >= 8 || '8文字以上入力してください' }
    }
  }),

  watch: {
    email (e) {
      if (this.email && this.checkPassword() && this.name) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    password (e) {
      if (this.email && this.checkPassword() && this.name) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    name (e) {
      if (this.email && this.checkPassword() && this.name) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    }
  },

  methods: {
    async signUp () {
      try {
        await this.$axios.post(process.env.API_URL + '/api/v1/auth', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        this.$router.push('/user/confirm')
      } catch (e) {
        this.formError = e.message
        console.log(this.formError)
      }
    },
    checkPassword () {
      return this.password.length >= 8 && this.password
    }
  }
}
</script>

<style scoped lang="scss">
  .title {
    margin-top: 30px;
    text-align: center;
    .main-title {
        margin-bottom: 20px;
    }
    .sub-title {
        margin-bottom: 5px;
    }
  }
</style>
