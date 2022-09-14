<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/shared/logo.svg">
      </a>
      <button class="navbar-toggler p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><span class="num">00</span> Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="num">01</span> Destination</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="num">02</span> Crew</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="num">03</span> Technology</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
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

nav {
  margin-top: .6em;
}
nav .container-fluid {
  padding: 0 1.5em;
}
.navbar-brand > img {
  width:40px;
}

.navbar-toggler-icon {
  background-image: url('/public/shared/icon-hamburger.svg') !important;
  width: 24px !important;
  height: 21px !important;
}

.offcanvas {
  max-width: 67.7% !important;
  background-color: rgba(255,255,255,.04) !important;
  backdrop-filter: blur(36px) !important;
}

.offcanvas-header {
  justify-content: end !important;
  padding: 2.1em 1.8em !important;
  border: none !important;
}

.btn-close {
  background: url('/public/shared/icon-close.svg') no-repeat center !important;
  width: 19.09px !important;
  height: 19.09px !important;
}

.navbar-nav {
  align-items: start !important;
}

a.nav-link {
  padding: 1em;
  text-transform: uppercase;
  color: #fff;
}
.nav-item {
  width: 100%;
}

.num {
  margin-right: .5em;
  font-weight: bold;
}

a.nav-link:hover {
  border-bottom: solid 2px #fff; 
}

@media (min-width: 768px) {
  body {
    background-image: url('/public/home/background-home-tablet.jpg');
  }


  .nav-item {
    height: 100%;
    margin: 0 .7em;
  }

}

@media (min-width: 992px) {
  body {
    background-image: url('/public/home/background-home-desktop.jpg');
  }
}
</style>
