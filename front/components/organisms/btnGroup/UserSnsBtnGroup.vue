<template>
  <div>
    <TwitterBtn fab v-if="twitterLinkIsExists" />
    <InstagramBtn fab v-if="instagramLinkIsExists" />
    <FacebookBtn fab v-if="facebookLinkIsExists" />
  </div>
</template>

<script>
export default {
  computed: {
    twitterLinkIsExists () {
      // Twitterリンクが存在したらtrueを返す
      return false
    },
    instagramLinkIsExists () {
      // Instagramリンクが存在したらtrueを返す
      return false
    },
    facebookLinkIsExists () {
      // Instagramリンクが存在したらtrueを返す
      return false
    }
  }
}
</script>
