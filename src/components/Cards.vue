<template>
  <div class="cards-wrap">
    <Card
      v-for="card in mockData"
      :key="card.building_id + card.id"
      :card="card"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';

@Component({
  components: {
    Card
  },
  data: () => ({
    mockData: null
  }),
  created() {
    this.$store.dispatch('fetchMockData');
    this.$data.mockData = this.$store.getters.mockData;
    console.log(this.$data.mockData);
  }
})
export default class Cards extends Vue {}
</script>
