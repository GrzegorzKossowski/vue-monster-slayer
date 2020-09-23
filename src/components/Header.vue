<template>
  <header class="n-morph">
    <div class="ms-title"><i class="fab fa-vuejs"></i> {{ title }}</div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Monster Slayer Game"
    };
  }
};
</script>

<style scoped lang='scss'>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 100;
  height: 6rem;

  .ms-title {
    font-weight: 600;
    font-size: 2rem;
  }
}
</style>