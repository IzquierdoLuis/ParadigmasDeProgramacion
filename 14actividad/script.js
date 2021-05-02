const buyHelmet = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Comprando casco");
    }, 1000);
});

const buyGloves = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Comprando guantes");
    }, 2000);
});

const rideABike = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Paseando en bici");
    }, 8000);
});

const shopping = async () => {
    const helmet = await buyHelmet();
    const gloves = await buyGloves();
    const bike = await rideABike();

    return ([helmet, gloves, bike]);
}

shopping().then(activities => {
    activities.forEach(element => {
        console.log(element);
    });
});