const displayValorAnterior = document.getElementById('display-valor_anterior');
const displayValorActual = document.getElementById('display-valor_actual');
const calculadoraNumeros = document.getElementsByClassName('calculadora-numeros');
const calculadoraOperador = document.getElementsByClassName('calculadora-operador');

const display = new Display(displayValorAnterior, displayValorActual)
Array.from(calculadoraNumeros).forEach(boton =>{
    boton.addEventListener('click', function(){
        display.agregarNumero(boton.innerHTML);
    });
});


Array.from(calculadoraOperador).forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
});