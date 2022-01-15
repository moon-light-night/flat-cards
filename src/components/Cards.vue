<template>
  <div>
    <Card />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';

@Component({
  components: {
    Card
  }
})
export default class HelloWorld extends Vue {}
</script>
