
var pocet_clanok = 6;
var pocet_clanok_v_slidery = pocet_clanok + 1
let aktualnyClanok = 0;
let auto;
let el;
let plusPet;
let plus_Pet2;
let minusPet;
let minus_Pet2;
let vsetko_zhasni;
const hibadlo = document.querySelector('.hibadlo');
const holder = document.querySelector('.holder');
var log = console.log;

function presunutie(c_buttonu){
    switch(c_buttonu){
        case 1:
            $("#o_mne").click(function() {
                $('html,body').animate({
                    scrollTop: $("#o_mne_heading").offset().top}, 500);
            });
        break;
        case 2:
            $("#vsetky_tripy").click(function() {
                $('html,body').animate({
                    scrollTop: $("#vsetky_tripy_heading").offset().top}, 500);
            });
        break;
        case 3:
            $("#najnovsie_tripy").click(function() {
                $('html,body').animate({
                    scrollTop: $("#najnovsie_tripy_heading").offset().top}, 500);
            });
        break;
        case 4:
            $("#naj_cesty").click(function() {
                $('html,body').animate({
                    scrollTop: $("#naj_cesty_heading").offset().top}, 500);
            });
        break;

    }
    
}



function zobrazClanok(cisloClanku) {
    const hibadlo = document.querySelector('.hibadlo');
    const posun = -100 * (cisloClanku - 1);
    hibadlo.style.transform = `translateX(calc(${posun}% / ${pocet_clanok_v_slidery}))`;
    aktualnyClanok = cisloClanku; 
}

// function preklik(cislo_clanku){
//     zobrazClanok(cislo_clanku);
//     plusPet = document.querySelector('.plus_pet'+ (cislo_clanku - 1));
//     plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";

//     predosla = 
//     minusPet = document.querySelector('.plus_pet'+ predosla);
//     minusPet.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
// }
function preklik(cislo_clanku) {
    let predosla = aktualnyClanok;

    zobrazClanok(cislo_clanku);

    plusPet = document.querySelector('.plus_pet' + (cislo_clanku - 1));
    if (plusPet) plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";

    minusPet = document.querySelector('.plus_pet' + (predosla - 1));
    if (minusPet) minusPet.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
}
// function nula(){
//     zobrazClanok(1);
//     plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
//     minusPet.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
// }
// function jeden(){
//     zobrazClanok(2);
//     plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
//     minusPet.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
// }
// function dva(){
//     zobrazClanok(3);
//     plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
//     minusPet.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
// }
// function tri(){
//     zobrazClanok(4);
//     plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
//     minusPet.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
// }
// function stiry(){
//     zobrazClanok(5);
//     plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
//     minusPet.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
// }
// function pet(){
//     zobrazClanok(6);
//     plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";  
//     minusPet.style.backgroundColor = "rgba(255, 255, 255, 0.5)"; 
// }

function posun() {
    aktualnyClanok = (aktualnyClanok + 1) % pocet_clanok_v_slidery;
    plusPet = document.querySelector('.plus_pet'+ aktualnyClanok);
    const posun = -100 * aktualnyClanok;
    hibadlo.style.transform = `translateX(calc(${posun}% / ${pocet_clanok_v_slidery}))`;
    predosla = (aktualnyClanok != 0) ? aktualnyClanok - 1 : 5;
    minusPet = document.querySelector('.plus_pet'+ predosla);
    if (predosla <= aktualnyClanok) {
        minusPet.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
    if (aktualnyClanok == 0){
        plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
        hibadlo.style.transition = `all 0s ease`;
    } else if (aktualnyClanok == 1){
        hibadlo.style.transition = `all 0.5s ease`;
        plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else if (aktualnyClanok == 2){
        plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
        hibadlo.style.transition = `all 0.5s ease`;
    } else if (aktualnyClanok == 3){
        plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
        hibadlo.style.transition = `all 0.5s ease`;
    } else if (aktualnyClanok == 4){
        plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
        hibadlo.style.transition = `all 0.5s ease`;
    } else if (aktualnyClanok == 5){
        plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
        hibadlo.style.transition = `all 0.5s ease`;
    } else if (aktualnyClanok == 6){
        plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
        hibadlo.style.transition = `all 0.5s ease`;
    }
}

// function posun() {
//     aktualnyClanok = (aktualnyClanok + 1) % pocet_clanok_v_slidery;
//     plusPet = document.querySelector('.plus_pet'+ aktualnyClanok);
//     predosla = (aktualnyClanok !== 0) ? aktualnyClanok - 1 : 5;
//     minusPet = document.querySelector(`.plus_pet${predosla}`);

//     const posun = -100 * aktualnyClanok;
//     hibadlo.style.transform = `translateX(calc(${posun}% / ${pocet_clanok_v_slidery}))`;
//     if (predosla <= aktualnyClanok) {
//         minusPet.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
//     }
//     plusPet.style.backgroundColor = "rgba(255, 255, 255, 1)";
    
//     log(aktualnyClanok);
//     hibadlo.style.transition = (aktualnyClanok == 0) ? `all 0s ease` : `all 0.5s ease`;
//     if (skoncila_som == true) {
//         for (let i = 0; i <= pocet_clanok; i++){
//             el = document.querySelector(`.plus_pet${i}`);
//             el.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
//         }
//     }  
// }
var maly_text;
var velky_text;
var img;
var clanok;
function skri() {
    for (let i = 0; i <= pocet_clanok; i++){
        maly_text = document.querySelector(`.maly_text${i}`);
        velky_text = document.querySelector(`.velky_text${i}`);
        img = document.querySelector(`.img${i}`);
        maly_text.style = `font-size: 0rem; width: 50%; transition: all 0.5s ease;`;
        velky_text.style = `font-size: 10rem; transition: all 0.5s ease;`;
        // img.style = `transform: scale(1);`
        img.style = `filter: brightness(50%);`
    }
}
function ukaz() {
    for (let i = 0; i <= pocet_clanok; i++){
        maly_text = document.querySelector(`.maly_text${i}`);
        velky_text = document.querySelector(`.velky_text${i}`);
        img = document.querySelector(`.img${i}`);   
        maly_text.style = `font-size: 4rem; width: 50%; transition: all 0.5s ease;`;
        velky_text.style = `font-size: 7rem; transition: all 0.5s ease;`; 
        // transform: translateY(-5rem);
        img.style = `filter: brightness(30%);`
    }
}
function start() {
    auto = setInterval(posun, 1000); // 0xFA0 - 4000
    skri();
}
function clear_style() {
    for (let i = 0; i <= pocet_clanok_v_slidery; i++){
        el = document.querySelector(`.plus_pet${i}`);
        el.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
}

function stop() {
    clearInterval(auto);
    ukaz();
    for (let i = 0; i <= pocet_clanok; i++){
        el = document.querySelector(`.plus_pet${i}`);
        el.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
}

start();
holder.addEventListener('mouseenter', stop);
holder.addEventListener('mouseleave', start);
holder.addEventListener('mouseleave', clear_style);