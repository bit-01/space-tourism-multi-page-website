<template>
  <div class="row">
    <div class="col-lg-7">
      <div class="col-7 headContainer" style="margin:0 auto;">
        <h5>So, you want to travel to</h5>
        <h1>space</h1>
        <p >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
    </div>
    <div class="col-lg-5 explore">
        <router-link :to="{name: 'destination'}"  class="circle font-bellafair">
            <span>
                Explore
            </span>
            <div class="circle outerCircle"></div>
        </router-link>
    </div>
  </div>
</template>

<script>
</script>

<style>

@keyframes scaleIn {
  0% {
    transform: scale(.8, .8);
    /* opacity: .8; */
  }
  50% {
    transform: scale(2.5, 2.5);
    /* opacity: 0; */
  }
  100% {
    transform: scale(.8,.8);
    /* opacity: .8; */
  }
}

.circle {
    background-color: #fff;
    color: #0B0D17;
    border-radius: 100%;
    margin: 0 !important;
    font-size: 32px;
    text-transform: uppercase;
    letter-spacing: 2px;
    width: 274px;
    height: 274px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    
}

.outerCircle {
    opacity: 20.36%;
    animation: scaleIn 2s infinite cubic-bezier(.36, .11, .89, .32);
    position: absolute;
    z-index: -1;
    display: none;
    
}

.circle:hover .outerCircle, .circle:focus .outerCircle{
    display:inline-block;
}

.circle:hover {
    color: #0B0D17 !important;
}

.circle > span {
    height: fit-content;
}

@media (min-width: 992px) {

    .headContainer {
        text-align: start;
    }
    
    .explore {
        align-items: flex-end !important;
        display: flex;
        justify-content: center;
    }
}

</style>