<template>
  <div>
    <h2>todos</h2>
    <ul>
      <li v-for="(project, index) in projects" :key="project.id">
        <p>{{ index + 1 }}</p>
        <div class="showInfo">
          {{ project.display }}
          <img :src="project.avatar" :alt="project.id" />
        </div>
      </li>
    </ul>

    <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img src="images/sample-1.jpg" />
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
  </div>
</template>

<script>
import { computed, watch, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

////
// import Todos from '../src/components/Todos.vue'
export default {
  name: "",
  props: ["", ""],
  // components:{Todos},

  setup() {
    // code here
    const projects = ref([]);
    const idShow = ref(0);
    const emailXXX = ref(-1000);
    const handleSubmit = () => {
      console.log("1234");
    };
    ///////////////

    onMounted(() => {
      idShow.value = 0;
      fetch("http://localhost:3000/persons")
        .then((res) => res.json())
        .then((data) => {
          projects.value = data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
    const router = useRouter();

    return { emailXXX, handleSubmit, projects, idShow };
  },
};
</script>

<style lang="css" scoped>
/* @import 'assets/css/main.css'; */
.showInfo {
  border: 1px solid red;
}
img {
  width: 200px;
  height: 200px;
}
</style>
