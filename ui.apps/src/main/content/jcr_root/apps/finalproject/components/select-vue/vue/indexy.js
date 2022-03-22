import Vue from 'vue';

import selectVue from './index.vue';

function init(){
    const components = document.querySelectorAll(".vue-select")
    components.forEach((component)=>{
        new Vue({
            el: ".vue-select",
            render: (h) =>
            h(selectVue, {
                props:{
                    label: component.getAttribute("type")
                }
            })
        })
    })
}
document.addEventListener('DOMContentLoaded', init)