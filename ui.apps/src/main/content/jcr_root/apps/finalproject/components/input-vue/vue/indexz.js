import Vue from 'vue';

import inputVue from './index.vue';

//Componente com mais de uma instância

function init(){
    const components = document.querySelectorAll(".vue-input")
    components.forEach((component)=>{
        new Vue({
            el: ".vue-input",
            render: (h) =>
            h(inputVue, {
                props:{
                    field: component.getAttribute("name")
                }
            })
        })
    })
}
document.addEventListener('DOMContentLoaded', init)

//Componente único

// new Vue({
//     el: "#vue-input",
//     render:(h)=>h(inputVue,{
//         props:{
//             field: document.querySelector("#vue-input").getAttribute("type")
//         }
//     }),
// })