<template>
  <div class="ms-h-card n-border n-morph">
    <h3>{{ creature.name }} Health</h3>
    <HealthBar :health="creature.health + '%'" />
  </div>
</template>

<script>
import HealthBar from "./HealthBar";

export default {
  props: {
    creature: {
      name: String,
      health: Number
    }
  },
  components: {
    HealthBar
  }
};
</script>

<style scoped lang='scss'>
.ms-h-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 6rem;
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 2rem 0;
}
</style>