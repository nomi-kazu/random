<template>
  <v-btn
    :dark="dark"
    :href="href"
    :to="to"
    color="#CF2E92"
    class="white--text"
    :fab="fab"
    :x-small="xSmall"
    @click="onClick"
  >
    <InstagramIcon />
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: undefined
    },
    href: {
      type: String,
      default: undefined
    },
    fab: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    xSmall () {
      return this.fab
    }
  },

  methods: {
    onClick () {
      return this.$emit('click')
    }
  }
}
</script>
