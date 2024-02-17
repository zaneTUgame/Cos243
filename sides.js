function Dis1Wing(){
    document.getElementsByClassName("hide")[0].style.display = "";
    Dis2Fry();
    Dis2Mozz();
    Dis2Pop();
}
function Dis2Wing(){
    document.getElementsByClassName("hide")[0].style.display = "none";
}
function Dis1Fry(){
    document.getElementsByClassName("hide")[1].style.display = "";
    Dis2Wing();
    Dis2Mozz();
    Dis2Pop();
}
function Dis2Fry(){
    document.getElementsByClassName("hide")[1].style.display = "none";
}
function Dis1Mozz(){
    document.getElementsByClassName("hide")[2].style.display = "";
    Dis2Wing();
    Dis2Fry();
    Dis2Pop();
}
function Dis2Mozz(){
    document.getElementsByClassName("hide")[2].style.display = "none";
}
function Dis1Pop(){
    document.getElementsByClassName("hide")[3].style.display = "";
    Dis2Wing();
    Dis2Fry();
    Dis2Mozz();
}
function Dis2Pop(){
    document.getElementsByClassName("hide")[3].style.display = "none";
}

Wings.addEventListener("mouseover", Dis1Wing);
WingText.addEventListener("mouseout", Dis2Wing);
NachoFry.addEventListener("mouseover", Dis1Fry);
FryText.addEventListener("mouseout", Dis2Fry);
MozzSticks.addEventListener("mouseover", Dis1Mozz);
MozzText.addEventListener("mouseout", Dis2Mozz);
JalepPops.addEventListener("mouseover", Dis1Pop);
JalepText.addEventListener("mouseout", Dis2Pop);
