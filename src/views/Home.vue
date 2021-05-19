<template>
<div class="container-fluid">
      <img alt="Vue logo" src="../assets/logo.png">
    <h2>test run terminal : "json-server --watch data/db.json"</h2>
    <div v-if="projects.length">
        <div v-for="project in projects" :key="project.id">
             <p>{{project.id}}</p>
   
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

    //fetch('http://localhost:3000/persons')
     fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then((data) => {this.projects = data;})
    .catch(err => console.log(err.message))

  },   // end mounted

}
</script>
