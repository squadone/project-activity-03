import Vue from 'vue';

import checkboxVue from './index.vue';

//Componente com mais de uma instância

// function init(){
//     const components = document.querySelectorAll(".checkbox-vue")
//     components.forEach((component)=>{
//         new Vue({
//             el: ".checkbox-vue",
//             render: (h) =>
//             h(checkboxVue, {
//                 props:{
//                     field: component.getAttribute("name")
//                 }
//             })
//         })
//     })
// }
// document.addEventListener('DOMContentLoaded', init)

// Componente único

new Vue({
    el: "#checkbox-vue",
    render:(h)=>h(checkboxVue,{
        props:{
            field: document.querySelector("#checkbox-vue").getAttribute("name")
        }
    }),
})