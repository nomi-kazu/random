<template>
  <HeaderContainer>
    <GuestHeader v-if="isGuest" />

    <LoginHeader v-if="isLogin" />
  </HeaderContainer>
</template>

<script>
export default {
  computed: {
    isLogin () {
      // Login済みか判定
      return false
    },
    isGuset () {
      // Loginしていないか判定
      return true
    }
  }
}
</script>