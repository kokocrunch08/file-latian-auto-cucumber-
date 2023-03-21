

function sayAnything(callback) {
    let namanya = prompt("masukkan nama kamu ya :");
    callback(namanya);
}

function sayHay(namanya) {
    alert('hay ini ' + namanya);
    }

sayAnything(sayHay);