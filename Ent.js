function Dis1ChiPP(){
    document.getElementsByClassName("hide")[0].style.display = "";
}
function Dis2ChiPP(){
    document.getElementsByClassName("hide")[0].style.display = "none";
}
function Dis1ChiW(){
    document.getElementsByClassName("hide")[1].style.display = "";
}
function Dis2ChiW(){
    document.getElementsByClassName("hide")[1].style.display = "none";
}
function Dis1Chi(){
    document.getElementsByClassName("hide")[2].style.display = "";
}
function Dis2Chi(){
    document.getElementsByClassName("hide")[2].style.display = "none";
}
ChickenPP.addEventListener("mouseover", Dis1ChiPP);
chpptext.addEventListener("mouseout", Dis2ChiPP);
ChickenW.addEventListener("mouseover", Dis1ChiW);
chWtext.addEventListener("mouseout", Dis2ChiW);
Chicken.addEventListener("mouseover", Dis1Chi);
chtext.addEventListener("mouseout", Dis2Chi);
