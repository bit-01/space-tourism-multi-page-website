<template>
  <AppNav />

  <main>
    <router-view />
  </main>


</template>

<script>
import sData from '@/data.json'
import AppNav from '@/components/AppNav.vue'

export default {
  name: 'App',
  components: {
    AppNav
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
  font-family: 'Barlow Condensed', sans-serif !important;
  font-size: 18px !important;
  color: #fff !important;
}

h1,h2,h3,h4,h6 {
  font-family: 'Bellefair', serif !important;
  text-transform: uppercase;
}
h1,h2,h3,h4,h5,h6 {
  text-transform: uppercase;
}

h1 {
  font-size: 150px !important;
}
h2 {
  font-size: 100px !important;
}
h3 {
  font-size: 56px !important;
}
h4 {
  font-size: 32px !important;
}
h5 {
  font-size: 28px !important;
  letter-spacing: 4.75px;
}
h6.subheading1 {
  font-size: 28px !important;
}
h6.subheading2 {
  font-size: 14px !important;
  font-family: 'Barlow Condensed', sans-serif !important;
  letter-spacing: 2.35px;
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
