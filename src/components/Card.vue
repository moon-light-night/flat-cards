<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header_item half-opacity">
        3 этаж
      </div>
      <div class="card-header_item">
        1 комната - 22.94 м2
      </div>
    </div>
    <div class="card-body">
      <span class="card-body_num">
        № 256
      </span>
      <img src="@/assets/card-image.png" alt="card-image">
    </div>
    <div class="card-footer">
      <div class="card-footer_sum">
        {{ (2729860).toLocaleString() + 'р.' }}
      </div>
      <div class="card-footer_subsum">
        {{ (119000).toLocaleString() + 'р. за м2' }}
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
