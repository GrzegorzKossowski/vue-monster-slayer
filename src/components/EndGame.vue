<template>
  <div class="n-container ms-eg-container">
    <div class="ms-eg-panel n-morph n-border">
      <h1>END GAME</h1>
      <div class="ms-eg-winner">
        <span v-if="winner.type === 'monster'">The Monster</span>
        <span v-else>The Player</span>
        has won!
      </div>

      <BasicButton @click="resetGame" label="START NEW GAME" />
    </div>
  </div>
</template>

<script>
import BasicButton from "../components/BasicButton";
export default {
  props: ["winner"],
  methods: {
    resetGame() {
      this.$emit("reset-game");
    }
  },
  components: {
    BasicButton
  }
};
</script>

<style scoped lang="scss">
.ms-eg-container {
  position: absolute;
  background: rgba($color: #fff, $alpha: 0.9);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  user-select: none;

  .ms-eg-panel {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 4rem;
    background: #fff;
    text-align: center;

    .ms-eg-winner {
      font-weight: 600;
      letter-spacing: .2rem;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
