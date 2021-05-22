const app = Vue.createApp({})

app.component('foco', {
    props: ['lugar'],
    data(){
        return {
            estatus: false
        }
    },
    template: `
        <p>{{lugar}}</p>
        <img :src="estatus ? './focoOff.png' :  './focoOn.png'" 
            @click=" estatus = !estatus ">
    `
})

const vm = app.mount('#app')