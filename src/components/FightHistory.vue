<template>
  <div class="n-container n-morph n-border ms-fh-events">
    <div
      v-for="(event, index) in getFightHistory"
      :key="event.id"
      class="ms-fh-event"
      :style="colorVal(index)"
    >
      <span v-if="event.type === 'monster'">{{ getMonsterName }}</span>
      <span v-else>{{ getPlayerName }}</span
      >{{ " " }} hits oponent for {{ event.damage }} points!
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    colorVal(index) {
      let col = 25 * index;
      if (col > 255) {
        col = 255;
      }
      return `color: rgba(${col},${col},${col},1)`;
    }
  },
  computed: {
    getFightHistory() {
      return this.$store.getters.getFightHistory;
    },
    getPlayerName() {
      return this.$store.getters.getPlayerName || "Player";
    },
    getMonsterName() {
      return this.$store.getters.getMonsterName || "Monster";
    }
  }
};
</script>

<style lang="scss" scoped>
.ms-fh-events {
  display: block;
  margin-top: 20px;
  padding: 20px 0;

  .ms-fh-event {
    width: 400px;
    text-align: center;
    margin-bottom: 5px;
    letter-spacing: 0.1rem;
  }
}
</style>
