<template>
  <TwoColumnContainer left-cols="4" right-cols="8">
    <template #left>
      <UserIntroCard :user-info="userInfo" />
    </template>

    <template #right>
      <h2>あなたの○○</h2>
    </template>
  </TwoColumnContainer>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: undefined
    }
  }
}
</script>
