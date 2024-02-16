function Dis1TBWr(){
    document.getElementsByClassName("hide")[0].style.display = "";
    Dis2Pan();
    Dis2Chi();
    Dis2Fish();
    Dis2Bred();
}
function Dis2TBWr(){
    document.getElementsByClassName("hide")[0].style.display = "none";
}
function Dis1Pan(){
    document.getElementsByClassName("hide")[1].style.display = "";
    Dis2TBWr();
    Dis2Chi();
    Dis2Fish();
    Dis2Bred();
}
function Dis2Pan(){
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
TBW.addEventListener("mouseover", Dis1TBWr);
BWtext.addEventListener("mouseout", Dis2TBWr);
Pan.addEventListener("mouseover", Dis1Pan);
Pantext.addEventListener("mouseout", Dis2Pan);
Chicken.addEventListener("mouseover", Dis1Chi);
chtext.addEventListener("mouseout", Dis2Chi);
fish.addEventListener("mouseover", Dis1Fish);
ftext.addEventListener("mouseout", Dis2Fish);
cheese.addEventListener("mouseover", Dis1Bred);
btext.addEventListener("mouseout", Dis2Bred);
