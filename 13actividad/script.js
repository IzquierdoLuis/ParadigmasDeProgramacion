const buyHelmet = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Comprando casco");
    }, 1000);
});

const buyGloves = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Comprando guantes");
    }, 2000);
});

const rideABike = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Paseando en bici");
    }, 8000);
});

shopping = () => {
    buyHelmet
        .then(activity => {
            console.log(activity);
            return buyGloves;
        })
        .then(activity => {
            console.log(activity);
            return rideABike;
        })
        .then(activity => {
            console.log(activity);
        })
        .finally(()=>console.log("Proceso terminado"));
}

shopping();