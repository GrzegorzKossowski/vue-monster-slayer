<template>
  <button :disabled="disabled">
    <span class="ms-bb-label">
      {{ label }}
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    disabled: { type: Boolean, required: false, default: false }
  }
};
</script>

<style scoped lang="scss">
$text-secondary: #2d4cc8;

button {
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  color: $text-secondary;
}
</style>