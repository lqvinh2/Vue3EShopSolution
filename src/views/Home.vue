<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div v-if="projects.length">
        <div v-for="project in projects" :key="project.id">

             <p>{{project.title}}</p>

        </div>
    </div>
  
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  },

  data()
  {
      return {
        projects : []
      }
  }, // end data

  mounted(){

    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then((data) => {this.projects = data; console.log(data)})
    .catch(err => console.log(err.message))

  },   // end mounted

}
</script>
