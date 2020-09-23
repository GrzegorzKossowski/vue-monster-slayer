<template>
  <div class="ms-hb-baar">
    <span class="ms-hb-label">
      {{ health }}
    </span>
    <span class="ms-hb-health" :style="cssVars"></span>
  </div>
</template>

<script>
export default {
  props: ["health"],
  computed: {
    cssVars() {
      return { "--bar-length": this.health };
    }
  }
};
</script>

<style scoped lang="scss">
.ms-hb-baar {
  position: relative;
  height: 2rem;
  width: 80%;
  background: #444;

  .ms-hb-label {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 99;
    font-weight: 600;
  }
  .ms-hb-health {
    background: #ab003c;
    height: 100%;
    display: inline-block;
    width: var(--bar-length);
    transition: width 0.5s ease;
  }
}
</style>