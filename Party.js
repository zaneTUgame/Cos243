function Sub(){
    let t=0;
    for (let i = 0; i < document.getElementsByTagName("input").length-1; i++) {
        if((!document.getElementsByTagName("input")[i].validity.valueMissing)&&(!document.getElementsByTagName("input")[i].validity.rangeUnderflow)&&(!document.getElementsByTagName("input")[i].validity.rangeUnderflow)){
            t++;
            document.getElementsByTagName("input")[i].style.background = "";
        }else{
            document.getElementsByTagName("input")[i].style.background = "red";
        }
        
    }
    if(t==document.getElementsByTagName("input").length-1){
        for (let i = 0; i< document.getElementsByTagName("input").length-1; i++) {
            document.getElementsByTagName("input")[i].value = "";
            document.getElementById("warn").style.display="none";
        }
    }else{
        document.getElementById("warn").style.display="";
    }
}