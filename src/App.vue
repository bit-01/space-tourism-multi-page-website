<template>
  <h1 class="m-5">heello</h1>
  
</template>

<script>
import sData from '@/data.json'


export default {
  name: 'App',
  components: {
    
    
},
  data() {
    return sData
  }
}
</script>

<style>
body {
  background-image: url('/public/home/background-home-mobile.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-position: center center;
}

@media (min-width: 768px) {
  body {
    background-image: url('/public/home/background-home-tablet.jpg');
  }
}

@media (min-width: 992px) {
  body {
    background-image: url('/public/home/background-home-desktop.jpg');
  }
}
</style>
