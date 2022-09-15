<template>
  <div class="row">
    <div class="col-lg-7">
      <div class="col-md-7 col-9 headContainer" style="margin: 0 auto">
        <h5>So, you want to travel to</h5>
        <h1>space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
    </div>
    <div class="col-lg-5 explore">
      <router-link :to="{ name: 'destination' }" class="circle font-bellafair">
        <span> Explore </span>
        <div class="circle outerCircle"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import sData from "@/data.json";

export default {
  data() {
    return { sData };
  },
  beforeCreate: function () {
    document.body.className = "home";
  },
};
</script>

<style scoped>
@keyframes scaleIn {
  0% {
    transform: scale(0.8, 0.8);
    /* opacity: .8; */
  }
  50% {
    transform: scale(1.8, 1.8);
    /* opacity: 0; */
  }
  100% {
    transform: scale(0.8, 0.8);
    /* opacity: .8; */
  }
}
.circle {
  background-color: #fff;
  color: #0b0d17;
  border-radius: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  margin: 0 auto !important;
  width: 150px;
  font-size: 20px;
  height: 150px;
  letter-spacing: 1.25px;
}

.outerCircle {
  opacity: 20.36%;
  animation: scaleIn 2s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);
  position: absolute;
  z-index: -1;
  display: none;
}

.circle:hover .outerCircle,
.circle:focus .outerCircle {
  display: inline-block;
}

.circle:hover {
  color: #0b0d17 !important;
}

.circle > span {
  height: fit-content;
}
.headContainer {
  text-align: center;
  margin-bottom: 5em !important;
}
.home div.row,
.home div.col-lg-7,
.explore {
  padding: 0 !important;
  margin: 0 !important;
}

@media (min-width: 768px) {
  h5 {
    font-size: 20px !important;
    letter-spacing: 3.38px;
  }

  p {
    font-size: 21px;
  }
  .circle {
    font-size: 32px;
    letter-spacing: 2px;
    width: 274px;
    height: 274px;
  }

  .headContainer {
    margin-bottom: 0 !important;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .row {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 992px) {
  .headContainer {
    text-align: start;
    margin-bottom: 0 !important;
  }

  .explore {
    align-items: flex-end !important;
    display: flex;
    justify-content: center;
  }

  .circle {
    margin: 0 !important;
  }
}
</style>

<style>
body.home {
  background: url("/public/home/background-home-mobile.jpg");
}
@media (min-width: 768px) {
  body.home {
    background: url("/public/home/background-home-tablet.jpg");
  }
}

@media (min-width: 992px) {
  body.home {
    background: url("/public/home/background-home-desktop.jpg");
  }
}
</style>