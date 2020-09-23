<template>
  <Home />
</template>

<script>
import Home from "./view/Home";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css");

@mixin border {
  border: 0.0625rem solid #d1d9e6;
  border-radius: 0.55rem;
  border: #d1d9e6;
}
@mixin outer-shadow {
  box-shadow: 6px 6px 12px #b8b9be, -6px -6px 12px #fff;
}
@mixin inner-shadow {
  box-shadow: 6px 6px 12px #b8b9be inset, -6px -6px 12px #fff inset;
}

$text-primary: #2c3e50;
$text-secondary: #2d4cc8;

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #e6e7ee;
  color: $text-primary;
}

button {
  outline: none;
  background: #e6e7ee;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0.5rem;
  @include border();
  @include outer-shadow();

  &:active,
  &:hover {
    @include inner-shadow();
  }

  &:disabled {
    color: #e6e7ee;
    text-shadow: -1px -1px 1px #b8b9be, 1px 1px 1px #fff;
    @include outer-shadow();
    & .n-svg {
      filter: drop-shadow(-1px -1px 1px #b8b9be) drop-shadow(1px 1px 1px #fff);
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.n-morph {
  @include outer-shadow();
}
.n-morph-inset {
  @include inner-shadow();
}
.n-border {
  @include border();
}
.n-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
