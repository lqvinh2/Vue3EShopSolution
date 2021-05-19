<template>
<h2>My App TODOS , now you have : {{projects.length}} TODO job</h2>

</template>

<script>

import { computed, watch, ref , onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {mapState} from 'vuex'
////
// import Todos from '../src/components/Todos.vue'
export default {
    name:'Navbar',
    props: ['',''],
    // components:{Todos},
    computed : {
        ...mapState(["projects"])
    },
    setup() {
        onMounted(() => {
        
        });
        const router = useRouter();
        
        // code here
        const emailXXX = ref('');
        const handleSubmit = () => {
            console.log('1234');
        };
        ///////////////
        
        return { emailXXX , handleSubmit};
    },
}
</script>

<style>
/* @import 'assets/css/main.css'; */
</style>
