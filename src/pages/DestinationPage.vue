<template>
  <div class="row">
    <div class="col-lg-7">
      
    </div>
    <div class="col-lg-5 explore">

    </div>
  </div>
</template>

<script>
import sData from '@/data.json'

export default {
  data() {
    return {sData}
  },
   beforeCreate: function () {
    document.body.className = "destination";
  },
}
</script>

<style>

body.destination {
  background: none;
}

@media (min-width: 768px) {

  body.destination {
    background: none;
  }
}

@media (min-width: 992px) {
  body.destination {
    background: none;
  }
}
</style>

<style scoped>

</style>