<template>
  <div class="filter-wrap">
    <label class="filter-label">
      <slot />
    </label>
    <div v-if="sliderValue.length" class="filter-value_wrap">
      <div class="filter-value_display">
        {{ sliderValue[0] }}
      </div>
      <span class="tips">
        -
      </span>
      <div class="filter-value_display display-tip">
        {{ sliderValue[1] }}
      </div>
    </div>
    <VueRangeSlider
      ref="slider"
      :min="filter[0]"
      :max="filter[1]"
      :step="step"
      @slide-end="handleFilter"
      v-model="sliderValue">
    </VueRangeSlider>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Watch,
  Emit,
  Vue
} from 'vue-property-decorator'
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

@Component({
  components: {
    VueRangeSlider
  },
  data: () => ({
    sliderValue: []
  }),
  mounted() {
    this.$data.sliderValue = this.$props.filter
  }
})
export default class FilterRange extends Vue {
  @Prop() private filter!: Array<number>

  @Prop() private step!: number

  @Watch('filter')
  onPropertyChanged(): void {
    this.$data.sliderValue[0] = this.filter
  }

  @Emit('handleFilter')
  handleFilter(): Record<number, number> {
    return this.$data.sliderValue
  }
}
</script>
