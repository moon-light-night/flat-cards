<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header_item half-opacity">
        {{ `${card.floor} этаж` }}
      </div>
      <div class="card-header_item">
        {{ card.rooms | pluralize(['комната', 'комнаты', 'комнат']) }} - {{ `${card.square} м` }}<sup>2</sup>
      </div>
    </div>
    <div class="card-body">
      <span class="card-body_num">
        {{ `№ ${card.building_id}` }}
      </span>
      <img src="@/assets/card-image.png" alt="card-image">
    </div>
    <div class="card-footer">
      <div class="card-footer_sum">
        {{ `${(card.price).toLocaleString()} р.` }}
      </div>
      <div class="card-footer_subsum half-opacity">
        {{ `${(+(card.price / card.square).toFixed()).toLocaleString()} р. за м` }}<sup>2</sup>
      </div>
    </div>
    <div class="card-info">
      <InfoBtn>Подробнее</InfoBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import InfoBtn from '@/components/Buttons/InfoBtn.vue';

@Component({
  components: {
    InfoBtn
  }
})
export default class Card extends Vue {
  @Prop() private card!: Record<string, unknown>
}
</script>
