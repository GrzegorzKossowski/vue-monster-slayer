<template>
  <div class="ms-av-main n-morph-inset">
    <div class="ms-av-inner n-morph">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.ms-av-main {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;

  .ms-av-inner {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
