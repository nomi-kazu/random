<template>
  <div>
    <h1>プロフィール編集</h1>
    <SettingProfileCard :info="info" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      const { data } = await $axios.$get(process.env.API_URL + '/api/v1/auth/edit')
      return { info: data }
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
