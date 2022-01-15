<template>
  <button class="btn-cancel" @click="handleAction">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  methods: {
    handleAction() {
      this.$emit('handleAction')
    }
  }
})
export default class CancelBtn extends Vue {}
</script>
