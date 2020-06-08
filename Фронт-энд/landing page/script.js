const registration = document.querySelector('#registration');

const modal = document.querySelector('#modal');
const exit = document.querySelector('#exit');
// const inputFocus = document.

registration.addEventListener('click', ()=>{
    modal.style.display ="block";
});

exit.addEventListener('click', ()=>{
    modal.style.display ="none";
});

// modal.addEventListener('keydown', (e)=> {
//     console.log(e);
//     modal.style.display ="none";
// });



//document.querySelector('#modal input[type=text]').focus();



// if(event.code == 'Escape' && !event.ctrlKey && !event.metaKey){
//             modal.style.display ="none";
//         }




















// exit, modal.addEventListener('click', ()=>{
//     modal.style.display ="none";
// });

// modal.addEventListener('keydown', function(event){
//     if(event.code == 'Escape' && (event.ctrlKey || event.metaKey)){
//         modal.style.display ="none";
//     }
// }

// document.querySelector(".img").src = "/img/slider_0.jpg";
// document.querySelector(".img").alt = "Картинка";

// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//       alert('Отменить!')
//     }
//   });

// keydown key=Escape code=Escape
// keyup key=Escape code=Escape
