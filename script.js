// Вывод текста
const btn_1 = document.querySelector('#btn_1');
const text_input = document.querySelector('#text');
let out = document.querySelector('#out');

btn_1.onclick = ()=>{out.innerHTML = text_input.value;}

// Выбор цвета
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

// Календарь
const btn_3 = document.querySelector('#btn_3');
const date_input = document.querySelector('#date');
let out_3 = document.querySelector('#out_3');

btn_3.onclick = ()=>{out_3.innerHTML = date_input.value;}

//Ранг
const btn_4 = document.querySelector('#btn_4');
const range_input = document.querySelector('#range');
let out_4 = document.querySelector('#out_4');

btn_4.onclick = ()=>{out_4.innerHTML = range_input.value;}

out_4.innerHTML = range_input.value;

range_input.oninput =()=>{
    //console.log(range_input.value); 
    out_4.innerHTML = range_input.value
 }

 // Радиокнопка с условием
const btn_5 = document.querySelector('#btn_5');
const checkbox_input = document.querySelector('#checkbox');
let out_5 = document.querySelector('#out_5');

btn_5.onclick = ()=>{
    console.log(checkbox_input.checked);
    if(checkbox_input.checked){
        out_5.innerHTML = 'Нажат';
    }else{
        out_5.innerHTML = 'Отжат';
    }
}


/* HTML
//Разделите слово пополам и напишите его в два инпуиа и склейте его
    <p>Форма</p><h1 id="out_6"></h1>
    <form action="">
    <input type="text" name="text"><br>
    <input type="password" name="pass"><br>
    <button id="btn_6">GO</button><br>
    </form>

*/

 // Используем свойство name в form
 const btn_6 = document.querySelector('#btn_6');
 const out_6 = document.querySelector('#out_6');

 btn_6.onclick = (event)=>{
    event.preventDefault();
    let form = document.querySelector('form');

    out_6.innerHTML = form.text.value + form.pass.value;
    //  console.log(form.text.value);
    //  console.log(form.pass.value);
 }
