/// <reference types="../@types/jquery" />


$('.close').on('click', function(){
    $('.sidebar').animate({width:'toggle'},500);
    $('#home .home-cover span').animate({left: '10px'}, 600)
   
})

$('.home-cover span').on('click', function(){
    $('#home .home-cover span').animate({left: '16%'}, 500)
    $('.sidebar').animate({width:'toggle'},500);
    
})


$('#duration .content h2').on('click', function(e){
    let x = $(e.target);
    $('#duration .content p').not(x.next()).slideUp(1000)
    x.next().slideToggle(1000);
})


let itmes4 = document.querySelector('#detalis .detalis-items4');
let itmes1 = document.querySelector('#detalis .detalis-items1');
let itmes2 = document.querySelector('#detalis .detalis-items2');
let itmes3 = document.querySelector('#detalis .detalis-items3');

let countS = 60;
let countM = 60;
let countH = 24;
let countD = 30;

itmes1.innerHTML = countD + ' D';
itmes2.innerHTML = countH + ' h';
itmes3.innerHTML = countM + ' m';
itmes4.innerHTML = countS + ' s';

function counterS(){
    countS-=1;
    if(countS<0){
        countS=60;
    }
    itmes4.innerHTML = countS +' s';
}
function counterM(){
    countM-=1;
    if(countM<0){
        countM=60;
    }
    itmes4.innerHTML = countM +' M';
}
function counterH(){
    countH-=1;
    if(countH<0){
        countH=24;
    }
    itmes4.innerHTML = countH +' h';
}
function counterD(){
    countD-=1;
    if(countD<0){
        clearInterval(second);
        clearInterval(minutes);
        clearInterval(hours);
        clearInterval(days);
    }
    itmes4.innerHTML = countD +' D';
}

let second = setInterval(counterS, 1000);
let minutes = setInterval(counterM, 60000);
let hours = setInterval(counterH, 3600000);
let days = setInterval(counterD, 86400000);


let cont = 100;
$('#massage').on('input', function() {
    let x = $('#massage').val();
    let remaining = cont - x.length;
    $('.counter').html(remaining);
});

