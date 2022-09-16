<template>
  <div class="container">
    <div class="row page-title p-2 mt-2">
      <div class="col-12">
        <h5 class="subheading2"><span>02</span> Meet your crew</h5>
      </div>
    </div>
    <div class="row">
      <div
        id="crew-carousel"
        class="carousel carousel-fade order-2 col-lg-6 crew-carousel"
        data-bs-ride="carousel"
        
      >
        <div class="carousel-indicators">
          <button
            v-for="(item, index) of crew"
            :key="index"
            type="button"
            data-bs-target="#crew-carousel,#crew-carousel-image"
            :data-bs-slide-to="index"
            :class="[index == 0 ? 'active' : '']"
            :aria-current="index == 0 ? true : false"
            :aria-label="item.name"
          ></button>
        </div>
        <div class="carousel-inner d-flex flex-nowrap">
          <div
            v-for="(item, index) of crew"
            :key="index"
            :class="['carousel-item', index == 0 ? 'active' : '']"
          >
            <div class="col-12">
              <div class="carousel-caption">
                <h6 class="subheading1">{{ item.role }}</h6>
                <h3>{{ item.name }}</h3>
                <p>{{ item.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-lg-6 order-1  carousel carousel-fade crew-carousel" id="crew-carousel-image"
        data-bs-ride="false"
      >
      <div class="carousel-inner">
        <div
          v-for="(item, index) of crew"
          :key="index"
          :class="['carousel-item', 'crew-image', index == 0 ? 'active' : '']"
        >
          <img :src="item.images.png" class="d-block" :alt="item.name" />
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sData from "@/data.json";
import { Carousel } from "bootstrap";

export default {
  data() {
    return {
      crew: sData.crew,
    };
  },
  beforeCreate: function () {
    document.body.className = "crew";
  },
  mounted() {
    let car = document.querySelector('#crew-carousel')
    let imgCar = new Carousel(document.querySelector('#crew-carousel-image'))
    car.addEventListener('slide.bs.carousel', event => {
        imgCar.to(event.to)
    })
  },
  
};
</script>

<style>
main {
  align-items: flex-start !important;
}
body.crew {
  background: url("/public/crew/background-crew-mobile.jpg");
}

@media (min-width: 768px) {
  body.crew {
    background: url("/public/crew/background-crew-tablet.jpg");
  }
}

@media (min-width: 992px) {
  body.crew {
    background: url("/public/crew/background-crew-desktop.jpg");
  }
}
</style>

<style scoped>
body.crew .carousel-item.active {
  display: flex !important;
  flex-direction: column;
}

.crew .carousel-item .carousel-caption {
  position: unset;
}
.crew .carousel-item img {
  width: 177px;
  margin: 0 auto;
}
.crew .carousel-item.active .carousel-caption {
  display: flex;
flex-direction: column;
padding-top: unset;
}
.crew-image {
  border-bottom: #383b4b solid 1px;
  margin-bottom: 1em;
}

.crew .carousel-indicators {
    position: unset;
}

.carousel-indicators button[data-bs-target] {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 8px;
  opacity: 17.44%;
}

.carousel-indicators button[data-bs-target].active {
  opacity: 100% !important;
}

.carousel-indicators button[data-bs-target]:hover,
.carousel-indicators button[data-bs-target]:focus {
  opacity: 50.01%;
}
.subheading1 {
  opacity: 49.51%;
}
h3 {
  font-size: 24px !important;
}
@media (min-width: 768px) {
}

@media (min-width: 992px) {
}
</style>