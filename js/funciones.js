function cambioMoneda(monedaOrigen, monedaDestino,cifra){
    let dolar = 4700;
    let cambio = 0;
    if (monedaOrigen == "COP" && monedaDestino == "USD"){
        cambio = cifra / dolar;
    }
    else if (monedaOrigen == "USD" && monedaDestino == "COP" ){
            cambio = cifra * dolar;
        }
    return cambio;    
    }

// Funciones flecha o anónimas: Se utilizan para compactar las funciones tradicionales
// Función tradicional
// function sumar(valor1, valor2){
//     return valor1 + valor2;
// }
// con función flecha (arrow functions)
let sumar = (valor1, valor2) => valor1 + valor2;
// con función anónima
let sumar1 = function(valor1, valor2){ return valor1 + valor2}
let mensaje = (mensaje)=>console.log(mensaje)
let mensaje1 = function(mensaje){console.log(mensaje)}
// Generar una función para retornar masculino o femenino si el sexo es true o false, respectivamente.
let sexo = (genero) => genero ? "Masculino" : "Femenino";
let sexo1 = function(genero){ return genero ? "Masculino" : "Femenino"};
// Objetos 
let estudiante = {identificacion:'41',nombre:'Ana Maria',gender:true,salario:3500000}
// Arreglo de objetos
let users = [
    {username:'pperez',password:'111',role:true},
    {username:'mvalencia',password:'222',role:false},
    {username:'fzuluaga',password:'333',role:true},
]





    



