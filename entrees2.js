function Dis1Buff(){
    document.getElementsByClassName("hide")[0].style.display = "";
    Dis2Club();
    Dis2Steak();
    Dis2Cobb();
    Dis2Ceaser();
}
function Dis2Buff(){
    document.getElementsByClassName("hide")[0].style.display = "none";
}
function Dis1Club(){
    document.getElementsByClassName("hide")[1].style.display = "";
    Dis2Buff();
    Dis2Steak();
    Dis2Cobb();
    Dis2Ceaser();
}
function Dis2Club(){
    document.getElementsByClassName("hide")[1].style.display = "none";
}
function Dis1Steak(){
    document.getElementsByClassName("hide")[2].style.display = "";
    Dis2Buff();
    Dis2Club();
    Dis2Cobb();
    Dis2Ceaser();
}
function Dis2Steak(){
    document.getElementsByClassName("hide")[2].style.display = "none";
}
function Dis1Cobb(){
    document.getElementsByClassName("hide")[3].style.display = "";
    Dis2Buff();
    Dis2Club();
    Dis2Steak();
    Dis2Ceaser();
}
function Dis2Cobb(){
    document.getElementsByClassName("hide")[3].style.display = "none";
}

function Dis1Ceaser(){
    document.getElementsByClassName("hide")[4].style.display = "";
    Dis2Buff();
    Dis2Club();
    Dis2Steak();
    Dis2Cobb();
}
function Dis2Ceaser(){
    document.getElementsByClassName("hide")[4].style.display = "none";
}


Buffalo.addEventListener("mouseover", Dis1Buff);
BuffText.addEventListener("mouseout", Dis2Buff);
Club.addEventListener("mouseover", Dis1Club);
ClubText.addEventListener("mouseout", Dis2Club);
Steak.addEventListener("mouseover", Dis1Steak);
SteakText.addEventListener("mouseout", Dis2Steak);
Cobb.addEventListener("mouseover", Dis1Cobb);
CobbText.addEventListener("mouseout", Dis2Cobb);
Ceaser.addEventListener("mouseover", Dis1Ceaser);
CeaserText.addEventListener("mouseout", Dis2Ceaser);