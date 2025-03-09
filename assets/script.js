var pocet_clanok = 6;
var pocet_clanok_v_slidery = pocet_clanok + 1
let aktualnyClanok = 0;
let A_C;
let auto;
const hibadlo = document.querySelector('.hibadlo');
const holder = document.querySelector('.holder');
let posunA;
var log = console.log;

function M_toggle() {
    const menu = document.getElementById('T-menu');
    menu.classList.toggle('show');
}

function presunutie(c_buttonu){
    switch(c_buttonu){
        case 1:
            $("#o_mne").click(function() {
                $('html,body').animate({
                    scrollTop: $("#o-mne-h").offset().top}, 500);
            });
        break;
        case 2:
            $("#vsetky_tripy").click(function() {
                $('html,body').animate({
                    scrollTop: $("#vse-d-h").offset().top}, 500);
            });
        break;
        case 3:
            $("#najnovsie_tripy").click(function() {
                $('html,body').animate({
                    scrollTop: $("#naj-d-h").offset().top}, 500);
            });
        break;
        case 4:
            $("#naj_cesty").click(function() {
                $('html,body').animate({
                    scrollTop: $("#n-d-h").offset().top}, 500);
            });
        break;
    }
}
function preklik(cislo_clanku) {
    let predosla = aktualnyClanok;
    zobrazClanok(cislo_clanku);
    b_A = document.querySelector('.b-' + (cislo_clanku - 1));
    if (b_A) b_A.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    b_P = document.querySelector('.b-' + (predosla - 1));
    if (b_P) b_P.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

}
function zobrazClanok(cisloClanku) {
    posunA = -100 * (cisloClanku - 1);
    hibadlo.style.transform = `translateX(calc(${posunA}% / ${pocet_clanok_v_slidery}))`;
    aktualnyClanok = cisloClanku;
}


function posun() {
    aktualnyClanok = (aktualnyClanok + 1) % pocet_clanok_v_slidery;
    A_C = aktualnyClanok;
    aktualna = document.querySelector('.b-'+ (A_C < 6? A_C : 0));
    aktualna.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    const posun = -100 * aktualnyClanok;
    hibadlo.style.transform = `translateX(calc(${posun}% / ${pocet_clanok_v_slidery}))`;

    predosla = document.querySelector('.b-'+ ((A_C > 0) ? A_C - 1 : 0));
    predosla.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    if (aktualnyClanok == 1){
        hibadlo.style.transition = `all 0.5s ease`;
    } else if (aktualnyClanok == 0){
        hibadlo.style.transition = `all 0s ease`;
    }
}
function start() {
    auto = setInterval(posun, 1000); // 0xFA0 - 4000
    for (let i = 0; i <= 5; i++){
        b_P = document.querySelector('.b-' + i);
        b_P.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
}

function stop() {
    clearInterval(auto);
    for (let i = 0; i <= 5; i++){
        b_P = document.querySelector('.b-' + i);
        b_P.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
}

start();
holder.addEventListener('mouseenter', stop);
holder.addEventListener('mouseleave', start);