<template>
  <div class="filters">
    <FilterSelect
      :rooms="rooms"
      @handleSelectValues="setSelectValues"
    >
    <span style="text-transform:uppercase;">
      Комнаты
    </span>
    </FilterSelect>
    <span class="filter-tip" />
    <FilterRange
      v-if="renderComponent"
      :filter="flatFilterInit"
      :step="1"
      @handleFilter="setFlats"
      ref="custom"
    >
    <span style="text-transform:uppercase;">
      Этаж
    </span>
    </FilterRange>
    <span class="filter-tip" />
    <FilterRange
      v-if="renderComponent"
      :filter="squareFilterInit"
      :step="1"
      @handleFilter="setSquares"
      ref="custom"
    >
    <span style="text-transform:uppercase;">
      Площадь
    </span>, м<sup>2</sup>
    </FilterRange>
    <span class="filter-tip" />
    <FilterRange
      v-if="renderComponent"
      :filter="priceFilterInit"
      :step="0.1"
      @handleFilter="setPrices"
      ref="custom"
    >
    <span style="text-transform:uppercase;">
      Стоимость
    </span>, млн.р.
    </FilterRange>
    <span class="filter-tip" />
    <div class="filters-btns">
      <AcceptBtn @handleAction="filterCards">Применить</AcceptBtn>
      <CancelBtn @handleAction="clearFilters">Сбросить фильтр</CancelBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FilterRange from '@/components/FilterRange.vue'
import FilterSelect from '@/components/FilterSelect.vue'
import AcceptBtn from '@/components/Buttons/AcceptBtn.vue'
import CancelBtn from '@/components/Buttons/CancelBtn.vue'
import data from '@/assets/data/data.json'
import { eventBus } from '@/main'

@Component({
  components: {
    FilterRange,
    FilterSelect,
    AcceptBtn,
    CancelBtn
  },
  data: () => ({
    flatFilterInit: [0, 0],
    squareFilterInit: [0, 0],
    priceFilterInit: [0, 0],
    roomFilterInit: [0, 0],
    filters: {
      flat: [0, 0],
      square: [0, 0],
      price: [0, 0],
      room: []
    },
    rooms: [],
    filteredRooms: [],
    filteredCards: [],
    renderComponent: true
  }),
  created() {
    const floors: number[] = []
    const squares: number[] = []
    const prices: number[] = []
    const rooms: Set<number> = new Set([])
    data.forEach((el) => {
      floors.push(el.floor)
      squares.push(el.square)
      prices.push(el.price)
      rooms.add(el.rooms)
    })
    this.$data.rooms = rooms
    this.$data.flatFilterInit[0] = this.$data.filters.flat[0] = Math.min(...floors)
    this.$data.flatFilterInit[1] = this.$data.filters.flat[1] = Math.max(...floors)
    this.$data.roomFilterInit[0] = Math.min(...rooms)
    this.$data.roomFilterInit[1] = Math.max(...rooms)
    this.$data.squareFilterInit[0] = this.$data.filters.square[0] = (+(Math.min(...squares)).toFixed())
    this.$data.squareFilterInit[1] = this.$data.filters.square[1] = (+(Math.max(...squares)).toFixed())
    this.$data.priceFilterInit[0] = this.$data.filters.price[0] = (+Math.floor((Math.min(...prices) / 1000000) * 10) / 10)
    this.$data.priceFilterInit[1] = this.$data.filters.price[1] = (+Math.floor((Math.max(...prices) / 1000000) * 10) / 10)
  },
  methods: {
    setFlats(val) {
      this.$data.filters.flat = val
    },
    setSquares(val) {
      this.$data.filters.square = val
    },
    setPrices(val) {
      this.$data.filters.price = val
    },
    setSelectValues(val) {
      this.$data.filters.room = val
    },
    forceRerender() {
      this.$data.renderComponent = false
      this.$nextTick(() => {
        this.$data.renderComponent = true
      })
    },
    filterCards() {
      this.$data.filteredCards = data.filter((el) => (
        (el.floor >= this.$data.filters.flat[0] && el.floor <= this.$data.filters.flat[1])
        && ((el.square).toFixed() >= this.$data.filters.square[0] && (el.square).toFixed() <= this.$data.filters.square[1])
        && (((+Math.round(el.price / 1000000) * 10) / 10) >= (this.$data.filters.price[0]) && ((+Math.round(el.price / 1000000) * 10) / 10) <= Math.round(this.$data.filters.price[1]))
        && (this.$data.filters.room.length ? this.$data.filters.room.includes(el.rooms) : el.rooms)
      ))
      this.$store.commit('setFilteredCards', this.$data.filteredCards)
      console.log(this.$data.filteredCards)
    },
    clearFilters() {
      this.$data.filters.flat = this.$data.flatFilterInit
      this.$data.filters.square = this.$data.squareFilterInit
      this.$data.filters.prices = this.$data.priceFilterInit
      this.$data.filters.room = []
      eventBus.$emit('clearSelectValues')
      this.$data.renderComponent = false
      this.$nextTick(() => {
        this.$data.renderComponent = true
      })
      this.$store.commit('clearFilteredCards')
    }
  }
})
export default class Filters extends Vue {}
</script>
