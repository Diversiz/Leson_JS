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

 // Цикл для вывода массива данных
 const btn_7 = document.querySelector('#btn_7');
 const out_7 = document.querySelector('#out_7');

btn_7.onclick = ()=>{ 
let name = document.querySelectorAll('input[type="radio"]');

    for(let i = 0; i < name.length; i++){
        if(name[i].checked){
            out_7.innerHTML = name[i].value;
        }
    }
}

 // Вывод циклом значения из div при клике цвет
const btn_8 = document.querySelector('#btn_8');

// console.log(out_8[0].style.background = "Red");
// console.log(out_8[1].style.background = "Blue");
// out_8[2].style.background = "Green";



btn_8.onclick = ()=>{ 
    let valueItem = document.querySelectorAll('.item input[type="radio"]');
    let out_8 = document.querySelectorAll('.item');
    
        for(let i = 0; i < valueItem.length; i++){
            if(valueItem[i].checked){
                let outs = valueItem[i].value;
                out_8[i].style.background = outs;
                //Проверка на соответствие value 
                //При выборе другого цвета уничтожить предыдцщий
                // if(valueItem[i].value == outs){
                //     console.log(valueItem[i].value);
                // }
            }
        }
    }

