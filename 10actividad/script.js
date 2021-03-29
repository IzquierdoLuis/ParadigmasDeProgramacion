let list = document.getElementById("list");
// let values = ['irving rios', 'luis fernando', 'melissa garcia'];
let values = [];

const showValues = () => values.map(value => {
    let component = document.createElement("li");
    component.innerHTML = value;
    list.appendChild(component);
})

const addValue = () => {
    let value = document.getElementById("value");
    list.innerHTML = "";

    values.push(value.value);
    console.log(values);
    
    showValues();
    value.value = "";
}

const wipeValues = () => {
    list.innerHTML = "";
    values = [];
}

showValues();