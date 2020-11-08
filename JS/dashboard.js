var pane_item=document.getElementsByClassName("pane-item");
pane_item[0].style.display="block";
function display_item(n){
    var menu=document.getElementsByClassName("menu-item");
    for(let i=0; i<menu.length; i++){
        menu[i].classList.remove("active");
        pane_item[i].style.display="none";
    }

    menu[n].classList.add("active");
    pane_item[n].style.display="block";
    closeSideNav();
}





var sideNav= document.getElementById("left");
function dropSideNav(){
    sideNav.classList.add("responsive");
}
function closeSideNav(){
    sideNav.classList.remove("responsive");
}


function toggleInput(){
    var btn=document.getElementById("add-btn");
    var input= document.getElementById("skill-input");
    if(input.className == "skill-input"){
        input.classList.add("show");
        btn.classList.add("cancel-btn");
        btn.innerHTML="Cancel";
    }
    else{
        input.classList.remove("show");
        btn.classList.remove("cancel-btn");
        btn.innerHTML="Add+";

    }
}


