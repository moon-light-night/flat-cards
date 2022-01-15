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
import {
  Component,
  Emit,
  Prop,
  Vue,
  Watch
} from 'vue-property-decorator';

@Component
export default class FilterSelect extends Vue {
  @Prop() private rooms!: Record<number, number>

  checkedValues = []

  @Watch('checkedValues')
  onPropertyChanged(): void {
    this.handleSelectValues();
  }

  @Emit('handleSelectValues')
  handleSelectValues(): Record<number, number> {
    return this.checkedValues;
  }
}
</script>
