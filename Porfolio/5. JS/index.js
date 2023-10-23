function addition(){
    var res = 5+6;
    alert(res);
}

function callAction(){
    document.getElementsByTagName("h1")[0].
    innerHTML = "Goodbye pals"

    var special = document.getElementsByClassName("special");
    for(i=0; i < specials.lenght; i++)
    special[i].innerHTML = "<b>Have a wonerful day</b>";

    document.getElementById("first").innerHTML="i'm the one";

    var liElements = document.querySelectorAll(".list li");
    for(i=0; i<liElements.length; i++){
        liElements[i].style.color="green";
    }

    document.querySelector(".list #first").classList.add
    ("highlight");

    document.querySelector("a").setAttribute("href","http://www.google.com");
    
    
}