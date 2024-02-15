function Dis1ChiPP(){
    document.getElementsByClassName("hide")[0].style.display = "";
    Dis2ChiW();
    Dis2Chi();
    Dis2Fish();
    Dis2Bred();
}
function Dis2ChiPP(){
    document.getElementsByClassName("hide")[0].style.display = "none";
}
function Dis1ChiW(){
    document.getElementsByClassName("hide")[1].style.display = "";
    Dis2ChiPP();
    Dis2Chi();
    Dis2Fish();
    Dis2Bred();
}
function Dis2ChiW(){
    document.getElementsByClassName("hide")[1].style.display = "none";
}
function Dis1Chi(){
    document.getElementsByClassName("hide")[2].style.display = "";
    Dis2ChiPP();
    Dis2ChiW();
    Dis2Fish();
    Dis2Bred();
}
function Dis2Chi(){
    document.getElementsByClassName("hide")[2].style.display = "none";
}
function Dis1Fish(){
    document.getElementsByClassName("hide")[3].style.display = "";
    Dis2ChiPP();
    Dis2ChiW();
    Dis2Chi();
    Dis2Bred();
}
function Dis2Fish(){
    document.getElementsByClassName("hide")[3].style.display = "none";
}
function Dis1Bred(){
    document.getElementsByClassName("hide")[4].style.display = "";
    Dis2ChiPP();
    Dis2ChiW();
    Dis2Chi();
    Dis2Fish();
}
function Dis2Bred(){
    document.getElementsByClassName("hide")[4].style.display = "none";
}
ChickenPP.addEventListener("mouseover", Dis1ChiPP);
chpptext.addEventListener("mouseout", Dis2ChiPP);
ChickenW.addEventListener("mouseover", Dis1ChiW);
chWtext.addEventListener("mouseout", Dis2ChiW);
Chicken.addEventListener("mouseover", Dis1Chi);
chtext.addEventListener("mouseout", Dis2Chi);
fish.addEventListener("mouseover", Dis1Fish);
ftext.addEventListener("mouseout", Dis2Fish);
cheese.addEventListener("mouseover", Dis1Bred);
btext.addEventListener("mouseout", Dis2Bred);
