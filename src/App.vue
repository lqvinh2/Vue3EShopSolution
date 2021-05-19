<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
  </div>
  <router-view/>

<div>
  <h2>Font Awesome test</h2>
</div>
<i class="fab fa-accusoft"></i>
<i class="fab fa-accusoft"></i>
<i class="fab fa-accusoft"></i>
<div>
  <h2>Bootstrap test</h2>
  <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
</div>


</template>


<script>

  
export default {
 async setup() {
  },
}


</script>


<style>

@import 'assets/css/main.css';


</style>



