let offset = 0;
const sliderLine= document.querySelector('#slider-line');

document.querySelector('.slider-button').addEventListener('click', function(){
    offset = offset + 803;
    if (offset > 6424){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-button-pr').addEventListener('click', function(){
    offset = offset - 803;
    if (offset < 0){
        offset = 6424;
    }
    sliderLine.style.left = -offset + 'px';
});