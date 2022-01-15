<template>
  <button class="btn-accept" @click="setFilter">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AcceptBtn extends Vue {
  @Prop() private msg!: string;

  message = 'Hello!'

  setFilter(): void {
    console.log(this.msg);
  }
}
</script>
