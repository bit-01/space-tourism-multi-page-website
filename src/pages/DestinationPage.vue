<template>
  <div class="container">
    <div class="row page-title p-2 mt-2">
      <div class="col-12">
        <h6 class="subheading2"><span>01</span> Pick your destination</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="tab-content" id="pills-tabContent">
          <div
            v-for="(item, index) of dests"
            :key="index"
            :class="['tab-pane', 'fade', index == 0 ? 'show active' : '']"
            :id="'pills-' + item.name.toLowerCase()"
            role="tabpanel"
            :aria-labelledby="'pills-' + item.name.toLowerCase() + '-tab'"
            tabindex="0"
          >
            <img :src="item.images.png" class="planet-image" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <ul
          class="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li
            v-for="(item, index) in dests"
            :key="index"
            class="nav-item"
            role="presentation"
          >
            <button
              :class="['nav-link', index == 0 ? 'active' : '']"
              :id="'pills-' + item.name.toLowerCase() + '-tab'"
              data-bs-toggle="pill"
              :data-bs-target="'#pills-' + item.name.toLowerCase()"
              :data-second-target="'#data-' + item.name.toLowerCase()"
              type="button"
              role="tab"
              :aria-controls="'#pills-' + item.name.toLowerCase()"
              :aria-selected="index == 0 ? true : false"
              @click="onPlanetClick($event)"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-data">
          <div
            v-for="(item, index) of dests"
            :key="index"
            :class="['tab-pane', 'planet-data', 'fade', index == 0 ? 'show active' : '']"
            :id="'data-' + item.name.toLowerCase()"
            role="tabpanel"
            :aria-labelledby="'pills-' + item.name.toLowerCase() + '-tab'"
            :tabindex="index"
          >
            <p>{{ item.name }}</p>
            <p>{{ item.description }}</p>
            <p>{{ item.distance }}</p>
            <p>{{ item.travel }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sData from "@/data.json";

export default {
  data() {
    return {
      dests: sData.destinations,
    };
  },
  beforeCreate: function () {
    document.body.className = "destination";
  },
  methods: {
    onPlanetClick(event) {
        let otherTabs = event.originalTarget.dataset.secondTarget
        let nav = document.querySelector(otherTabs);
        let active = document.querySelector('.planet-data.show.active')
        
        active.classList.remove('active', 'show')
        nav.classList.add('show', 'active')
    },
  },
};
</script>

<style>
main {
  align-items: flex-start !important;
}
body.destination {
  background: url("/public/destination/background-destination-desktop.jpg");
}

@media (min-width: 768px) {
  body.destination {
    background: url("/public/destination/background-destination-tablet.jpg");
  }
}

@media (min-width: 992px) {
  body.destination {
    background: url("/public/destination/background-destination-mobile.jpg");
  }
}
</style>

<style scoped>
.planet-image {
  width: 170px;
  margin: 1em auto;
  display: block;
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}
</style>