const app = Vue.createApp({
    data(){
        return{
            estatus: true,
            estatus2: false,
            imagen: "./focoOff.png"
        }
    }
});

const vm = app.mount('#app');