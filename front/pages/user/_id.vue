<template>
  <section>
    <h1>マイページ</h1>
    <p>{{ data }}</p>
    <hr>
    <h3>名前： {{ data.attributes.name }}</h3>
    <h3>ユーザID： {{ $store.state.id }}</h3>
    <nuxt-link to="/">Home</nuxt-link>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    try {
      const { data } = await $axios.$get(process.env.API_URL + `/api/v1/users/${params.id}`)
      return { data }
    } catch (e) {
      console.error(e)
    }
  }
}
</script>