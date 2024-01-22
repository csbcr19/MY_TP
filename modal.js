const modal = document.querySelector('.modal_pop');
const modalOpenBtn = document.querySelector('.modal_open');
const modalCloseBtn = document.querySelector('.modal_close');
modalOpenBtn.addEventListener('click', function (){
    modal.style.visibility = 'visible';
});
modalCloseBtn.addEventListener('click', function (){
    modal.style.visibility = 'hidden';
});