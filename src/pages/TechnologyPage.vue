<template>
  <div class="container-fluid">
    <div class="row page-title p-2 mt-2">
      <div class="col-12">
        <h5 class="subheading2">
          <span>{{ metaData.number }}</span> {{ metaData.title }}
        </h5>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2 order-lg-1 align-items-lg-center d-lg-flex order-2">
        <ul
          class="
            nav nav-pills
            mb-3
            justify-content-center justify-content-lg-center
          "
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
              :id="
                'pills-' + item.name.split(' ').join('-').toLowerCase() + '-tab'
              "
              data-bs-toggle="pill"
              :data-bs-target="
                '#pills-' + item.name.split(' ').join('-').toLowerCase()
              "
              :data-second-target="
                '#pills-data-' +
                item.name.split(' ').join('-').toLowerCase() +
                '-tab'
              "
              type="button"
              role="tab"
              :aria-controls="
                '#pills-' + item.name.split(' ').join('-').toLowerCase()
              "
              :aria-selected="index == 0 ? true : false"
              @click="onTechClick($event)"
            >
              {{ index + 1 }}
            </button>
          </li>
        </ul>

        <ul class="nav nav-pills d-none" id="pills-data-tab" role="tablist">
          <li
            v-for="(item, index) in dests"
            :key="index"
            class="nav-item"
            role="presentation"
          >
            <button
              :class="['nav-link', 'pill-data-btn', index == 0 ? 'active' : '']"
              :id="
                'pills-data-' +
                item.name.split(' ').join('-').toLowerCase() +
                '-tab'
              "
              data-bs-toggle="pill"
              :data-bs-target="
                '#data-' + item.name.split(' ').join('-').toLowerCase()
              "
              type="button"
              role="tab"
              :aria-controls="
                '#data-' + item.name.split(' ').join('-').toLowerCase()
              "
            >
              {{ index + 1 }}
            </button>
          </li>
        </ul>
      </div>
      <div class="col-lg-7 order-lg-2 d-lg-flex align-items-lg-center order-3">
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
            :id="'data-' + item.name.split(' ').join('-').toLowerCase()"
            role="tabpanel"
            :aria-labelledby="
              'pills-' + item.name.split(' ').join('-').toLowerCase() + '-tab'
            "
            :tabindex="index"
          >
            <h6 class="subheading2">The terminology...</h6>
            <h3>{{ item.name }}</h3>
            <p class="desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 order-lg-3 p-0 mb-2 order-1">
        <div class="tab-content" id="pills-tabContent">
          <div
            v-for="(item, index) of dests"
            :key="index"
            :class="['tab-pane', 'fade', index == 0 ? 'show active' : '']"
            :id="'pills-' + item.name.split(' ').join('-').toLowerCase()"
            role="tabpanel"
            :aria-labelledby="
              'pills-' + item.name.split(' ').join('-').toLowerCase() + '-tab'
            "
            :tabindex="index"
          >
            <picture>
              <source
                media="(min-width: 992px)"
                :srcset="publicPath+item.images.portrait"
              />
              <img
                :alt="item.name"
                :src="publicPath + item.images.landscape"
                class="planet-image"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sData from "@/data.json";
import { Tab } from "bootstrap";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      dests: sData.technology,
      metaData: useRoute().meta,
    };
  },
  props: ["publicPath"],

  beforeCreate: function () {
    document.body.className = "technology";
  },
  methods: {
    onTechClick(event) {
      let otherTabs = event.originalTarget.dataset.secondTarget;
      let nav = new Tab(document.querySelector(otherTabs));
      nav.show();
    },
  },
};
</script>

<style>
main {
  align-items: flex-start !important;
}
body.technology {
  background: url("/public/technology/background-technology-mobile.jpg");
}

@media (min-width: 768px) {
  body.technology {
    background: url("/public/technology/background-technology-tablet.jpg");
  }
}

@media (min-width: 992px) {
  body.technology {
    background: url("/public/technology/background-technology-desktop.jpg");
  }
}
</style>

<style scoped>
#pills-tabContent img {
  width: 100%;
}
#pills-tab {
  margin: 2em auto;
}

.nav-pills button.nav-link {
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  border: solid rgba(255, 255, 255, 0.25) 1px;
  padding: 0;
  margin: 0.5em;
  color: #fff;
}

.nav-pills button.nav-link.active {
  color: #0b0d17;
  background-color: #fff;
}
.nav-pills button.nav-link:hover,
.nav-pills button.nav-link:focus {
  border-color: #fff;
}
h6.subheading2 {
  font-size: 14px !important;
  letter-spacing: 2.7px;
  color: #d0d6f9;
}
h3 {
  font-size: 24px !important;
  margin-bottom: 0.7em;
}
@media (min-width: 768px) {
  .nav-pills button.nav-link {
    width: 60px !important;
    height: 60px !important;
    font-size: 24px;
  }

  h6.subheading2 {
    font-size: 16px !important;
  }
  h3 {
    font-size: 40px !important;
  }
  .desc {
    width: 55%;
    margin: 0 auto;
  }
  #pills-tab {
    margin-bottom: 2em !important;
  }
}

@media (min-width: 992px) {
  .desc {
    width: 65%;
    margin: 0;
    text-align: start !important;
  }
  h6.subheading2 {
    text-align: start;
  }
  h3 {
    font-size: 56px !important;
    text-align: start;
  }
  #pills-tab {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>