var timestart = 10;
var scores = 0;
var hitrn = 0;

function hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitv").textContent = hitrn;
}

function makebubs(){
    var store = "";
    for(var i = 1; i<=160; i++ ){
        store += `<div class="bub">${ Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector("#bot").innerHTML = store;
}

function time(){ 
    var timer = setInterval(function(){
        timestart--;
        document.querySelector("#twff").textContent = timestart;
        if (timestart <= 0){
            clearInterval(timer);
            document.querySelector("#bot").innerHTML = `<h1>GAME OVER</h1>`;
        }
    },1000)
}

function s(){
    scores += 10;
    document.querySelector("#scoreval").textContent = scores;
}


document.querySelector("#bot")
.addEventListener("click",function(dets){
    var check = Number(dets.target.textContent);
    if (check === hitrn){
        s();
        hit();
       makebubs(); 
    }
})


makebubs();
hit();
time();



