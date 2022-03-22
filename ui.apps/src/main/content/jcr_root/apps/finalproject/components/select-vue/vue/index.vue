<template>
  <div>
      <label :for="label">{{label}}</label>

        <select :name="label" :id="`${label}-id`">

        </select>
  </div>
</template>

<script>
export default {
    name: 'select-vue',
    props:{
        label:{
            type: String,
            default: 'Time Periiod',
        }
    },
    methods:{
        setOptions(){
            if (this.label == 'Day'){
                 const dayBox = document.querySelector(`#${this.label}-id`)
                for (let days = 1; days < 32; days++){
                    let element = document.createElement('option')
                    element.value = days
                    if (days < 10){
                        days = "0" + days
                    }
                    element.innerText = days
                    dayBox.appendChild(element)
                }
            }else if (this.label == "Month"){
                 const monthBox = document.querySelector(`#${this.label}-id`)
                for (let months = 1; months < 13; months++) {
                    let element = document.createElement('option')
                    element.value = months
                    if (months < 10){
                        months = "0" + months
                    }
                    element.innerText = months
                    monthBox.appendChild(element)
                }
            }else if (this.label == "Year"){
                 const yearBox = document.querySelector(`#${this.label}-id`)
                for (let years = 1980; years < 2023; years++) {
                    let element = document.createElement('option')
                    element.value = years
                    element.innerText = years
                    yearBox.appendChild(element)
                }
            }
        }
    },
    mounted(){
        this.setOptions()
    }
}
</script>