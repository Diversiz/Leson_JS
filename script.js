const btn_1 = document.querySelector('#btn_1');
const text_input = document.querySelector('#text');
let out = document.querySelector('#out');

btn_1.onclick = ()=>{out.innerHTML = text_input.value;}

const btn_2 = document.querySelector('#btn_2');
const color_input = document.querySelector('#color');
let out_2 = document.querySelector('#out_2');
let box = document.querySelector('.box');

btn_2.onclick = ()=>{
    out_2.innerHTML = color_input.value;
    out_2.style.color = color_input.value;
    box.style.background = color_input.value;

    console.log(color_input.value);
}

const btn_3 = document.querySelector('#btn_3');
const date_input = document.querySelector('#date');
let out_3 = document.querySelector('#out_3');

btn_3.onclick = ()=>{out_3.innerHTML = date_input.value;}