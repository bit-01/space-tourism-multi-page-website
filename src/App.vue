<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/shared/logo.svg">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <span class="line"></span>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav flex-grow-1">
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


  <h1 class="m-4">Hello</h1>
  <h2 class="m-4">Hello</h2>
  <h3 class="m-4">Hello</h3>
  <h4 class="m-4">Hello</h4>
  <h5 class="m-4">Hello</h5>
  <h5 class="m-4">Hello</h5>
  <p class="m-4">Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello</p>
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


nav {
  margin-top: 1em;
}

.navbar-brand, .navbar-toggler {
  padding: 0 .8em !important;
}
.navbar-brand > img {
  width:40px;
}

.navbar-toggler-icon {
  background-image: url('/public/shared/icon-hamburger.svg') !important;
  width: 24px !important;
  height: 21px !important;
}

.navbar-toggler, .btn-close {
  box-shadow: none !important;
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
  font-size: 16px !important;
  letter-spacing: 2.7px;
  color: #fff;

}
.nav-item {
  width: 100%;
}

.num {
  margin-right: .5em;
  font-weight: bold;
}

a.nav-link.active {
  border-bottom: solid 2px #fff !important; 
  color: #fff !important; 
}
a.nav-link:hover, a.nav-link:focus,a.nav-link:active {
  border-bottom: solid 2px rgba(255,255,255,.5025) !important;
  color: #fff !important; 
}

.line {
  display: none;
}

@media (min-width: 768px) {
  body {
    background-image: url('/public/home/background-home-tablet.jpg');
  }

  nav .container-fluid {
    padding: 0 !important;
  }

  .navbar-brand {
    padding: 1.3em 1.8em !important;
  }
  .navbar-brand > img {
    width:48px;
  }

  .nav-item {
    height: 100%;
    margin: 0 .7em;
    width: auto !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a.nav-link {
    height: 100%;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    display: flex;
  }

  .num {
    display: none;
  }

  nav {
    padding: 0 !important;
    margin: 0 !important;
  }

  .navbar-nav {
    padding: 0 !important;
    display: flex;
    justify-content: space-evenly !important;
    
  }

  .navbar-nav, .offcanvas-body {
    height: 100%;
  }

  div.offcanvas.offcanvas-end{
    background-color: rgba(255,255,255,.04) !important;

  }

  .navbar-expand-md div.offcanvas {
    height: 86px !important;
    position: absolute !important;
  }
  .offcanvas-body {
    padding: 0 2em !important;
  }

}

@media (min-width: 992px) {
  body {
    background-image: url('/public/home/background-home-desktop.jpg');
  }

  nav {
    margin-top: 2em !important;
  }

  .navbar-brand {
    padding: 1.3em 2.5em !important;
  }

  .offcanvas {
    min-width: 57.2% !important;
    justify-content: center;
    align-items: center;
  }

  .offcanvas-body {
    width: 70%;
    justify-content: center !important;
  }

  .line {
    border-bottom: #fff4 solid 1px;
    width: 35%;
    z-index: 1;
    left: 10em;
    position: absolute;
    top: 45%;
    display: inline-block;
  }

  .num {
    display: inline-block;
  }
}
</style>
