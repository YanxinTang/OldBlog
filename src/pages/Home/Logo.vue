<template>
  <router-link :to="{name: 'index'}">
    <div id="logo">
      <div class="path"></div>
      <div class="cursor"></div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'Logo',
}
</script>
<style scoped>
  #logo{
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 60px;
    height: 60px;
  }
  #logo .path, #logo .cursor{
    height: 100%;
    width: 50%;
    position: relative;
  }
  #logo .path::before,
  #logo .path::after,
  #logo .cursor::after{
    content: '';
    display: block;
    position: absolute;
    background: #2d374b;
  }
  #logo .path::before,
  #logo .path::after{
    width: 25px;
    height: 6px;
    transform-origin: 23px center;
    top: calc(50% - 3px);
  }
  #logo .path::before{
    transform: rotate(45deg);
  }
  #logo .path::after{
    transform: rotate(-45deg);
  }
  #logo .cursor::after{
    height: 7px;
    width: 16px;
    top: 40px;
    animation: cursor-bling 1s infinite steps(1);
  }

  @keyframes cursor-bling {
    50%{
      opacity: 0;
    }
  }
</style>
