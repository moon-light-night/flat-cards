<template>
  <div class="filter-select">
    <label class="filter-label">
      <slot />
    </label>
    <div class="filter-select_items">
      <label
        v-for="(room, i) in rooms"
        :key="'key-' + i"
        :for="`input-${room}`"
        class="filter-select_label"
      >
        <input
          v-model="checkedValues"
          :id="`input-${room}`"
          class="custom-checkbox"
          type="checkbox"
          :value="room"
          name="filtersCheckbox"
        >
        <span />
        <section class="filter-select_name">
          {{ room + 'к' }}
        </section>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { eventBus } from '@/main'
import {
  Component,
  Prop,
  Vue
} from 'vue-property-decorator'

@Component({
  data: () => ({
    checkedValues: []
  }),
  mounted() {
    eventBus.$on('clearSelectValues', () => (this.$data.checkedValues = []))
  },
  watch: {
    checkedValues() {
      this.$emit('handleSelectValues', this.$data.checkedValues)
    }
  }
})
export default class FilterSelect extends Vue {
  @Prop() private rooms!: Record<number, number>
}
</script>
