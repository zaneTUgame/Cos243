function Dis1Rue(){
    document.getElementsByClassName("hide")[0].style.display = "";
    Dis2Shrimp();
    Dis2Grill();
    Dis2Truck();
    Dis2Cuban();
}
function Dis2Rue(){
    document.getElementsByClassName("hide")[0].style.display = "none";
}
function Dis1Shrimp(){
    document.getElementsByClassName("hide")[1].style.display = "";
    Dis2Rue();
    Dis2Grill();
    Dis2Truck();
    Dis2Cuban();
}
function Dis2Shrimp(){
    document.getElementsByClassName("hide")[1].style.display = "none";
}
function Dis1Grill(){
    document.getElementsByClassName("hide")[2].style.display = "";
    Dis2Rue();
    Dis2Shrimp();
    Dis2Tuck();
    Dis2Cuban();
}
function Dis2Grill(){
    document.getElementsByClassName("hide")[2].style.display = "none";
}
function Dis1Truck(){
    document.getElementsByClassName("hide")[3].style.display = "";
    Dis2Rue();
    Dis2Shrimp();
    Dis2Grill();
    Dis2Cuban();
}
function Dis2Truck(){
    document.getElementsByClassName("hide")[3].style.display = "none";
}

function Dis1Cuban(){
    document.getElementsByClassName("hide")[4].style.display = "";
    Dis2Rue();
    Dis2Shrimp();
    Dis2Grill();
    Dis2Truck();
}
function Dis2Cuban(){
    document.getElementsByClassName("hide")[4].style.display = "none";
}


Rueben.addEventListener("mouseover", Dis1Rue);
RuebenText.addEventListener("mouseout", Dis2Rue);
Shrimp.addEventListener("mouseover", Dis1Shrimp);
ShrimpText.addEventListener("mouseout", Dis2Shrimp);
Grill.addEventListener("mouseover", Dis1Grill);
GrillText.addEventListener("mouseout", Dis2Grill);
Truck.addEventListener("mouseover", Dis1Truck);
TruckText.addEventListener("mouseout", Dis2Truck);
Cuban.addEventListener("mouseover", Dis1Cuban);
CubanText.addEventListener("mouseout", Dis2Cuban);