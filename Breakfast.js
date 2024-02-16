function Dis1TBWr(){
    document.getElementsByClassName("hide")[0].style.display = "";
    Dis2Pan();
    Dis2Wa();
    Dis2O();
    Dis2L();
}
function Dis2TBWr(){
    document.getElementsByClassName("hide")[0].style.display = "none";
}
function Dis1Pan(){
    document.getElementsByClassName("hide")[1].style.display = "";
    Dis2TBWr();
    Dis2Wa();
    Dis2O();
    Dis2L();
}
function Dis2Pan(){
    document.getElementsByClassName("hide")[1].style.display = "none";
}
function Dis1Wa(){
    document.getElementsByClassName("hide")[2].style.display = "";
    Dis2TBWr();
    Dis2Pan();
    Dis2O();
    Dis2L();
}
function Dis2Wa(){
    document.getElementsByClassName("hide")[2].style.display = "none";
}
function Dis1O(){
    document.getElementsByClassName("hide")[3].style.display = "";
    Dis2TBWr();
    Dis2Pan();
    Dis2Wa();
    Dis2L();
}
function Dis2O(){
    document.getElementsByClassName("hide")[3].style.display = "none";
}
function Dis1L(){
    document.getElementsByClassName("hide")[4].style.display = "";
    Dis2TBWr();
    Dis2Pan();
    Dis2Wa();
    Dis2O();
}
function Dis2L(){
    document.getElementsByClassName("hide")[4].style.display = "none";
}
TBW.addEventListener("mouseover", Dis1TBWr);
BWtext.addEventListener("mouseout", Dis2TBWr);
Pan.addEventListener("mouseover", Dis1Pan);
Pantext.addEventListener("mouseout", Dis2Pan);
Waffles.addEventListener("mouseover", Dis1Wa);
Wtext.addEventListener("mouseout", Dis2Wa);
Omelet.addEventListener("mouseover", Dis1O);
Otext.addEventListener("mouseout", Dis2O);
lasagna.addEventListener("mouseover", Dis1L);
Ltext.addEventListener("mouseout", Dis2L);
