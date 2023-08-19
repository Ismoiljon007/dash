<template>
    <div class="loading" v-if="store.loader">
        <div class="loader"></div>
    </div>
</template>

<script setup>
import { useStore } from '~~/store/store';
const store = useStore()
</script>

<style lang="scss">
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #4D6A71;
    z-index: 100;
    display: grid;
    place-items: center;
}
.loader {
  border: 4px solid #e9e9e9;
  border-left-color: transparent;
  border-radius: 50%;
}

.loader {
  border: 4px solid #e9e9e9;
  border-left-color: transparent;
  width: 50px;
  height: 50px;
}

.loader {
  border: 4px solid #e9e9e9;
  border-left-color: transparent;
  width: 50px;
  height: 50px;
  animation: spin89345 1s linear infinite;
}

@keyframes spin89345 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>