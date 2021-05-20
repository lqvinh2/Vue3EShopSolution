<template>
  <LearnNavbar></LearnNavbar>
  <LearnTodos></LearnTodos>

  <a class="btn-floating btn-large waves-effect waves-light red"
    ><i class="material-icons">add</i></a
  >
</template>

<script>
import { computed, watch, ref } from "vue";
import { useRouter } from "vue-router";

////
import LearnTodos from "./components/LearnTodos.vue";
import LearnNavbar from "./components/LearnNavbar.vue";
export default {
  name: "",
  props: ["", ""],
  components: { LearnTodos, LearnNavbar },

  mounted() {},
  setup() {
    const router = useRouter();

    // code here
    const emailXXX = ref("");
    const handleSubmit = () => {
      console.log("1234");
    };
    ///////////////

    return { emailXXX, handleSubmit };
  },
};
</script>

<style>
@import "assets/css/main.css";
</style>
