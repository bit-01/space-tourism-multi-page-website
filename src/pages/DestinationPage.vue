<template>
  <div class="container">
    <div class="row page-title p-2 mt-2">
      <div class="col-12">
        <h5 class="subheading2"><span>01</span> Pick your destination</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
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
      <div class="col-lg-4">
        <ul
          class="nav nav-pills mb-3 justify-content-center justify-content-lg-start"
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
            :class="[
              'tab-pane',
              'planet-data',
              'text-center',
              'fade',
              index == 0 ? 'show active' : '',
            ]"
            :id="'data-' + item.name.toLowerCase()"
            role="tabpanel"
            :aria-labelledby="'pills-' + item.name.toLowerCase() + '-tab'"
            :tabindex="index"
          >
            <h2>{{ item.name }}</h2>
            <p class="desc">{{ item.description }}</p>
            <div class="row justify-content-center justify-content-lg-start">
                <div class="col-lg-6 col-md-4 mb-4 text-lg-start">
                    <h6 class="subheading2">avg. distance</h6>
                    <h5 class="font-bellafair">{{ item.distance }}</h5>
                </div>
                <div class="col-lg-6 col-md-4 mb-4 text-lg-start">
                    <h6 class="subheading2">Est. travel time</h6>
                    <h5 class="font-bellafair">{{ item.travel }}</h5>
                </div>
            </div>
            
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
      let otherTabs = event.originalTarget.dataset.secondTarget;
      let nav = document.querySelector(otherTabs);
      let active = document.querySelector(".planet-data.show.active");

      active.classList.remove("active", "show");
      nav.classList.add("show", "active");
    },
  },
};
</script>

<style>
    main {
    align-items: flex-start !important;
    }
    body.destination {
    background: url("/public/destination/background-destination-mobile.jpg");
    }

    @media (min-width: 768px) {
    body.destination {
        background: url("/public/destination/background-destination-tablet.jpg");
    }
    }

    @media (min-width: 992px) {
    body.destination {
        background: url("/public/destination/background-destination-desktop.jpg");
    }
    }
</style>

<style scoped>
.planet-image {
  width: 170px;
  margin: 1em auto;
  display: block;
}
.planet-data .desc {
  width: 75%;
  margin: 0 auto;
  padding-bottom: 2em;
  margin-bottom: 2em;
  border-bottom: 1px solid #383b4b;
  color: #d0d6f9;
  font-size: 15px;
}
.planet-data .subheading2 {
    color: #D0D6F9;
    margin-bottom: 12px !important;
}
.planet-data h5 {
    font-size: 28px !important;
}
.nav-pills .nav-link {
  font-size: 14px !important;
  text-transform: uppercase;
  letter-spacing: 2.36px;
  color: #d0d6f9;
  background-color: transparent !important;
  padding: 1em 0 !important;
  border-radius: 0 !important;
}
.nav-pills .nav-item {
  margin: 0 0.5em !important;
}
.nav-pills .nav-link:hover,
.nav-pills .nav-link:focus {
  border-bottom: rgba(255, 255, 255, 0.5) solid 3px;
}
.nav-pills .nav-link.active {
  border-bottom: #fff solid 3px;
  color: #fff;
}

@media (min-width: 768px) {
    .planet-image {
        width: 300px;
    }
    .nav-pills .nav-link {
        font-size: 16px !important;
    }

    .planet-data h2 {
        font-size: 80px !important;
    }

    .planet-data .desc {
        padding-bottom: 3em !important;
    }
}

@media (min-width: 992px) {
    .planet-data h2 {
        text-align: start;
    }
    .planet-data .desc {
        text-align: start;
        margin: auto 0 !important;
        width: 100%;
    }
    .planet-data .subheading2 {
        text-align: start;
    }

    .planet-data h5 {
        letter-spacing: 0;
    }
    
}
</style>