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
    <FilterRange
      :filter="flatFilterInit"
      :step="1"
      @handleFilter="setFlats"
    >
    <span style="text-transform:uppercase;">
      Этаж
    </span>
    </FilterRange>
    <FilterRange
      :filter="squareFilterInit"
      :step="1"
      @handleFilter="setSquares"
    >
    <span style="text-transform:uppercase;">
      Площадь
    </span>, м2
    </FilterRange>
    <FilterRange
      :filter="priceFilterInit"
      :step="0.1"
      @handleFilter="setPrices"
    >
    <span style="text-transform:uppercase;">
      Стоимость
    </span>, млн.р.
    </FilterRange>
    <div class="filters-btns">
      <AcceptBtn :msg="'hi!'">Применить</AcceptBtn>
      <CancelBtn>Сбросить фильтр</CancelBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilterRange from '@/components/FilterRange.vue';
import FilterSelect from '@/components/FilterSelect.vue';
import AcceptBtn from '@/components/Buttons/AcceptBtn.vue';
import CancelBtn from '@/components/Buttons/CancelBtn.vue';
import data from '@/assets/data/data.json';

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
    rooms: []
  }),
  created() {
    const floors: number[] = [];
    const squares: number[] = [];
    const prices: number[] = [];
    const rooms: Set<number> = new Set([]);
    data.forEach((el) => {
      floors.push(el.floor);
      squares.push(el.square);
      prices.push(el.price);
      rooms.add(el.rooms);
    });
    this.$data.rooms = rooms;
    [this.$data.flatFilterInit[0], this.$data.filters.flat[0]] = [Math.min(...floors), Math.min(...floors)];
    [this.$data.flatFilterInit[1], this.$data.filters.flat[1]] = [Math.max(...floors), Math.max(...floors)];
    this.$data.roomFilterInit[0] = Math.min(...rooms);
    this.$data.roomFilterInit[1] = Math.max(...rooms);
    [this.$data.squareFilterInit[0], this.$data.filters.square[0]] = [+(Math.min(...squares)).toFixed(), +(Math.min(...squares)).toFixed()];
    [this.$data.squareFilterInit[1], this.$data.filters.square[1]] = [+(Math.max(...squares)).toFixed(), +(Math.max(...squares)).toFixed()];
    [this.$data.priceFilterInit[0], this.$data.filters.price[0]] = [(+Math.floor((Math.min(...prices) / 1000000) * 10) / 10), (+Math.floor((Math.min(...prices) / 1000000) * 10) / 10)];
    [this.$data.priceFilterInit[1], this.$data.filters.price[1]] = [(+Math.floor((Math.max(...prices) / 1000000) * 10) / 10), (+Math.floor((Math.max(...prices) / 1000000) * 10) / 10)];
  },
  methods: {
    setFlats(val) {
      this.$data.filters.flat = val;
    },
    setSquares(val) {
      this.$data.filters.square = val;
    },
    setPrices(val) {
      this.$data.filters.price = val;
    },
    setSelectValues(val) {
      this.$data.filters.room = val;
    }
  }
})
export default class Filters extends Vue {}
</script>
