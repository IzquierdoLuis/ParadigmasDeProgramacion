const toDo = (task, time, callback) => {
    setTimeout(() => {
        callback(task);
    }, time);
}

toDo("Levantarse", 5000, (task) => {
    console.log(`Realizando la tarea ${task}`);
    toDo("Tender la cama", 3000, (task) => {
        console.log(`Realizando la tarea ${task}`);
        toDo("Bañarse", 3000, (task) => {
            console.log(`Realizando la tarea ${task}`);
            toDo("Clase de paradigmas", 5000, (task) => {
                console.log(`Realizando la tarea ${task}`);
                toDo("Desayunar", 8000, (task) => {
                    console.log(`Realizando la tarea ${task}`);
                    toDo("Jugar videojuegos", 10000, (task) => {
                        console.log(`Realizando la tarea ${task}`);
                    });
                });
            });
        });
    });
});