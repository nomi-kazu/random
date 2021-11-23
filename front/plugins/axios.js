export default ({ $axios, store }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    $axios.setHeader('access-token', store.state.access_token)
    $axios.setHeader('uid', store.state.uid)
    $axios.setHeader('client', store.state.client)
    console.log(config)
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    console.log(config)
  })
  // エラーログ
  $axios.onError((e) => {
    console.log(e.response)
  })
}
