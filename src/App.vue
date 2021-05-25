<template>
  <h1>APP</h1>

  <div class="cart-fly-from-to">{{ counter }}- {{ counterx2 }}</div>
  <button @click="HandleRegister">HandleRegister test</button>
</template>

<script>
import { computed, watch, watchEffect, ref } from "vue";
import { useRouter } from "vue-router";

import AddDoc from "../src/services/fireBase/AddDoc";
import DeleteDoc from "../src/services/fireBase/DeleteDoc";
import UpdateDoc from "../src/services/fireBase/UpdateDoc";
import { timestamp } from "../src/services/fireBase/config";

////
import LearnTodos from "./components/LearnTodos.vue";
import LearnNavbar from "./components/LearnNavbar.vue";

async function Multiplex2Num(value) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  const res = value * 2;

  return res;
}

export default {
  name: "",
  props: ["", ""],
  components: { LearnTodos, LearnNavbar },

  mounted() {},
  setup() {
    const router = useRouter();

    // code here
    const emailXXX = ref("");

    const counter = ref(0);
    const counterx2 = ref(0);

    const handleSubmit = () => {
      console.log("1234");
    };

    const testClickBtn = (event) => {
      const btn_pos = $(event.target).position();
      const btn_offset = $(event.target).offset();
      const cart_offset = $(".cart-layout-icon-cart").offset();
      $(".cart-fly-from-to").offset({
        top: btn_offset.top,
        left: btn_offset.left,
      });

      setTimeout(() => {
        $(".cart-fly-from-to").offset({
          top: cart_offset.top,
          left: cart_offset.left,
        });
      }, 500);
    };

    watchEffect(() => {
      Multiplex2Num(counter.value).then((result) => {
        counterx2.value = result;
      });
    });
    counter.value = 3;

    // INSERT DOC EXAMPLE START
    // DELETE DOC EXAMPLE START
    // UPDATE DOC EXAMPLE START
    
      // INSERT DOC EXAMPLE START
      // const { AddDocHandle, error, isPending } = AddDoc("DOCTest");
      // const HandleRegister = async () =>
      // {
      //      const dataNew = {
      //       name :'name1',
      //       testJobs: [],
      //       createdAt: timestamp(),
      //     };
      //    const res = await AddDocHandle(dataNew);
      //     if (!error.value) {
      //         const res2 = res.id;
      //     }
      // }
      // INSERT DOC EXAMPLE EMD
      //
      // DELETE DOC EXAMPLE START

       
      // const { DeleteDocHandle, error, isPending} = DeleteDoc("DOCTest", 'LGAvxF26bg4FXdGbIwvK');

      // const HandleRegister = async () =>{
      //     const resDelete = await DeleteDocHandle();
      //     if (!error.value) {
      //       const res2 = resDelete;
      //     }
      // };
      // DELETE DOC EXAMPLE END
      //
      // UPDATE DOC EXAMPLE START
      // const { UpdateDocHandle, error, isPending } = UpdateDoc("DOCTest", 'WM8DNCaXPylf1dUwtLhb');
      // const HandleRegister = async () =>{
      //     const dataUpdate = {
      //       name : 'nameUpdate',
      //       testJobs : ['1','2'],
      //     }
      //     const resUpd = await UpdateDocHandle(dataUpdate);

      // };
      // UPDATE DOC EXAMPLE END
    

    return {
      emailXXX,
      handleSubmit,
      testClickBtn,
      counter,
      counterx2,
      HandleRegister,
    };
  },
};
</script>

<style>
@import "assets/css/main.css";
</style>
