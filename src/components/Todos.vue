<template>
  <div>
    <h2>todos</h2>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <div class="showInfo">
          {{ project.display }}
          <img :src="project.avatar" :alt="project.id" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, watch, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

////
// import Todos from '../src/components/Todos.vue'
export default {
  name: "Todos",
  props: ["", ""],
  // components:{Todos},

  setup() {
    // code here
    const projects = ref([]);
    const idShow = ref(0);
    const emailXXX = ref("");
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
