const changeImage = tableId => {
    let table = document.getElementById(tableId);

    if (!table.src.match('tableOn')) {
        table.src = "./tableOn.png";
        counter(tableId, "on");
        return;    
    }
    
    table.src = "./tableOff.png";
    counter(tableId, "off");
}

const counter = (tableId, state) => {
    let start = document.getElementById("start" + tableId);
    let end = document.getElementById("end" + tableId);
    let price = document.getElementById("price" + tableId);

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;

    if(state == "on" && start.innerHTML == "Hora de inicio:"){
        start.innerHTML = "Hora de inicio: " + hours + ":" + minutes + ":" + seconds;
        
        switch (tableId){
            case "1":
                aux1 = minutes;
                break;
            case "2":
                aux2 = minutes;
                break;
            case "3":
                aux3 = minutes;
                break;
            case "4":
                aux4 = minutes;
                break;
            case "5":
                aux5 = minutes;
                break;
            case "6":
                aux6 = minutes;
                break;
            default:
                break;
        }
    }
    else if(state == "off" && end.innerHTML == "Hora fin:"){
        end.innerHTML = "Hora fin: " + hours + ":" + minutes + ":" + seconds;
        
        let actualMinutes = parseInt(minutes);

        switch (tableId){
            case "1":
                if (actualMinutes < parseInt(aux1)) {
                    actualMinutes += 60;
                }
                cost = (actualMinutes - parseInt(aux1));
                break;
            case "2":
                if (actualMinutes < parseInt(aux2)) {
                    actualMinutes += 60;
                }
                cost = (actualMinutes - parseInt(aux2));
                break;
            case "3":
                if (actualMinutes < parseInt(aux3)) {
                    actualMinutes += 60;
                }
                cost = (actualMinutes - parseInt(aux3));
                break;
            case "4":
                if (actualMinutes < parseInt(aux4)) {
                    actualMinutes += 60;
                }
                cost = (actualMinutes - parseInt(aux4));
                break;
            case "5":
                if (actualMinutes < parseInt(aux5)) {
                    actualMinutes += 60;
                }
                cost = (actualMinutes - parseInt(aux5));
                break;
            case "6":
                if (actualMinutes < parseInt(aux6)) {
                    actualMinutes += 60;
                }
                cost = (actualMinutes - parseInt(aux6));
                break;
            default:
                break;
        }

        cost *= 50;        
        price.innerHTML = "Total: $" + cost;
    }
}