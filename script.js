const btn = document.querySelector('button');
const inp = document.querySelector('input');
let text = document.querySelector('h1');
let box = '';

btn.onclick = ()=>{
    text.innerHTML = inp.value;
}