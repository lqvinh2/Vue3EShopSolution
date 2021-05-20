<template>
  <h2>My App TODOS , now you have : {{ projects.length }} TODO job</h2>
  <h2>{{ count }}</h2>
  <div class="input-group mb-3">
    <input
      v-model="newNum"
      type="number"
      class="form-control"
      placeholder="num"
      aria-label="num"
      aria-describedby="basic-addon1"
    />
  </div>
  <button
    @click="incrementCount(parseInt(newNum))"
    type="button"
    class="btn btn-success"
  >
    increment Count
  </button>

  <button
    @click="addRandomNumberAxios"
    type="button"
    class="btn btn-success"
    :disabled="false"
  >
    Add random number
  </button>

  <input placeholder="Search by Index" type="number" v-model="newNum" />
  <div class="showNumList">
    <p
      v-for="(number, index) in history"
      :key="index"
      :class="
        getIndexAfterAddNumberToHistory(parseInt(newNum)).includes(index) &&
          'bold'
      "
    >
      {{ number }}
    </p>
  </div>
</template>

<script>
import { computed, watch, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
////
// import Todos from '../src/components/Todos.vue'
export default {
  name: "",
  props: ["", ""],
  // components:{Todos},
  computed: {
    ...mapState(["projects", "count", "history"]),
    ...mapGetters(["getIndexAfterAddNumberToHistory"]),
  },

  methods: {
    ...mapMutations(["incrementCount"]),
    ...mapActions(["addRandomNumberAxios"]),
  },
  setup() {
    onMounted(() => {});
    const router = useRouter();

    // code here
    const emailXXX = ref("");
    const handleSubmit = () => {
      console.log("1234");
    };
    const newNum = ref(100);
    ///////////////

    return { emailXXX, handleSubmit, newNum };
  },
};
</script>

<style scoped>
/* @import 'assets/css/main.css'; */
.bold {
  font-weight: 900;
}
.showNumList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
}
</style>
