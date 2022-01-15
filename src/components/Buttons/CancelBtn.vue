<template>
  <button class="btn-cancel">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CancelBtn extends Vue {}
</script>
