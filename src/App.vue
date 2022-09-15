<template>
  <AppNav />

  <main 
    style="flex-grow: 1; flex-grow: 1; align-items: center; display: inherit;"
  >
    <!-- <router-view /> -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
import sData from "@/data.json";
import AppNav from "@/components/AppNav.vue";

export default {
  name: "App",
  components: {
    AppNav,
  },
  data() {
    return { sData };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: stretch !important;
  height: 100vh;
}
body {
  transition: background-image 0.5s ease;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  height: 100vh;
  background-position: center center;
  font-family: "Barlow Condensed", sans-serif !important;
  font-size: 18px !important;
  color: #fff !important;
  background-color: rgb(11, 13, 23) !important;
}

.font-bellafair {
  font-family: "Bellefair", serif !important;
}
.font-barlow {
  font-family: "Barlow Condensed", sans-serif !important;
}

h1,
h2,
h3,
h4,
h6 {
  font-family: "Bellefair", serif !important;
  text-transform: uppercase;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: uppercase;
}

h1 {
  font-size: 80px !important;
}
h2 {
  font-size: 56px !important;
}
h3 {
  font-size: 32px !important;
}
h4 {
  font-size: 28px !important;
}
h5 {
  font-size: 16px !important;
  letter-spacing: 2.7px;
}
h6.subheading1 {
  font-size: 28px !important;
}
h6.subheading2 {
  font-size: 14px !important;
  font-family: "Barlow Condensed", sans-serif !important;
  letter-spacing: 2.35px;
  text-align: center;
  margin-bottom: 2.2em;
}
h6.subheading2 > span {
  opacity: 25%;
  margin-right: 18px;
}

@media (min-width: 768px) {
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
}

@media (min-width: 992px) {
}
</style>
