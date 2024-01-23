//modal
const modal = document.querySelector('.modal_pop');
const modalOpenBtn = document.querySelector('.modal_open');
const modalCloseBtn = document.querySelector('.modal_close');
modalOpenBtn.addEventListener('click', function (){
    modal.style.visibility = 'visible';
});
modalCloseBtn.addEventListener('click', function (){
    modal.style.visibility = 'hidden';
});
//modal end

let cnt = 0;
const button = document.getElementById("like");
const span = document.querySelector("span");
function clickCounter(){
    cnt+=1;
    span.innerText = ` ${cnt}`;
    console.log(cnt);
}
button.addEventListener("click",  clickCounter);