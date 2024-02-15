function Sub(){
    for (let i = 0; i < document.getElementsByTagName("input").length-1; i++) {
        document.getElementsByTagName("input")[i].value = ""
        
    }
}