<template>
  <div class="cards-wrap">
    <Card
      v-for="card in filteredCards"
      :key="card.building_id + card.id"
      :card="card"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/Card.vue'

@Component({
  components: {
    Card
  },
  computed: {
    filteredCards() {
      return this.$store.getters.filteredCards
    }
  }
})
export default class Cards extends Vue {}
</script>
