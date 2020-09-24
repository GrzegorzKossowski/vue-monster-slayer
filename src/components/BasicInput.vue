<template>
  <div class="ms-bi-content">
    <input
      type="text"
      class="n-morph-inset n-border"
      maxlength="15"
      placeholder="Your name"
      v-model="playerName"
      @input="setName"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerName: ""
    };
  },
  methods: {
    setName() {
      console.log(this.playerName);
      this.$store.dispatch("setPlayerName", this.playerName);
    }
  }
};
</script>

<style scoped lang="scss">
.ms-bi-content {
  margin: 1rem 0;
}
input {
  font-size: 2rem;
  text-align: center;
  padding: 0.5rem;
}
</style>