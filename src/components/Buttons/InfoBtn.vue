<template>
  <button class="btn-accept">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AcceptBtn extends Vue {}
</script>
