<template>
  <div class="home">
    <h1 class="home-title">
      Lorem ipsum dolor sit
    </h1>
    <Filters />
    <Cards />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Filters from '@/components/Filters.vue';
import Cards from '@/components/Cards.vue';

@Component({
  components: {
    Filters,
    Cards
  },
  created() {
    this.$store.dispatch('fetchMockData')
  }
})
export default class Home extends Vue {}
</script>
