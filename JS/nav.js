function dropNav(){
    var menu= document.getElementById("menu");
    if(menu.className === "menu"){
        menu.className+=" responsive-nav";
    }
    else{
        menu.className="menu";
    }
    
}