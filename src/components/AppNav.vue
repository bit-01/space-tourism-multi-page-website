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
                <router-link :to="{name: 'app'}" :class="['nav-link', $route.name == 'app' ? 'active' : '']" aria-current="page" ><span class="num">00</span> Home</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'destination'}" :class="['nav-link', $route.name == 'destination' ? 'active' : '']" ><span class="num">01</span> Destination</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'crew'}" :class="['nav-link', $route.name == 'crew' ? 'active' : '']" ><span class="num">02</span> Crew</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'technology'}" :class="['nav-link', $route.name == 'technology' ? 'active' : '']" ><span class="num">03</span> Technology</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  
  
  export default {
    name: 'AppNav',
    components: {
  
  
    }
  }
  </script>
  
<style>
  body nav .offcanvas-backdrop {
    display: none !important;
  }
</style>

  <style scoped>

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
    justify-content: flex-end !important;
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
  